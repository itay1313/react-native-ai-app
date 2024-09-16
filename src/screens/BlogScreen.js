import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import Header from '../components/molecules/Header';
import Text from '../components/atoms/Text';
import Card from '../components/atoms/Card';

const BlogScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Blog" />
      <View style={styles.content}>
        <Text style={styles.title}>Latest Posts</Text>
        <Card>
          <Image
            source={{ uri: 'https://picsum.photos/400/200?random=1' }}
            style={styles.image}
          />
          <Text style={styles.postTitle}>The Future of Mobile Apps</Text>
          <Text>Exploring upcoming trends in mobile app development...</Text>
        </Card>
        <Card>
          <Image
            source={{ uri: 'https://picsum.photos/400/200?random=2' }}
            style={styles.image}
          />
          <Text style={styles.postTitle}>Designing for Accessibility</Text>
          <Text>Best practices for creating inclusive mobile experiences...</Text>
        </Card>
        <Card>
          <Image
            source={{ uri: 'https://picsum.photos/400/200?random=3' }}
            style={styles.image}
          />
          <Text style={styles.postTitle}>React Native vs Native Development</Text>
          <Text>Comparing the pros and cons of different mobile development approaches...</Text>
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
  postTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default BlogScreen;
