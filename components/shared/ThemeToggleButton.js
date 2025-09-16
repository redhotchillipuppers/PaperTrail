import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeToggleButton = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  
  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={{
        position: 'absolute',
        top: 50,
        right: 16,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: theme.cardBackground,
        borderWidth: 1,
        borderColor: theme.cardBorder,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: theme.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
      }}
    >
      <Text style={{ fontSize: 20 }}>
        {isDarkMode ? '☀️' : '🌙'}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemeToggleButton;