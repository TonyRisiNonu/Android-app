import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login({ }) {
  return (
    <View style={styles.container}>
 <Image
 style={{ alignSelf:'center'}}
  source={require('../assets/images/jpg2png/Logo1.png')}
 
/>
      <Text style={styles.title}>Log-in</Text>

      <TextInput placeholder="Your email id" style={styles.input} />
      <TextInput placeholder="Your password" secureTextEntry style={styles.input} />

      <TouchableOpacity onPress={() => router.push('/ForgotPasswordScreen')}>
        <Text style={styles.passwordlink}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.push('/SignUpScreen')}>
      <Text style={styles.link}>Don't have an account? Sign-up</Text>
     </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold',textAlign: 'center',marginTop:20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  button: { backgroundColor: '#000', padding: 10, borderRadius: 40 ,
    width: 100, alignSelf :'center' },
  buttonText: { color: '#fff', textAlign: 'center' },
  link: { color: 'blue', marginTop: 10 },
  passwordlink: {color: 'blue', marginTop: 10,textAlign: 'right'}
});
