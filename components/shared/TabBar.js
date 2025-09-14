import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const TabBar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'game', label: 'Game', icon: '🎯' },
    { id: 'analysis', label: 'Analysis', icon: '📊' },
    { id: 'simulator', label: 'Simulator', icon: '🤖' }
  ];

  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      borderTopWidth: 1,
      borderTopColor: '#E5E5EA'
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
            color: activeTab === tab.id ? '#007AFF' : '#8E8E93'
          }}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabBar;