import React from 'react';
import { View, Text } from 'react-native';
import { choices } from '../../utils/gameUtils';
import { useTheme } from '../../contexts/ThemeContext';

export const OpponentPatternsCard = ({ gameData }) => {
  const { theme } = useTheme();
  const friendChoices = gameData.reduce((acc, game) => {
    acc[game.friendChoice] = (acc[game.friendChoice] || 0) + 1;
    return acc;
  }, {});

  return (
    <View style={{
      backgroundColor: theme.cardBackground,
      borderRadius: 12,
      padding: 20,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: theme.cardBorder
    }}>
      <Text style={{
        fontSize: 17,
        fontWeight: '600',
        color: theme.primaryText,
        marginBottom: 16
      }}>
        Opponent Patterns
      </Text>
      {Object.entries(friendChoices)
        .sort(([,a], [,b]) => b - a) // Sort by count, highest first
        .map(([choice, count], index, sortedArray) => {
        const percentage = Math.round((count / gameData.length) * 100);
        const choiceEmoji = choices.find(c => c.id === choice)?.emoji || '';
        const isLast = index === sortedArray.length - 1;
        
        return (
          <View key={choice}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 12
            }}>
              <Text style={{ 
                fontSize: 17, 
                color: theme.primaryText,
                textTransform: 'capitalize'
              }}>
                {choiceEmoji} {choice}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{
                  width: 60,
                  height: 6,
                  backgroundColor: theme.separator,
                  borderRadius: 3,
                  marginRight: 12,
                  overflow: 'hidden'
                }}>
                  <View style={{
                    width: `${percentage}%`,
                    height: '100%',
                    backgroundColor: theme.accent
                  }} />
                </View>
                <Text style={{ 
                  fontSize: 15, 
                  color: theme.secondaryText,
                  minWidth: 35,
                  textAlign: 'right'
                }}>
                  {percentage}%
                </Text>
              </View>
            </View>
            {!isLast && <View style={{ height: 1, backgroundColor: theme.separator }} />}
          </View>
        );
      })}
    </View>
  );
};