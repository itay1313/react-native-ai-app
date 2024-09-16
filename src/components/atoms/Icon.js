import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IconComponent = ({ name, size, color }) => (
  <View style={styles.iconContainer}>
    <Icon name={name} size={size} color={color} />
  </View>
);

const styles = StyleSheet.create({
  iconContainer: {
    padding: 10,
  },
});

export default IconComponent;
