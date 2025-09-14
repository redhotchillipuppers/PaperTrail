import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { useGameLogic } from './hooks/useGameLogic';
import { GameScreen } from './components/game/GameScreen';
import { AnalysisScreen } from './components/analysis/AnalysisScreen';
import { SimulatorScreen } from './components/simulator/SimulatorScreen';
import { TabBar } from './components/shared/TabBar';

const PaperTrail = () => {
  const gameLogic = useGameLogic();
  const {
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
  } = gameLogic;

  const renderScreen = () => {
    switch (activeTab) {
      case 'game': 
        return (
          <GameScreen 
            selectedHim={selectedHim}
            setSelectedHim={setSelectedHim}
            selectedYou={selectedYou}
            setSelectedYou={setSelectedYou}
            roundCount={roundCount}
            playRound={playRound}
          />
        );
      case 'analysis': 
        return (
          <AnalysisScreen 
            gameData={gameData}
            clearHistory={clearHistory}
          />
        );
      case 'simulator': 
        return <SimulatorScreen />;
      default: 
        return (
          <GameScreen 
            selectedHim={selectedHim}
            setSelectedHim={setSelectedHim}
            selectedYou={selectedYou}
            setSelectedYou={setSelectedYou}
            roundCount={roundCount}
            playRound={playRound}
          />
        );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F2F7' }}>
      <StatusBar style="auto" />
      
      {renderScreen()}

      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
};

export default PaperTrail;