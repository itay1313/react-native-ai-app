import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../atoms/Text';
import Input from '../atoms/Input';

const FormField = ({ label, value, onChangeText, placeholder }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <Input value={value} onChangeText={onChangeText} placeholder={placeholder} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
  },
});

export default FormField;
