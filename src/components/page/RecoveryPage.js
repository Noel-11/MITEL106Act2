import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

export default function RecoveryPage({ navigation }) {
  const [email, setEmail] = React.useState('');

  const handleRecoverAccount = () => {
    // Implement your account recovery logic here with the provided email
    console.log('Email:', email);
    // Add your logic for account recovery, such as sending a recovery email

    // For demonstration purposes, navigate back to LoginScreen after recovery
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Recovery</Text>
      <Text style={styles.subtitle}>
        Please enter your email to recover your account
      </Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleRecoverAccount} style={styles.button}>
        Recover Account
      </Button>
      <Button onPress={() => navigation.navigate('Login')} style={styles.button}>
        Back to Login
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
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});