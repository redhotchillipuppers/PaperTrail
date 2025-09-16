import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

export const TabBar = ({ activeTab, setActiveTab }) => {
  const { theme } = useTheme();
  const tabs = [
    { id: 'game', label: 'Game', icon: '🎯' },
    { id: 'analysis', label: 'Analysis', icon: '📊' },
    { id: 'simulator', label: 'Simulator', icon: '🤖' }
  ];

  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: theme.tabBarBackground,
      borderTopWidth: 1,
      borderTopColor: theme.tabBarBorder
    }}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.id}
          onPress={() => setActiveTab(tab.id)}
          style={{
            flex: 1,
            paddingVertical: 8,
            paddingBottom: 4,
            alignItems: 'center'
          }}
        >
          <Text style={{ 
            fontSize: 22, 
            marginBottom: 2,
            opacity: activeTab === tab.id ? 1 : 0.6
          }}>
            {tab.icon}
          </Text>
          <Text style={{
            fontSize: 10,
            fontWeight: '500',
            color: activeTab === tab.id ? theme.accent : theme.secondaryText
          }}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabBar;