import React, { useEffect, useState, useRef } from 'react';
import {
  Alert,
  Dimensions,
  Linking,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomButton from '../components/CustomButton';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { sendReport } from '../store/actions/report';
import { RootState } from '../store';
import { SET_CREATED } from '../store/reducers/report/types';

interface Location {
  latitude: number;
  longitude: number;
}

const Report: React.FC = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const navigator = useNavigation();
  const route: any = useRoute();

  const isCreated = useSelector((state: RootState) => state.report.isCreated);

  const [description, setDescription] = useState('');
  const [projectName] = useState(route.params.project.name);

  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  } as Location);

  const mapRef = useRef({} as MapView);

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');
    if (status === 'granted') {
      return true;
    }
    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }
    if (status === 'disabled') {
      Alert.alert(
        `Turn on Location Services to allow to determine your location.`,
        '',
        [
          { text: 'Go to Settings', onPress: openSetting },
          { text: "Don't Use Location", onPress: () => {} },
        ],
      );
    }
    return false;
  };

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      return await hasPermissionIOS();
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }
    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude: latitude, longitude: longitude });
        mapRef.current.animateToRegion({
          latitude,
          longitude,
          latitudeDelta: 0,
          longitudeDelta: 0,
        });
        console.log(position);
      },
      error => {
        Alert.alert(`Code ${error.code}`, error.message);
        setLocation({ latitude: 0, longitude: 0 });
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
        showLocationDialog: true,
      },
    );
  };

  const report = () => {
    dispatch(
      sendReport(route.params.project.id, {
        description,
        date: moment().unix(),
        duree: 3600,
        array_options: {
          options_latitudine: location.latitude,
          options_longitudine: location.longitude,
        },
      }),
    );
  };

  useEffect(() => {
    if (isFocused) {
      getLocation();
    }
  }, [isFocused]);

  useEffect(() => {
    if (isCreated) {
      dispatch({ type: SET_CREATED, payload: false });
      navigator.navigate('Locations', { project: route.params.project });
    }
  }, [isCreated]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.title}>{projectName}</Text>
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
                ref={mapRef}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                minZoomLevel={0}
                maxZoomLevel={15}
                initialRegion={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                  latitudeDelta: 0,
                  longitudeDelta: 0,
                }}>
                <Marker
                  key={1}
                  coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                  }}
                />
              </MapView>
            </View>
            <View style={styles.map__button}>
              <CustomButton
                radius="big"
                type="big"
                title="Invia posizione"
                disabled={!description}
                onPress={report}
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

const windowHeight = Dimensions.get('window').height;
const contentHeight = windowHeight - 170;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  content: {
    width: '100%',
    height: contentHeight,
    paddingHorizontal: 20,
    paddingBottom: 40,
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
