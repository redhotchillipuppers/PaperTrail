import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Header } from '../shared/Header';

export const SimulatorScreen = () => (
  <ScrollView style={{ flex: 1, backgroundColor: '#F2F2F7' }}>
    <View style={{ padding: 16 }}>
      <Header title="Simulator" />

      <View style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 40,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E5EA'
      }}>
        <Text style={{ fontSize: 40, marginBottom: 16 }}>🤖</Text>
        <Text style={{ 
          fontSize: 17, 
          fontWeight: '600', 
          color: '#1C1C1E', 
          marginBottom: 8 
        }}>
          Coming Soon
        </Text>
        <Text style={{ 
          fontSize: 15, 
          color: '#8E8E93', 
          textAlign: 'center',
          lineHeight: 21
        }}>
          Train against an AI that learns your opponent's patterns
        </Text>
      </View>
    </View>
  </ScrollView>
);

export default SimulatorScreen;