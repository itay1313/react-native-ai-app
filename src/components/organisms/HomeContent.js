import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '../molecules/Header';
import Card from '../atoms/Card';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const HomeContent = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <Header title="Home" />
    <View style={styles.content}>
      <Text style={styles.title}>Welcome to Our App</Text>
      <Card>
        <Text style={styles.cardTitle}>Featured Content</Text>
        <Text>Check out our latest blog posts and updates!</Text>
        <Button title="Go to Blog" onPress={() => navigation.navigate('Blog')} />
      </Card>
      <Card>
        <Text style={styles.cardTitle}>About Us</Text>
        <Text>Learn more about our company and mission.</Text>
        <Button title="About Us" onPress={() => navigation.navigate('About')} />
      </Card>
      <Card>
        <Text style={styles.cardTitle}>Get in Touch</Text>
        <Text>Have questions? Contact us today!</Text>
        <Button title="Contact Us" onPress={() => navigation.navigate('Contact')} />
      </Card>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeContent;
