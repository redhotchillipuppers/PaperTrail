import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  GAME_DATA: '@PaperTrail:gameData',
  ROUND_COUNT: '@PaperTrail:roundCount',
  CURRENT_WIN_STREAK: '@PaperTrail:currentWinStreak',
  BEST_WIN_STREAK: '@PaperTrail:bestWinStreak',
  THEME_PREFERENCE: '@PaperTrail:themePreference'
};

export const storage = {
  async saveGameData(gameData) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.GAME_DATA, JSON.stringify(gameData));
    } catch (error) {
      console.error('Error saving game data:', error);
    }
  },

  async loadGameData() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.GAME_DATA);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading game data:', error);
      return [];
    }
  },

  async saveRoundCount(roundCount) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.ROUND_COUNT, roundCount.toString());
    } catch (error) {
      console.error('Error saving round count:', error);
    }
  },

  async loadRoundCount() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.ROUND_COUNT);
      return data ? parseInt(data, 10) : 1;
    } catch (error) {
      console.error('Error loading round count:', error);
      return 1;
    }
  },

  async saveCurrentWinStreak(streak) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.CURRENT_WIN_STREAK, streak.toString());
    } catch (error) {
      console.error('Error saving current win streak:', error);
    }
  },

  async loadCurrentWinStreak() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.CURRENT_WIN_STREAK);
      return data ? parseInt(data, 10) : 0;
    } catch (error) {
      console.error('Error loading current win streak:', error);
      return 0;
    }
  },

  async saveBestWinStreak(streak) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.BEST_WIN_STREAK, streak.toString());
    } catch (error) {
      console.error('Error saving best win streak:', error);
    }
  },

  async loadBestWinStreak() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.BEST_WIN_STREAK);
      return data ? parseInt(data, 10) : 0;
    } catch (error) {
      console.error('Error loading best win streak:', error);
      return 0;
    }
  },

  async saveThemePreference(isDarkMode) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.THEME_PREFERENCE, JSON.stringify(isDarkMode));
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  },

  async loadThemePreference() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.THEME_PREFERENCE);
      return data ? JSON.parse(data) : false;
    } catch (error) {
      console.error('Error loading theme preference:', error);
      return false;
    }
  },

  async clearAllData() {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.GAME_DATA,
        STORAGE_KEYS.ROUND_COUNT,
        STORAGE_KEYS.CURRENT_WIN_STREAK,
        STORAGE_KEYS.BEST_WIN_STREAK
      ]);
    } catch (error) {
      console.error('Error clearing game data:', error);
    }
  }
};

export default storage;