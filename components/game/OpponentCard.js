import React from 'react';
import { View, Text } from 'react-native';
import { ChoiceButton } from './ChoiceButton';
import { choices } from '../../utils/gameUtils';

export const OpponentCard = ({ selectedHim, setSelectedHim }) => (
  <View style={{
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA'
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
        color: '#1C1C1E'
      }}>
        Opponent
      </Text>
      <View style={{
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: selectedHim ? '#34C759' : '#E5E5EA'
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
          isSelected={selectedHim === choice.id}
          onSelect={setSelectedHim}
        />
      ))}
    </View>
  </View>
);

export default OpponentCard;