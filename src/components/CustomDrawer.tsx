import React from 'react';
import { DrawerItemList } from '@react-navigation/drawer';
import { Image, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from './CustomButton';
import { useDispatch } from 'react-redux';
import { signOut } from '../store/actions/auth';

function CustomDrawer(props: any) {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signOut());
  };

  return (
    <LinearGradient colors={['#0F397E', '#0066B2']} style={{ height: '100%' }}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <View style={styles.logo__circle}>
            <Image source={require('../assets/images/Logo.png')} />
          </View>
        </View>
        <DrawerItemList {...props} labelStyle={styles.item__label} />
        <View style={{ marginTop: 'auto' }}>
          <CustomButton
            color="gray"
            titleColor="dark"
            radius="big"
            type="big"
            title="Disconnetti"
            onPress={logout}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 60,
  },
  logo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  logo__circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ffffff',

    justifyContent: 'center',
    alignItems: 'center',
  },
  item__label: {
    color: '#ffffff',
    textTransform: 'uppercase',
    fontSize: 17,
    fontWeight: 'bold',
    paddingRight: 0,
  },
});
