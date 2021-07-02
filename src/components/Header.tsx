import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.header__container}>
      <Image
        style={styles.menu__button}
        source={require('../assets/icons/Menu.png')}
      />
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
