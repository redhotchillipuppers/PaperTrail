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
      />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 12
      }}>
        <Text style={{ fontSize: 17, color: '#1C1C1E' }}>Win Rate</Text>
        <Text style={{ 
          fontSize: 17, 
          fontWeight: '700', 
          color: '#007AFF' 
        }}>
          {gameData.length > 0 ? Math.round((wins / gameData.length) * 100) : 0}%
        </Text>
      </View>
    </View>
  );
};

export default PerformanceCard;