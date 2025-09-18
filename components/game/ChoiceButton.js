import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../../contexts/ThemeContext';

export const ChoiceButton = ({ choice, isSelected, onSelect }) => {
  const { theme } = useTheme();
  
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onSelect(choice.id);
  };
  
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        width: 80,
        height: 80,
        marginHorizontal: 8,
        borderWidth: isSelected ? 2 : 1,
        borderColor: isSelected ? theme.accent : theme.cardBorder,
        borderRadius: 12,
        backgroundColor: isSelected ? theme.selectedBackground : theme.cardBackground,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: isSelected ? theme.accent : theme.shadow,
        shadowOffset: { width: 0, height: isSelected ? 4 : 2 },
        shadowOpacity: isSelected ? 0.1 : 0.05,
        shadowRadius: isSelected ? 8 : 4,
        elevation: isSelected ? 4 : 2
      }}
    >
      <Text style={{ fontSize: 28, marginBottom: 4 }}>
        {choice.emoji}
      </Text>
      <Text style={{ fontSize: 11, color: theme.secondaryText }}>
        {choice.label}
      </Text>
    </TouchableOpacity>
  );
};