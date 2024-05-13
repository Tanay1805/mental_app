import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, TextInput, Alert } from 'react-native';

export default function OtpPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const correctOtp = '123456';

  const otpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  const onPress = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === correctOtp) {
      Alert.alert('OTP verified successfully!');
    } else {
      Alert.alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.semicircle} />
      <View style={styles.page}>
        <Text style={styles.paragraph}>OTP VERIFICATION</Text>
        <Text style={styles.para}>Verify</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={digit}
              onChangeText={(text) => otpChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.para2}>Didn't receive one? </Text>
      <Text style={styles.para3}>Click here to resend</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eaeee5',
    padding: 2,
  },
  page: {
    backgroundColor: '#eaeee5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  para: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'left',
    marginRight: 270,
    color: '#2C6975',
    fontWeight: 'bold',
    fontSize: 16,
  },
  para2: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'semibold',
    fontSize: 15,
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  para3: {
    marginTop: 7,
    textAlign: 'center',
    fontWeight: 'semibold',
    fontSize: 16,
    color: '#179238',
    alignItems: 'center',
    textAlignVertical: 'center',
    textDecorationLine: 'underline',
  },
  paragraph: {
    fontFamily: 'Urbanist',
    marginTop: 20,
    marginBottom: 55,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2C6975',
    textShadowColor: '#777',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 2,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#69B2A0',
    borderRadius: 18,
    width: 48,
    height: 48,
    marginHorizontal: 3,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  semicircle: {
    width: '100%',
    height: 200,
    backgroundColor: '#69B2A0',
    borderBottomLeftRadius: 350,
    borderBottomRightRadius: 350,
    transform: [{ scaleX: 2 }],
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#69B2A0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 10,
    marginBottom: 70,
    marginTop: 30,
    width: '55%',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
});