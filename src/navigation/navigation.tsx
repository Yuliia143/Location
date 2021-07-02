import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../scenes/SignIn';
import Conditions from '../scenes/Conditions';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Home from '../scenes/Home';

const Stack = createStackNavigator();

export const Navigate = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  console.log(token);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {token ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Conditions" component={Conditions} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Conditions" component={Conditions} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
