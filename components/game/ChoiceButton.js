import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const ChoiceButton = ({ choice, isSelected, onSelect }) => (
  <TouchableOpacity
    onPress={() => onSelect(choice.id)}
    style={{
      width: 80,
      height: 80,
      marginHorizontal: 8,
      borderWidth: isSelected ? 2 : 1,
      borderColor: isSelected ? '#007AFF' : '#E5E5EA',
      borderRadius: 12,
      backgroundColor: isSelected ? '#F0F9FF' : '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: isSelected ? '#007AFF' : '#000',
      shadowOffset: { width: 0, height: isSelected ? 4 : 2 },
      shadowOpacity: isSelected ? 0.1 : 0.05,
      shadowRadius: isSelected ? 8 : 4,
      elevation: isSelected ? 4 : 2
    }}
  >
    <Text style={{ fontSize: 28, marginBottom: 4 }}>
      {choice.emoji}
    </Text>
    <Text style={{ fontSize: 11, color: '#8E8E93' }}>
      {choice.label}
    </Text>
  </TouchableOpacity>
);

export default ChoiceButton;