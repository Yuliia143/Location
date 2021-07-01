import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

const SignIn: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Sign in </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
  container: {
    padding: 20,
  },
  text: {
    color: 'red',
  },
});
