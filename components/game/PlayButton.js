import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

export const PlayButton = ({ selectedHim, selectedYou, playRound, showingResult, lastGameResult }) => {
  const { theme } = useTheme();
  const isEnabled = selectedHim && selectedYou;
  
  const getResultText = () => {
    if (!showingResult || !lastGameResult) return isEnabled ? 'Play Round' : 'Select Both Choices';

    const { outcome } = lastGameResult;
    if (outcome === 'win') return '🎉 You Won!';
    if (outcome === 'lose') return '😔 You Lost!';
    return '🤝 It\'s a Tie!';
  };

  const getResultColor = () => {
    if (!showingResult || !lastGameResult) return isEnabled ? theme.accent : theme.buttonDisabled;

    const { outcome } = lastGameResult;
    if (outcome === 'win') return '#22c55e'; // green
    if (outcome === 'lose') return '#ef4444'; // red
    return '#f59e0b'; // amber for tie
  };

  return (
    <TouchableOpacity
      onPress={playRound}
      disabled={!isEnabled || showingResult}
      style={{
        height: 50,
        backgroundColor: getResultColor(),
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{
        fontSize: 17,
        fontWeight: '600',
        color: '#FFFFFF'
      }}>
        {getResultText()}
      </Text>
    </TouchableOpacity>
  );
};