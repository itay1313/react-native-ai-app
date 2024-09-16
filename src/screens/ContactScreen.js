import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../components/molecules/Header';
import Text from '../components/atoms/Text';
import Form from '../components/organisms/Form';

const ContactScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Contact Us" />
      <View style={styles.content}>
        <Text style={styles.title}>Get in Touch</Text>
        <Image
          source={{ uri: 'https://picsum.photos/400/200?random=4' }}
          style={styles.image}
        />
        <Text style={styles.subtitle}>We'd love to hear from you!</Text>
        <Form />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#FFF',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default ContactScreen;
