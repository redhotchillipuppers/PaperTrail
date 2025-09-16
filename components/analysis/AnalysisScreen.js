import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Header } from '../shared/Header';
import { PerformanceCard } from './PerformanceCard';
import { WinRateCard } from './WinRateCard';
import { OpponentPatternsCard } from './OpponentPatternsCard';
import { ClearHistoryButton } from './ClearHistoryButton';

export const AnalysisScreen = ({ gameData, clearHistory }) => (
  <ScrollView style={{ flex: 1, backgroundColor: '#F2F2F7' }}>
    <View style={{ padding: 16 }}>
      <Header title="Analysis" />
      
      {gameData.length === 0 ? (
        <View style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 12,
          padding: 40,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#E5E5EA'
        }}>
          <Text style={{ fontSize: 40, marginBottom: 16 }}>📊</Text>
          <Text style={{ 
            fontSize: 17, 
            fontWeight: '600', 
            color: '#1C1C1E', 
            marginBottom: 8 
          }}>
            No Games Yet
          </Text>
          <Text style={{ 
            fontSize: 15, 
            color: '#8E8E93', 
            textAlign: 'center'
          }}>
            Play some rounds to see patterns
          </Text>
        </View>
      ) : (
        <>
          <PerformanceCard gameData={gameData} />
          <WinRateCard gameData={gameData} />
          <OpponentPatternsCard gameData={gameData} />
          <ClearHistoryButton clearHistory={clearHistory} />
        </>
      )}
    </View>
  </ScrollView>
);

export default AnalysisScreen;