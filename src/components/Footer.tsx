import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.footer__container}>
      <Image source={require('../assets/images/Logo.png')} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer__container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    paddingBottom: 20,
  },
});
