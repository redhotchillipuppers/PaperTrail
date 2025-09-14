import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const ClearHistoryButton = ({ clearHistory }) => (
  <TouchableOpacity
    onPress={clearHistory}
    style={{
      height: 50,
      backgroundColor: '#007AFF',
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

export default ClearHistoryButton;