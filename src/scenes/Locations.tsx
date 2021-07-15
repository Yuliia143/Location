import React, { useEffect, useState, useRef } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Animated,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationItem from '../components/LocationItem';
import { loadLocations } from '../store/actions/locations';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { LocationInterface } from '../interfaces/location.interface';
import { useCalculateSafeArea } from '../hooks/useCalculateSafeArea';

const Locations: React.FC = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const route: any = useRoute();
  const contentHeight = useCalculateSafeArea();

  const locations = useSelector(
    (state: RootState) => state.locations.locations[route.params.project.id],
  );
  const [projectName] = useState(route.params.project.name);

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
  ) => setCompleteScrollBarHeight(contentHeight || 1);

  const onLayout = ({
    nativeEvent: {
      // @ts-ignore
      layout: { height },
    },
  }) => {
    setVisibleScrollBarHeight(height);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <View style={[styles.content, {height: contentHeight}]}>
          <Text style={styles.title}>{projectName}</Text>
          <View
            style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20 }}>
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
                keyExtractor={(item: LocationInterface, index) =>
                  index.toString()
                }
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
    </SafeAreaView>
  );
};

export default Locations;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
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
  content: {
    marginBottom: 20,
  },
  locationsList: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
