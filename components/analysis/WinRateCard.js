import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

export const WinRateCard = ({ gameData }) => {
  const { theme } = useTheme();
  const wins = gameData.filter(g => g.outcome === 'win').length;
  const winRate = gameData.length > 0 ? Math.round((wins / gameData.length) * 100) : 0;
  
  // Calculate color based on win rate (red to green gradient)
  const getSliderColor = (percentage) => {
    if (percentage <= 50) {
      // Red to yellow (0-50%)
      const ratio = percentage / 50;
      return `rgb(${255}, ${Math.round(255 * ratio)}, 0)`;
    } else {
      // Yellow to green (50-100%)
      const ratio = (percentage - 50) / 50;
      return `rgb(${Math.round(255 * (1 - ratio))}, 255, 0)`;
    }
  };

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
        textAlign: 'center',
        marginBottom: 20
      }}>
        Win Rate
      </Text>
      
      <View style={{ alignItems: 'center' }}>
        {/* Slider Track */}
        <View style={{
          width: '100%',
          height: 8,
          backgroundColor: theme.separator,
          borderRadius: 4,
          marginBottom: 16,
          overflow: 'hidden'
        }}>
          {/* Gradient Background */}
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            flexDirection: 'row'
          }}>
            {Array.from({ length: 100 }, (_, i) => (
              <View
                key={i}
                style={{
                  flex: 1,
                  backgroundColor: getSliderColor(i + 1)
                }}
              />
            ))}
          </View>
          
          {/* Progress Indicator */}
          <View style={{
            position: 'absolute',
            top: -2,
            left: `${winRate}%`,
            width: 12,
            height: 12,
            backgroundColor: theme.cardBackground,
            borderRadius: 6,
            borderWidth: 2,
            borderColor: getSliderColor(winRate),
            marginLeft: -6,
            shadowColor: theme.shadow,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3
          }} />
        </View>
        
        {/* Percentage Display */}
        <Text style={{
          fontSize: 24,
          fontWeight: '700',
          color: theme.accent
        }}>
          {winRate}%
        </Text>
      </View>
    </View>
  );
};