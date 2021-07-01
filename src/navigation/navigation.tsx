import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../scenes/SignIn';

const Stack = createStackNavigator();

export const Navigate = () => {
  // const token = useSelector((state: RootState) => state.auth.token);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignIn" component={SignIn} />

        {/*{token ? (*/}
        {/*  <>*/}
        {/*    <Stack.Screen name="Home" component={Home} />*/}
        {/*  </>*/}
        {/*) : (*/}
        {/*  <>*/}
        {/*    <Stack.Screen name="SignIn" component={SignIn} />*/}
        {/*  </>*/}
        {/*)}*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
