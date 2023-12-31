import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSignup = () => {
    // Implement your signup logic here with username, password, and email
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);

    // navigating to LoginScreen on signup button press
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>

     <Image
        source={require('../../../assets/signup_img.jpg')} // Replace with your image path
        style={styles.logo}
        resizeMode="contain"
      />

      <TextInput
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSignup} style={styles.button}>
        Sign Up
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Login')} style={styles.button}>
        Already have an account? Login
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    
  },

  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});