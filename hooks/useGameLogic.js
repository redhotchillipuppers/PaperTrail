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

  const playRound = () => {
    if (!selectedHim || !selectedYou) return;
    
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
    
    // Reset for next round
    setSelectedHim(null);
    setSelectedYou(null);
  };

  const clearHistory = () => {
    setGameData([]);
    setRoundCount(1);
    setCurrentWinStreak(0);
    setBestWinStreak(0);
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
    playRound,
    clearHistory
  };
};

export default useGameLogic;