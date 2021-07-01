import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        disabled ? styles.button__disabled : styles.button,
      ]}>
      <Text style={[styles.button__title]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    alignSelf: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4.0,
    elevation: 6,

    borderRadius: 25,
    width: 119,
    height: 39,
    backgroundColor: '#005BA4',
  },
  button__title: {
    color: '#ffffff',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 24,
  },
  button__disabled: {
    backgroundColor: '#B8BDC1',
  },
});
