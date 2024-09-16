import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../components/molecules/Header';
import Text from '../components/atoms/Text';
import Card from '../components/atoms/Card';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="About Us" />
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://picsum.photos/400/200' }}
          style={styles.image}
        />
        <Text style={styles.title}>Our Story</Text>
        <Card>
          <Text>We are a passionate team dedicated to creating amazing apps and experiences.</Text>
        </Card>
        <Text style={styles.subtitle}>Our Mission</Text>
        <Card>
          <Text>To innovate and inspire through technology, making a positive impact on people's lives.</Text>
        </Card>
        <Text style={styles.subtitle}>Our Team</Text>
        <Image
          source={{ uri: 'https://picsum.photos/400/200?grayscale' }}
          style={styles.image}
        />
        <Card>
          <Text>A diverse group of talented individuals working together to bring ideas to life.</Text>
        </Card>
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
    marginBottom: 20,
    color: '#FFF',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#FFF',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default AboutScreen;
