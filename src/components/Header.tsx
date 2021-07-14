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
          <Image
            source={require('../assets/icons/Arrow.png')}
            style={styles.header__buttonImage}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={logout} style={styles.header__logout}>
          <Image
            source={require('../assets/icons/Logout.png')}
            style={styles.header__buttonImage}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header__container: {
    width: '100%',
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  header__buttonImage: {
    width: 30,
    height: 30,
  },
  header__logout: {
    alignSelf: 'flex-end',
  },
});
