import * as React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Implement your login logic here with username and password
    console.log('Username:', username);
    console.log('Password:', password);

    // navigating to HomeScreen on login button press
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
     <Image
        source={require('../../../assets/Payroll-Banner.png')} // Replace with your image path
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

      <Button onPress={() => navigation.navigate('Recovery')} style={" marginTop: 10,"}>
       Forgot Account/Password ?
      </Button>

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Signup')} style={styles.button}>
        Sign Up
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