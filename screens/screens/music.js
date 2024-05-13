import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const musicTracks = [
  { id: 1, title: 'Track 1', artist: 'Artist 1', },
  { id: 2, title: 'Track 2', artist: 'Artist 2', },
];

export default function MusicPage() {
  const renderTrack = ({ item }) => (
    <TouchableOpacity style={styles.trackContainer}>
      <Image source={item.image} style={styles.trackImage} />
      <Text style={styles.trackTitle}>{item.title}</Text>
      <Text style={styles.trackArtist}>{item.artist}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Music Page</Text>
            {/* <Image  source={require('./assets/snack-icon.png')} 
        style={styles.image}/> */}
        <Text style={styles.hr}>____________________________</Text>

      <FlatList
        data={musicTracks}
        renderItem={renderTrack}
        keyExtractor={(item) => item.id.toString()}
        style={styles.trackList}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEEE5',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 20, 
  },
  hr:{
    textAlign:'center'
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  trackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  trackImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginLeft:20,
  },
  trackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  trackArtist: {
    fontSize: 16,
    color: 'gray',
  },
  trackList: {
    marginTop: 20,
  },
});