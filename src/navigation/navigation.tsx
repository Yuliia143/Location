import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../scenes/SignIn';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Home from '../scenes/Home';
import Report from '../scenes/Report';
import Locations from '../scenes/Locations';

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
            <Stack.Screen name="Report" component={Report} />
            <Stack.Screen name="Locations" component={Locations} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
