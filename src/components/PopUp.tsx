import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { REMOVE_NOTIFICATION } from '../store/reducers/notifications/types';

export const PopUp: React.FC = () => {
  const dispatch = useDispatch();

  const message = useSelector(
    (state: RootState) => state.notifications.message,
  );

  const closeNotification = () => {
    dispatch({ type: REMOVE_NOTIFICATION });
  };

  return (
    <View
      style={[
        message ? styles.modal__containerActive : styles.modal__container,
      ]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={!!message}
        onRequestClose={closeNotification}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modal__header}>
              <Image
                style={styles.modal__headerImage}
                source={require('../assets/icons/SmallCancel.png')}
              />
              <Text style={styles.modal__headerTitle}>Errore</Text>
            </View>

            <View style={styles.modal__content}>
              <Text style={styles.modal__contentText}>{message}</Text>
            </View>

            <TouchableOpacity
              style={styles.modal__button}
              onPress={closeNotification}>
              <Text style={styles.modal__buttonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  modal__container: {
    display: 'none',
  },
  modal__containerActive: {
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 200,

    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  modal__header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal__headerImage: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  modal__headerTitle: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  modal__content: {
    marginVertical: 15,
  },
  modal__contentText: {
    fontStyle: 'italic',
    fontSize: 14,
    textAlign: 'center',
  },
  modal__button: {
    borderRadius: 25,
    width: 85,
    height: 39,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4.0,
    elevation: 6,

    backgroundColor: '#005BA4',
  },
  modal__buttonText: {
    color: '#ffffff',
    textTransform: 'uppercase',
    fontSize: 24,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 278,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
