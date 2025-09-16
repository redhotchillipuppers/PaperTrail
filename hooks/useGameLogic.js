import { useState } from 'react';
import { getOutcome } from '../utils/gameUtils';

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

  const playRound = () => {
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

    setGameData(prev => [...prev, newGame]);
    setRoundCount(prev => prev + 1);

    // Update win streak logic
    if (outcome === 'win') {
      const newStreak = currentWinStreak + 1;
      setCurrentWinStreak(newStreak);
      if (newStreak > bestWinStreak) {
        setBestWinStreak(newStreak);
      }
    } else if (outcome === 'lose') {
      setCurrentWinStreak(0);
    }
    // Note: ties don't break the streak but don't extend it either

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

  const clearHistory = () => {
    setGameData([]);
    setRoundCount(1);
    setCurrentWinStreak(0);
    setBestWinStreak(0);
    setLastGameResult(null);
    setShowingResult(false);
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