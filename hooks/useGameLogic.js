import { useState, useEffect } from 'react';
import { getOutcome } from '../utils/gameUtils';
import { storage } from '../utils/storage';

export const useGameLogic = () => {
  const [activeTab, setActiveTab] = useState('game');
  const [selectedHim, setSelectedHim] = useState(null);
  const [selectedYou, setSelectedYou] = useState(null);
  const [gameData, setGameData] = useState([]);
  const [roundCount, setRoundCount] = useState(1);
  const [currentWinStreak, setCurrentWinStreak] = useState(0);
  const [bestWinStreak, setBestWinStreak] = useState(0);
  const [lastGameResult, setLastGameResult] = useState(null);
  const [showingResult, setShowingResult] = useState(false);

  useEffect(() => {
    const loadPersistedData = async () => {
      try {
        const [
          savedGameData,
          savedRoundCount,
          savedCurrentStreak,
          savedBestStreak
        ] = await Promise.all([
          storage.loadGameData(),
          storage.loadRoundCount(),
          storage.loadCurrentWinStreak(),
          storage.loadBestWinStreak()
        ]);

        setGameData(savedGameData);
        setRoundCount(savedRoundCount);
        setCurrentWinStreak(savedCurrentStreak);
        setBestWinStreak(savedBestStreak);
      } catch (error) {
        console.error('Failed to load persisted data:', error);
      }
    };

    loadPersistedData();
  }, []);

  const playRound = async () => {
    if (!selectedHim || !selectedYou || showingResult) return;

    const outcome = getOutcome(selectedYou, selectedHim);
    const newGame = {
      id: Date.now(),
      round: roundCount,
      yourChoice: selectedYou,
      friendChoice: selectedHim,
      outcome: outcome,
      timestamp: new Date().toISOString()
    };

    const updatedGameData = [...gameData, newGame];
    const updatedRoundCount = roundCount + 1;

    setGameData(updatedGameData);
    setRoundCount(updatedRoundCount);

    // Update win streak logic
    let updatedCurrentStreak = currentWinStreak;
    let updatedBestStreak = bestWinStreak;

    if (outcome === 'win') {
      updatedCurrentStreak = currentWinStreak + 1;
      setCurrentWinStreak(updatedCurrentStreak);
      if (updatedCurrentStreak > bestWinStreak) {
        updatedBestStreak = updatedCurrentStreak;
        setBestWinStreak(updatedBestStreak);
      }
    } else if (outcome === 'lose') {
      updatedCurrentStreak = 0;
      setCurrentWinStreak(0);
    }
    // Note: ties don't break the streak but don't extend it either

    // Persist data to AsyncStorage
    try {
      await Promise.all([
        storage.saveGameData(updatedGameData),
        storage.saveRoundCount(updatedRoundCount),
        storage.saveCurrentWinStreak(updatedCurrentStreak),
        storage.saveBestWinStreak(updatedBestStreak)
      ]);
    } catch (error) {
      console.error('Failed to save game data:', error);
    }

    // Store the result and show it briefly before resetting
    setLastGameResult(newGame);
    setShowingResult(true);

    // Reset selections after 2 seconds
    setTimeout(() => {
      setSelectedHim(null);
      setSelectedYou(null);
      setShowingResult(false);
      setLastGameResult(null);
    }, 2000);
  };

  const clearHistory = async () => {
    setGameData([]);
    setRoundCount(1);
    setCurrentWinStreak(0);
    setBestWinStreak(0);
    setLastGameResult(null);
    setShowingResult(false);

    // Clear AsyncStorage
    try {
      await storage.clearAllData();
    } catch (error) {
      console.error('Failed to clear persisted data:', error);
    }
  };

  return {
    activeTab,
    setActiveTab,
    selectedHim,
    setSelectedHim,
    selectedYou,
    setSelectedYou,
    gameData,
    roundCount,
    currentWinStreak,
    bestWinStreak,
    lastGameResult,
    showingResult,
    playRound,
    clearHistory
  };
};

export default useGameLogic;