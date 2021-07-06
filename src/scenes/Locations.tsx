import React, { useEffect, useState, useRef } from 'react';
import { FlatList, StyleSheet, View, Text, Animated } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationItem from '../components/LocationItem';
import { loadLocations } from '../store/actions/locations';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useIsFocused } from '@react-navigation/native';

const Locations: React.FC = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const locations = useSelector(
    (state: RootState) => state.locations.locations,
  );

  const renderItem = ({ item }: { item: any }) => {
    return <LocationItem item={item} />;
  };

  useEffect(() => {
    if (isFocused) {
      dispatch(loadLocations());
    }
  }, [isFocused]);

  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);
  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
        completeScrollBarHeight
      : visibleScrollBarHeight;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight,
  ).interpolate({
    extrapolate: 'clamp',
    inputRange: [0, difference],
    outputRange: [0, difference],
  });

  const onContentSizeChange = (
    _: any,
    contentHeight: React.SetStateAction<number>,
  ) => setCompleteScrollBarHeight(contentHeight);

  const onLayout = ({
    nativeEvent: {
      // @ts-ignore
      layout: { height },
    },
  }) => {
    setVisibleScrollBarHeight(height);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.locations__container}>
        <Text style={styles.title}>Commessa 7</Text>
        <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20 }}>
          <View style={styles.locationsList}>
            <FlatList
              onContentSizeChange={onContentSizeChange}
              onLayout={onLayout}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollIndicator } } }],
                { useNativeDriver: false },
              )}
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}
              data={locations}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <View style={styles.customScrollBarBackground}>
            <Animated.View
              style={[
                styles.customScrollBar,
                {
                  height: scrollIndicatorSize,
                  transform: [{ translateY: scrollIndicatorPosition }],
                },
              ]}
            />
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default Locations;

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  customScrollBar: {
    backgroundColor: '#005BA4',
    borderRadius: 5,
    width: 12,
  },
  customScrollBarBackground: {
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    height: '100%',
    width: 12,
  },
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#005BA4',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  locations__container: {
    height: '75%',
  },
  locationsList: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
