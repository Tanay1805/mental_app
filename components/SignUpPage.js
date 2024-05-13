import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import ToggleButton from './ToggleButton';

const SignUpPage = ({ toggleLogin, isLogin, navigation }) => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = () => {
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!phoneRegex.test(inputValue) && !emailRegex.test(inputValue)) {
      setErrorMessage('Please enter a valid phone number or email address.');
      return;
    }
    setErrorMessage('');
    if (navigation) {
      navigation.navigate('OtpPage');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.semicircle} />
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone number or email address"
        value={inputValue}
        onChangeText={setInputValue}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      {!isLogin && <ToggleButton toggleLogin={toggleLogin} isLogin={isLogin} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeee5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  semicircle: {
    width: '100%',
    height: 250,
    backgroundColor: '#69B2A0',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    transform: [{ scaleX: 2 }],
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  title: {
    fontSize: 24,
    color: '#69B2A0',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#9AB268',
    borderBlockStartColor: '#9ab268',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#69B2A0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    marginLeft: 0,
  },
  errorMessage: {
    color: 'red',
    marginTop: 5,
    marginBottom: 10,
  },
});

export default SignUpPage;