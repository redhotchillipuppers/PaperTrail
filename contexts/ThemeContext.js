import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const lightTheme = {
  background: '#F2F2F7',
  cardBackground: '#FFFFFF',
  cardBorder: '#E5E5EA',
  primaryText: '#1C1C1E',
  secondaryText: '#8E8E93',
  accent: '#007AFF',
  success: '#34C759',
  separator: '#F2F2F7',
  tabBarBackground: '#FFFFFF',
  tabBarBorder: '#E5E5EA',
  selectedBackground: '#F0F9FF',
  buttonDisabled: '#E5E5EA',
  shadow: '#000'
};

export const darkTheme = {
  background: '#000000',
  cardBackground: '#1C1C1E',
  cardBorder: '#38383A',
  primaryText: '#FFFFFF',
  secondaryText: '#8E8E93',
  accent: '#007AFF',
  success: '#34C759',
  separator: '#38383A',
  tabBarBackground: '#1C1C1E',
  tabBarBorder: '#38383A',
  selectedBackground: '#1E3A5F',
  buttonDisabled: '#38383A',
  shadow: '#000'
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const theme = isDarkMode ? darkTheme : lightTheme;
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;