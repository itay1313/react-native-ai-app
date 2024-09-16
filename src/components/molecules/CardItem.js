import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';

const CardItem = ({ icon, title, description }) => (
  <View style={styles.container}>
    <Icon name={icon} size={24} color="#FFF" />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
});

export default CardItem;
