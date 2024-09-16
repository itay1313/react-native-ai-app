import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import Card from '../components/atoms/Card';
import Text from '../components/atoms/Text';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons directly

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const spotifyTrackId = '47w6S27JF4Zvrz1Wd6R66Z'; // Replace with your desired track ID

  return (
    <ScrollView style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{currentTime}</Text>
      </View>
      <View style={styles.content}>
        <Card>
          <View style={styles.sectionHeader}>
            <Ionicons name="musical-notes" size={24} color="#FFF" />
            <Text style={styles.sectionTitle}>Now Playing</Text>
          </View>
          <WebView
            style={styles.spotifyPlayer}
            source={{
              uri: `https://open.spotify.com/embed/track/${spotifyTrackId}`,
            }}
            allowsInlineMediaPlayback
            mediaPlaybackRequiresUserAction={false}
          />
        </Card>
        <Card>
          <View style={styles.sectionHeader}>
            <Ionicons name="partly-sunny" size={24} color="#FFF" />
            <Text style={styles.sectionTitle}>Weather</Text>
          </View>
          <Text>Sunny, 72°F</Text>
          <Text>High: 75°F, Low: 65°F</Text>
        </Card>
        <Card>
          <View style={styles.sectionHeader}>
            <Ionicons name="calendar" size={24} color="#FFF" />
            <Text style={styles.sectionTitle}>Calendar</Text>
          </View>
          <Text>9:00 AM - Team Meeting</Text>
          <Text>2:00 PM - Project Review</Text>
          <Text>4:30 PM - Client Call</Text>
        </Card>
        <Card>
          <View style={styles.sectionHeader}>
            <Ionicons name="list" size={24} color="#FFF" />
            <Text style={styles.sectionTitle}>Tasks</Text>
          </View>
          <Text>• Finish project proposal</Text>
          <Text>• Review code changes</Text>
          <Text>• Update documentation</Text>
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
  timeContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#7B61FF', // Changed to #7B61FF
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFF', // Changed to white for better contrast
  },
  content: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#FFF',
  },
  spotifyPlayer: {
    width: width - 80, // Adjust based on your padding
    height: 352,
    backgroundColor: '#333',
  },
});

export default HomeScreen;
