import React from 'react';
import { View, Text } from 'react-native';
import { StatRow } from '../shared/StatRow';
import { useTheme } from '../../contexts/ThemeContext';

export const PerformanceCard = ({ gameData }) => {
  const { theme } = useTheme();
  const wins = gameData.filter(g => g.outcome === 'win').length;
  const losses = gameData.filter(g => g.outcome === 'lose').length;
  const ties = gameData.filter(g => g.outcome === 'tie').length;

  return (
    <View style={{
      backgroundColor: theme.cardBackground,
      borderRadius: 12,
      padding: 20,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: theme.cardBorder
    }}>
      <Text style={{
        fontSize: 17,
        fontWeight: '600',
        color: theme.primaryText,
        marginBottom: 16
      }}>
        Performance
      </Text>
      <StatRow 
        label="Wins" 
        value={wins} 
        color={theme.accent}
      />
      <StatRow 
        label="Losses" 
        value={losses} 
        color={theme.accent}
      />
      <StatRow 
        label="Ties" 
        value={ties} 
        color={theme.accent}
        isLast={true}
      />
    </View>
  );
};