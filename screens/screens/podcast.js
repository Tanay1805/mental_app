import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function Podcast() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Podcast
      </Text>
      <Image
        source={require('./assets/snack-icon.png')} 
        style={styles.image}
      />
      <Card>
        {/* Your card content */}
      </Card>
      <button style={styles.button}>  
        {/* Your button content */}
      </button>
        <Text style={styles.paragraph1}>
        I dont know some podcast
      </Text>
      <Text style={styles.paragraph2}>
        Episode 1: Something
      </Text>
      <button style={styles.button2}>  
      </button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EAEEE5',
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 150, 
  },
  button: {
    width: 50,
    marginLeft: 145,
    height: 20,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 20, 
  },
  paragraph1: {
    margin:10,
    fontSize: 10,
  },
  paragraph2: {
    margin:10,
    fontSize: 24,
    fontWeight: 'bold'
  },
  button2: {
    width: 50,
    marginLeft: 25,
    height: 20,
    backgroundColor:'black',
    marginBottom: 100, 

  },
});