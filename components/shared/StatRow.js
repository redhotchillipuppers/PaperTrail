import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

export const StatRow = ({ label, value, color, isLast = false }) => {
  const { theme } = useTheme();
  const textColor = color || theme.secondaryText;
  
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 12,
      borderBottomWidth: isLast ? 0 : 1,
      borderBottomColor: theme.separator
    }}>
      <Text style={{ fontSize: 17, color: theme.primaryText }}>{label}</Text>
      <Text style={{ fontSize: 17, fontWeight: '600', color: textColor }}>{value}</Text>
    </View>
  );
};