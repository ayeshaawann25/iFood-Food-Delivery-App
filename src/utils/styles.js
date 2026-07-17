import { StyleSheet, Platform } from 'react-native';

export const colors = {
  primary: '#FF6B35',
  secondary: '#FF8A5C',
  background: '#F5F5F5',
  white: '#FFFFFF',
  black: '#333333',
  gray: '#666666',
  lightGray: '#999999',
  border: '#EEEEEE',
  success: '#4CAF50',
  error: '#FF4444',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    color: colors.black,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textPrimary: {
    color: colors.primary,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
