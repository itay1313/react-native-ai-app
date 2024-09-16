import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children }) => (
  <View style={styles.card}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default Card;
