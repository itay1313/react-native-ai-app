import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <View style={styles.container}>
      <FormField
        label="Name"
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <FormField
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
  },
});

export default Form;
