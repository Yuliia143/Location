import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LocationInterface } from '../interfaces/location.interface';
import moment from 'moment';

interface LocationItemProps {
  item: LocationInterface;
}

const LocationItem: React.FC<LocationItemProps> = ({ item }) => {
  return (
    <View style={styles.item__container}>
      <View style={styles.item__content}>
        <LinearGradient
          style={{ width: '40%' }}
          colors={['#005BA4', '#48A1E3']}
          start={{ x: -1, y: 0 }}
          end={{ x: 1, y: 0 }}>
          <View style={styles.item__left}>
            <View style={styles.item__dateInfo}>
              <Text style={styles.item__date}>
                {moment(item.date).format('DD/MM/YYYY')}
              </Text>
              <Text style={[styles.item__date, styles.item__time]}>
                {moment(item.date).format('HH:mm:ss')}
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.item__right}>
          <View style={styles.item__coordinates}>
            <Text style={styles.item__coordinatesText}>
              Long. {item.array_options.options_longitudine}
            </Text>
          </View>
          <View style={[styles.item__coordinates, styles.item__border]}>
            <Text style={styles.item__coordinatesText}>
              Lat. {item.array_options.options_latitudine}
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.item__description, styles.item__border]}>
        {item.description}
      </Text>
    </View>
  );
};
export default LocationItem;
const styles = StyleSheet.create({
  item__container: {
    width: 250,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: '#868D8D',
    borderStyle: 'solid',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 40,
  },
  item__content: {
    flexDirection: 'row',
  },
  item__left: {
    alignItems: 'center',
    paddingVertical: 26,
  },
  item__dateInfo: {
    flexDirection: 'column',
  },
  item__date: {
    color: '#ffffff',
    textAlign: 'center',
  },
  item__time: {
    marginTop: 10,
  },
  item__right: {
    width: '60%',
    height: '100%',
    flexDirection: 'column',
  },
  item__coordinates: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  item__coordinatesText: {
    textTransform: 'uppercase',
  },
  item__border: {
    borderTopWidth: 1,
    borderColor: '#868D8D',
    borderStyle: 'solid',
  },
  item__description: {
    fontStyle: 'italic',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
  },
});
