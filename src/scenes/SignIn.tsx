import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import { auth } from '../store/actions/auth';
import PopUp from '../components/PopUp';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('sogema');
  const [password, setPassword] = useState('Venusia17!');

  const signIn = () => {
    dispatch(auth({ login: userName, password, entity: '', reset: 0 }));
  };

  return (
    <View>
      <SafeAreaView style={styles.safeArea} />
      <LinearGradient colors={['#0F397E', '#0066B2']}>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.form__container}>
              <View style={styles.form__label}>
                <Text style={styles.form__title}>Accedi</Text>
                <Text style={styles.form__description}>
                  Collegati per vedere dove sei
                </Text>
              </View>
              <View style={styles.container__inputs}>
                <TextInput
                  style={styles.input}
                  onChangeText={setUserName}
                  value={userName}
                  placeholder="Username"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Password"
                  secureTextEntry={true}
                />
              </View>
              <CustomButton
                radius="big"
                type="small"
                title={'Invia'}
                onPress={signIn}
              />
            </View>
            <View style={styles.logo__container}>
              <View style={styles.logo__circle}>
                <Image source={require('../assets/images/Logo.png')} />
              </View>
            </View>
          </View>
          <PopUp />
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default SignIn;

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const circleWidth =
  windowWidth < windowHeight - 480 ? '50%' : windowHeight - 480;
const circleHeight =
  windowWidth < windowHeight - 480 ? windowWidth : windowHeight - 480;
const circleRadius = +circleWidth / 2;

const logoHeight = windowHeight - 330;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  logo__container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

    height: logoHeight,
  },
  logo__circle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: circleRadius,
    width: circleWidth,
    height: circleHeight,
    backgroundColor: '#ffffff',
  },
  form__container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  form__label: {
    marginBottom: 20,
  },
  form__title: {
    fontSize: 30,
    textAlign: 'center',
  },
  form__description: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    marginTop: 15,
  },
  container__inputs: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    marginVertical: 10,
    paddingLeft: 10,
    paddingVertical: 0,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#868D8D',
    fontSize: 18,
  },
  help: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: 270,
    marginTop: 25,
  },
  help__linkFirst: {
    width: '100%',
    textAlign: 'center',
  },
  help__link: {
    color: '#0066B2',
    textDecorationLine: 'underline',
    marginBottom: 10,
    fontSize: 15,
  },
  help__linkBlack: {
    color: '#000000',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginVertical: 10,
    marginBottom: 20,
    fontSize: 14,
  },
});
