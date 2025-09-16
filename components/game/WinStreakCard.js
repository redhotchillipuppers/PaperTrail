import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

export const WinStreakCard = ({ currentStreak, bestStreak }) => {
  const { theme } = useTheme();
  
  return (
    <View style={{
      backgroundColor: theme.cardBackground,
      borderRadius: 12,
      padding: 16,
      marginTop: 16,
      borderWidth: 1,
      borderColor: theme.cardBorder,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{
          fontSize: 13,
          color: theme.secondaryText,
          fontWeight: '500',
          marginBottom: 4
        }}>
          Current Streak
        </Text>
        <Text style={{
          fontSize: 24,
          fontWeight: '700',
          color: currentStreak > 0 ? theme.accent : theme.secondaryText
        }}>
          {currentStreak}
        </Text>
      </View>
      
      <View style={{
        width: 1,
        height: 40,
        backgroundColor: theme.separator
      }} />
      
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{
          fontSize: 13,
          color: theme.secondaryText,
          fontWeight: '500',
          marginBottom: 4
        }}>
          Best Streak
        </Text>
        <Text style={{
          fontSize: 24,
          fontWeight: '700',
          color: bestStreak > 0 ? theme.accent : theme.secondaryText
        }}>
          {bestStreak}
        </Text>
      </View>
    </View>
  );
};