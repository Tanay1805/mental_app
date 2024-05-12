import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ToggleButton from './components/ToggleButton';

const Stack = createStackNavigator();

const App = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [navigation, setNavigation] = React.useState(null);

  useEffect(() => {
    setNavigation(Stack.navigation);
  }, []);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={() => <LoginPage toggleLogin={toggleLogin} isLogin={isLogin} navigation={navigation} />} />
        <Stack.Screen name="SignUp" component={() => <SignUpPage toggleLogin={toggleLogin} isLogin={!isLogin} navigation={navigation} />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;