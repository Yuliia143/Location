import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { signOut } from '../store/actions/auth';

interface HeaderProps {
  backButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ backButton = true }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signOut());
  };

  return (
    <View style={styles.header__container}>
      {backButton ? (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/icons/Arrow.png')} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={logout} style={styles.header__logout}>
          <Image source={require('../assets/icons/Logout.png')} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header__container: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  header__logout: {
    alignSelf: 'flex-end',
    overflow: 'hidden',
    width: 30,
    height: 30,
  },
});
