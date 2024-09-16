import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../atoms/Text';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="menu" size={24} color="#FFF" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginLeft: 20,
  },
});

export default Header;
