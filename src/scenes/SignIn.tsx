import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('Customer');
  const [password, setPassword] = useState('password');

  const navigate = (link: string) => {
    navigation.navigate(link);
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
                  onChangeText={setEmail}
                  value={email}
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
              <View style={styles.help}>
                <Text style={[styles.help__link, styles.help__linkFirst]}>
                  Password Dimenticata?
                </Text>
                <Text style={styles.help__link}>Primo Accesso?</Text>
                <Text style={styles.help__link}>Hai bisogno di Aiuto?</Text>
              </View>
              <TouchableOpacity onPress={() => navigate('Conditions')}>
                <Text style={styles.help__linkBlack}>
                  Termini e Condizioni &gt;&gt;
                </Text>
              </TouchableOpacity>
              <CustomButton
                title={'Invia'}
                onPress={() => console.log('click')}
              />
            </View>
            <View style={styles.logo__container}>
              <View style={styles.logo__circle}>
                <Image source={require('../assets/images/Logo.png')} />
              </View>
            </View>
          </View>
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
    flex: 1.2,
    padding: 20,
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
