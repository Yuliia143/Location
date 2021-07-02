import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Conditions: React.FC = () => {
  const navigation = useNavigation();

  const token = useSelector((state: RootState) => state.auth.token);

  const navigate = () => {
    token ? navigation.navigate('Home') : navigation.navigate('SignIn');
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <SafeAreaView>
        <View style={styles.conditions__container}>
          <ImageBackground
            style={{
              width: '100%',
              height: '100%',
            }}
            imageStyle={{
              resizeMode: 'cover',
            }}
            source={require('../assets/images/Background.png')}>
            <View style={styles.conditions__header}>
              <Image source={require('../assets/icons/Info.png')} />
              <Text style={styles.conditions__headerTitle}>
                Termini e Condizioni
              </Text>
            </View>
            <ScrollView style={styles.conditions__content}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
                in fames tellus, at integer morbi. Ut cursus morbi morbi ornare.
                Neque diam id et neque interdum ipsum ultrices dignissim.
                Fringilla sem dictum eros, donec odio amet ornare. In morbi
                platea condimentum volutpat id vulputate lectus ridiculus arcu.
                Aenean facilisis in ac sit. Donec imperdiet tristique fusce quis
                neque feugiat dolor, condimentum. Ut amet faucibus nisl,
                malesuada habitasse. Vestibulum tempor justo, pellentesque vel.
                Porta a massa amet porttitor. Nulla nibh sit ullamcorper nunc.
                Vitae consectetur magna tellus sapien sit quis cursus. Facilisi
                nulla at imperdiet tellus volutpat fringilla tristique.
                Suspendisse quam consequat nam tempor a. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Amet massa nulla tellus
                viverra feugiat nulla id. Tortor fermentum ante leo sit
                elementum diam. Amet eu, facilisis commodo amet et. Diam vel
                morbi enim, commodo mattis elit venenatis, natoque. Scelerisque
                sed dui ut feugiat augue amet sit amet. Massa in urna, laoreet
                bibendum magna mi mauris, vivamus. Blandit eleifend at ipsum sem
                orci. Convallis commodo elementum sed egestas. Euismod mattis
                amet, enim, purus quis. Convallis sed tortor, nisl adipiscing mi
                sit consectetur. Amet a a, sed pharetra, nec tellus. Mauris,
                viverra faucibus quam suscipit lectus habitasse. Pulvinar nec
                leo vitae, leo molestie. Et feugiat felis nunc, commodo urna.
                Vestibulum tempor ultricies quam morbi vitae a nunc, posuere. Ut
                sed duis quis enim. Viverra aenean vulputate venenatis in
                feugiat feugiat. Euismod rhoncus volutpat elementum ante. At
                tellus praesent augue etiam.
              </Text>
            </ScrollView>
            <View style={styles.conditions__footer}>
              <TouchableOpacity onPress={navigate}>
                <Image source={require('../assets/icons/Cancel.png')} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Conditions;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
  },
  conditions__container: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  conditions__header: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  conditions__headerTitle: {
    fontSize: 24,
    marginLeft: 20,
  },
  conditions__content: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  conditions__footer: {
    width: '100%',
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 22,
  },
});
