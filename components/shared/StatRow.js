import React from 'react';
import { View, Text } from 'react-native';

export const StatRow = ({ label, value, color = '#8E8E93' }) => (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7'
  }}>
    <Text style={{ fontSize: 17, color: '#1C1C1E' }}>{label}</Text>
    <Text style={{ fontSize: 17, fontWeight: '600', color }}>{value}</Text>
  </View>
);

export default StatRow;