import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Header } from '../shared/Header';
import { PerformanceCard } from './PerformanceCard';
import { WinRateCard } from './WinRateCard';
import { OpponentPatternsCard } from './OpponentPatternsCard';
import { ClearHistoryButton } from './ClearHistoryButton';
import { useTheme } from '../../contexts/ThemeContext';

export const AnalysisScreen = ({ gameData, clearHistory }) => {
  const { theme } = useTheme();
  
  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }}>
      <View style={{ padding: 16 }}>
        <Header title="Analysis" />
        
        {gameData.length === 0 ? (
          <View style={{
            backgroundColor: theme.cardBackground,
            borderRadius: 12,
            padding: 40,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: theme.cardBorder
          }}>
            <Text style={{ fontSize: 40, marginBottom: 16 }}>📊</Text>
            <Text style={{ 
              fontSize: 17, 
              fontWeight: '600', 
              color: theme.primaryText, 
              marginBottom: 8 
            }}>
              No Games Yet
            </Text>
            <Text style={{ 
              fontSize: 15, 
              color: theme.secondaryText, 
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
};