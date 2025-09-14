import React from 'react';
import { View, Text } from 'react-native';
import { StatRow } from '../shared/StatRow';

export const PerformanceCard = ({ gameData }) => {
  const wins = gameData.filter(g => g.outcome === 'win').length;
  const losses = gameData.filter(g => g.outcome === 'lose').length;
  const ties = gameData.filter(g => g.outcome === 'tie').length;

  return (
    <View style={{
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      padding: 20,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: '#E5E5EA'
    }}>
      <Text style={{
        fontSize: 17,
        fontWeight: '600',
        color: '#1C1C1E',
        marginBottom: 16
      }}>
        Performance
      </Text>
      <StatRow 
        label="Wins" 
        value={wins} 
        color="#007AFF"
      />
      <StatRow 
        label="Losses" 
        value={losses} 
        color="#007AFF"
      />
      <StatRow 
        label="Ties" 
        value={ties} 
        color="#007AFF"
        isLast={true}
      />
    </View>
  );
};

export default PerformanceCard;