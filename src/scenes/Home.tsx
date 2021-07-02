import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { loadProjects } from '../store/actions/projects';
import Selector from '../components/Selector';
import { RootState } from '../store';
import { ProjectInterface } from '../interfaces/project.interface';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomButton from '../components/CustomButton';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const projects = useSelector((state: RootState) => state.projects.projects);
  const [selectedValue, setSelectedValue] = useState({} as ProjectInterface);

  useEffect(() => {
    if (isFocused) {
      dispatch(loadProjects());
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View style={styles.select__container}>
            <Text style={styles.select__title}>Seleziona Commessa</Text>
            <View style={styles.select}>
              <Selector
                data={projects}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
              />
            </View>
          </View>
          <View style={{ marginBottom: 30 }}>
            <CustomButton
              type="big"
              title="Consulta"
              onPress={() => console.log('click')}
            />
          </View>
          <View>
            <CustomButton
              type="big"
              title="invia posizione"
              onPress={() => console.log('click')}
            />
          </View>
        </View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default Home;

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
    paddingTop: 40,
  },
  select__container: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  select__title: {
    color: '#005BA4',
    fontWeight: 'bold',
    paddingLeft: 10,
    textTransform: 'capitalize',
    fontSize: 18,
    marginBottom: 10,
  },
  select: {
    width: 268,
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#868D8D',
  },
});
