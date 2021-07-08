import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomButton from '../components/CustomButton';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { useIsFocused } from '@react-navigation/native';

const Report: React.FC = () => {
  const isFocused = useIsFocused();

  const [description, setDescription] = useState('');

  const [currentLongitude, setCurrentLongitude] = useState(0);
  const [currentLatitude, setCurrentLatitude] = useState(0);
  const [latDelta, setLatDelta] = useState(0);
  const [lonDelta, setLonDelta] = useState(0);

  const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
  const circumference = (40075 / 360) * 1000;

  const [locationStatus, setLocationStatus] = useState('');

  useEffect(() => {
    requestPermissions();
  }, []);

  async function requestPermissions() {
    if (Platform.OS === 'ios') {
      const auth = await Geolocation.requestAuthorization('whenInUse');
      if (auth === 'granted') {
        getOneTimeLocation();
      }
    }

    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted) {
        getOneTimeLocation();
      } else {
        console.log('error');
      }
    }
  }

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        console.log(position, 'Position');
        setLocationStatus('You are Here');

        //Setting Longitude state
        setCurrentLongitude(position.coords.longitude);

        //Setting Longitude state
        setCurrentLatitude(position.coords.latitude);
        setLatDelta(
          position.coords.accuracy *
            (1 / (Math.cos(currentLatitude) * circumference)),
        );
        setLonDelta(position.coords.accuracy / oneDegreeOfLongitudeInMeters);
      },
      error => {
        console.log(error.message);
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  };

  console.log(currentLatitude, currentLongitude);

  // @ts-ignore
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.title}>Commessa 7</Text>
          <View style={styles.input__container}>
            <Text style={styles.input__label}>Descrizione</Text>
            <TextInput
              style={styles.input}
              multiline
              onChangeText={text => setDescription(text)}
              value={description}
            />
          </View>
          <View style={styles.map__container}>
            <View style={styles.map__content}>
              <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                // initialRegion={{
                //   latitude: parseFloat(String(currentLatitude)),
                //   longitude: parseFloat(String(currentLongitude)),
                //   latitudeDelta: latDelta,
                //   longitudeDelta: lonDelta,
                // }}
              >
                {/*<Marker*/}
                {/*  key={1}*/}
                {/*  coordinate={{*/}
                {/*    latitude: parseFloat(String(currentLatitude)),*/}
                {/*    longitude: parseFloat(String(currentLongitude)),*/}
                {/*  }}*/}
                {/*/>*/}
              </MapView>
            </View>
            <View style={styles.map__button}>
              <CustomButton
                radius="big"
                type="big"
                title="Invia posizione"
                onPress={() => console.log('Click')}
              />
            </View>
          </View>
        </View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default Report;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    color: '#005BA4',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  input__container: {
    marginBottom: 40,
  },
  input__label: {
    fontStyle: 'italic',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: 300,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: '#868D8D',
    borderStyle: 'solid',
    borderRadius: 10,
    textAlignVertical: 'top',
    fontSize: 18,
    height: 90,
    maxHeight: 90,
  },
  map__container: {
    position: 'relative',
  },
  map__content: {
    width: 320,
    height: 200,
    borderWidth: 3,
    borderColor: '#005BA4',
    borderStyle: 'solid',
    borderRadius: 30,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  map__button: {
    position: 'absolute',
    bottom: -22,
    left: 0,
    right: 0,
  },
});
