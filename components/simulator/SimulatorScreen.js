import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Header } from '../shared/Header';
import { useTheme } from '../../contexts/ThemeContext';

export const SimulatorScreen = () => {
  const { theme } = useTheme();
  
  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }}>
      <View style={{ padding: 16 }}>
        <Header title="Simulator" />

        <View style={{
          backgroundColor: theme.cardBackground,
          borderRadius: 12,
          padding: 40,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: theme.cardBorder
        }}>
          <Text style={{ fontSize: 40, marginBottom: 16 }}>🤖</Text>
          <Text style={{ 
            fontSize: 17, 
            fontWeight: '600', 
            color: theme.primaryText, 
            marginBottom: 8 
          }}>
            Coming Soon
          </Text>
          <Text style={{ 
            fontSize: 15, 
            color: theme.secondaryText, 
            textAlign: 'center',
            lineHeight: 21
          }}>
            Train against an AI that learns your opponent's patterns
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};