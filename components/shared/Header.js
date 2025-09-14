import React from 'react';
import { View, Text } from 'react-native';

export const Header = ({ title, subtitle }) => (
  <View style={{ alignItems: 'center', marginBottom: 32, paddingTop: 8 }}>
    <Text style={{
      fontSize: 28,
      fontWeight: '700',
      color: '#1C1C1E',
      marginBottom: 4,
      letterSpacing: -0.5
    }}>
      {title}
    </Text>
    {subtitle && (
      <Text style={{
        fontSize: 15,
        color: '#8E8E93',
        fontWeight: '400'
      }}>
        {subtitle}
      </Text>
    )}
  </View>
);

export default Header;