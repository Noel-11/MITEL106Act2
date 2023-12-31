import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import LoginPage from './src/components/page/LoginPage';
import Recovery from './src/components/page/RecoveryPage';
import HomePage from './src/components/page/HomePage';
import SignupPage from './src/components/page/SignupPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Recovery" component={Recovery} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}