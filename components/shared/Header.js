import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { ThemeToggleButton } from './ThemeToggleButton';

export const Header = ({ title, subtitle }) => {
  const { theme } = useTheme();
  
  return (
    <View style={{ alignItems: 'center', marginBottom: 32, paddingTop: 8 }}>
      <ThemeToggleButton />
      <Text style={{
        fontSize: 28,
        fontWeight: '700',
        color: theme.primaryText,
        marginBottom: 4,
        letterSpacing: -0.5
      }}>
        {title}
      </Text>
      {subtitle && (
        <Text style={{
          fontSize: 15,
          color: theme.secondaryText,
          fontWeight: '400'
        }}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

export default Header;