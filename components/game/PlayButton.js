import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const PlayButton = ({ selectedHim, selectedYou, playRound }) => (
  <TouchableOpacity
    onPress={playRound}
    disabled={!selectedHim || !selectedYou}
    style={{
      height: 50,
      backgroundColor: (selectedHim && selectedYou) ? '#007AFF' : '#E5E5EA',
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text style={{
      fontSize: 17,
      fontWeight: '600',
      color: (selectedHim && selectedYou) ? '#FFFFFF' : '#8E8E93'
    }}>
      {(selectedHim && selectedYou) ? 'Play Round' : 'Select Both Choices'}
    </Text>
  </TouchableOpacity>
);

export default PlayButton;