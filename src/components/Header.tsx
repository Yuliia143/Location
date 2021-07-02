import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const Header: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header__container}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Image
          style={styles.menu__button}
          source={require('../assets/icons/Menu.png')}
        />
      </TouchableOpacity>

      <Image source={require('../assets/icons/Arrow.png')} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header__container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menu__button: {
    marginRight: 10,
  },
});
