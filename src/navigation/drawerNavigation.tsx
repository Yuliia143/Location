import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../scenes/Home';
import Conditions from '../scenes/Conditions';
import CustomDrawer from '../components/CustomDrawer';
import { Image } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      drawerStyle={{
        width: 300,
        height: '100%',
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          drawerIcon: () => (
            <Image
              source={require('../assets/icons/Home.png')}
              style={{ marginRight: -20 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Conditions"
        component={Conditions}
        options={{
          title: 'Termini e Condizioni',
          drawerIcon: () => (
            <Image
              source={require('../assets/icons/Importance.png')}
              style={{ marginRight: -20 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
