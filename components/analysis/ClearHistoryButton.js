import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

export const ClearHistoryButton = ({ clearHistory }) => {
  const { theme } = useTheme();
  
  return (
    <TouchableOpacity
      onPress={clearHistory}
      style={{
        height: 50,
        backgroundColor: theme.accent,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
      }}
    >
      <Text style={{
        fontSize: 17,
        fontWeight: '600',
        color: '#FFFFFF'
      }}>
        Clear History
      </Text>
    </TouchableOpacity>
  );
};