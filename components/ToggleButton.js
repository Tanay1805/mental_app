import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const ToggleButton = ({ navigation, isLogin, toggleLogin }) => {
  return (
    <TouchableOpacity style={styles.toggleButton} onPress={() => {
      toggleLogin();
      if (navigation) {
        isLogin ? navigation.navigate('SignUp') : navigation.navigate('Login');
      }
    }}>
      <Text style={styles.toggleButtonText}>
        {isLogin ? 'Create an account' : 'Already have an account? Log in'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
    borderWidth:1,
    borderColor: '#eaeee5'
  },
  toggleButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});

export default ToggleButton;