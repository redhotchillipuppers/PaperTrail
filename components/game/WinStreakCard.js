import React from 'react';
import { View, Text } from 'react-native';

export const WinStreakCard = ({ currentStreak, bestStreak }) => {
  return (
    <View style={{
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      padding: 16,
      marginTop: 16,
      borderWidth: 1,
      borderColor: '#E5E5EA',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{
          fontSize: 13,
          color: '#8E8E93',
          fontWeight: '500',
          marginBottom: 4
        }}>
          Current Streak
        </Text>
        <Text style={{
          fontSize: 24,
          fontWeight: '700',
          color: currentStreak > 0 ? '#34C759' : '#8E8E93'
        }}>
          {currentStreak}
        </Text>
      </View>
      
      <View style={{
        width: 1,
        height: 40,
        backgroundColor: '#F2F2F7'
      }} />
      
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{
          fontSize: 13,
          color: '#8E8E93',
          fontWeight: '500',
          marginBottom: 4
        }}>
          Best Streak
        </Text>
        <Text style={{
          fontSize: 24,
          fontWeight: '700',
          color: bestStreak > 0 ? '#FF9500' : '#8E8E93'
        }}>
          {bestStreak}
        </Text>
      </View>
    </View>
  );
};

export default WinStreakCard;