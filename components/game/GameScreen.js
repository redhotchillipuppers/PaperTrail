import React from 'react';
import { ScrollView, View } from 'react-native';
import { Header } from '../shared/Header';
import { OpponentCard } from './OpponentCard';
import { PlayerCard } from './PlayerCard';
import { PlayButton } from './PlayButton';
import { WinStreakCard } from './WinStreakCard';

export const GameScreen = ({ 
  selectedHim, 
  setSelectedHim, 
  selectedYou, 
  setSelectedYou, 
  roundCount, 
  currentWinStreak,
  bestWinStreak,
  playRound 
}) => (
  <ScrollView style={{ flex: 1, backgroundColor: '#F2F2F7' }}>
    <View style={{ padding: 16 }}>
      <Header title="Paper Trail" subtitle={`Round ${roundCount}`} />
      
      <OpponentCard 
        selectedHim={selectedHim} 
        setSelectedHim={setSelectedHim} 
      />
      
      <PlayerCard 
        selectedYou={selectedYou} 
        setSelectedYou={setSelectedYou} 
      />
      
      <PlayButton 
        selectedHim={selectedHim} 
        selectedYou={selectedYou} 
        playRound={playRound} 
      />
      
      <WinStreakCard 
        currentStreak={currentWinStreak}
        bestStreak={bestWinStreak}
      />
    </View>
  </ScrollView>
);

export default GameScreen;