import { useState } from 'react';
import { getOutcome } from '../utils/gameUtils';

export const useGameLogic = () => {
  const [activeTab, setActiveTab] = useState('game');
  const [selectedHim, setSelectedHim] = useState(null);
  const [selectedYou, setSelectedYou] = useState(null);
  const [gameData, setGameData] = useState([]);
  const [roundCount, setRoundCount] = useState(1);

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
    
    // Reset for next round
    setSelectedHim(null);
    setSelectedYou(null);
  };

  const clearHistory = () => {
    setGameData([]);
    setRoundCount(1);
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
    playRound,
    clearHistory
  };
};

export default useGameLogic;