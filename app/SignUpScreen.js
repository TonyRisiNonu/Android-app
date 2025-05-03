import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';

export default function SignUpScreen({  }) {
  return (
    <View style={styles.container}>
  <Image
  style={{ alignSelf:'center'}}
   source={require('../assets/images/jpg2png/Logo1.png')}
  
 />
       <Text style={styles.title}>Sign-up</Text>

      <TextInput placeholder="Your name" style={styles.input} />
      <TextInput placeholder="Your email id" style={styles.input} />
      <TextInput placeholder="Your contact number" style={styles.input} />
      <TextInput placeholder="Your password" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign-up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('Login')}>
        <Text style={styles.link}>Back to login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 24, marginBottom: 20, fontWeight: 'bold', marginTop:10,textAlign: 'center' },
    input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
    button: { backgroundColor: '#000', padding: 15, borderRadius: 30,width: 100 ,alignSelf:'center' },
    buttonText: { color: '#fff', textAlign: 'center' },
    link: { color: 'blue', marginTop: 10 },
  profileImage: { width: 100, height: 100, borderRadius: 50, alignSelf: 'center', marginBottom: 20 }
});
