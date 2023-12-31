import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/Payroll-Banner.png')} // Replace with your image path
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to the Homepage!</Text>
      <Button mode="Text" textColor="steelblue"  onPress={() => navigation.navigate('Login')} style={styles.button}>
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  
  },
});