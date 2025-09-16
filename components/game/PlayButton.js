import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

export const PlayButton = ({ selectedHim, selectedYou, playRound }) => {
  const { theme } = useTheme();
  const isEnabled = selectedHim && selectedYou;
  
  return (
    <TouchableOpacity
      onPress={playRound}
      disabled={!isEnabled}
      style={{
        height: 50,
        backgroundColor: isEnabled ? theme.accent : theme.buttonDisabled,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{
        fontSize: 17,
        fontWeight: '600',
        color: isEnabled ? '#FFFFFF' : theme.secondaryText
      }}>
        {isEnabled ? 'Play Round' : 'Select Both Choices'}
      </Text>
    </TouchableOpacity>
  );
};