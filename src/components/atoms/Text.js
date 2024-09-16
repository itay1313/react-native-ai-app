import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

const Text = ({ children, style }) => (
  <RNText style={[styles.text, style]}>{children}</RNText>
);

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
  },
});

export default Text;
