import React from 'react';
import { View, Text } from 'react-native';
import { ChoiceButton } from './ChoiceButton';
import { choices } from '../../utils/gameUtils';
import { useTheme } from '../../contexts/ThemeContext';

export const PlayerCard = ({ selectedYou, setSelectedYou }) => {
  const { theme } = useTheme();
  
  return (
    <View style={{
      backgroundColor: theme.cardBackground,
      borderRadius: 12,
      padding: 20,
      marginBottom: 24,
      borderWidth: 1,
      borderColor: theme.cardBorder
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
      }}>
        <Text style={{
          fontSize: 17,
          fontWeight: '600',
          color: theme.primaryText
        }}>
          You
        </Text>
        <View style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: selectedYou ? theme.success : theme.separator
        }} />
      </View>
      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'center'
      }}>
        {choices.map(choice => (
          <ChoiceButton
            key={choice.id}
            choice={choice}
            isSelected={selectedYou === choice.id}
            onSelect={setSelectedYou}
          />
        ))}
      </View>
    </View>
  );
};