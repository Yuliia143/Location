import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  type: string;
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
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
        type === 'small' ? styles.button__small : styles.button__big,
        disabled ? styles.button__disabled : styles.button,
      ]}>
      <Text
        style={[
          styles.button__title,
          type === 'small'
            ? styles.button__bigTitle
            : styles.button__smallTitle,
        ]}>
        {title}
      </Text>
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

    backgroundColor: '#005BA4',
  },
  button__small: {
    width: 119,
    height: 39,
    borderRadius: 25,
  },
  button__big: {
    width: 188,
    height: 44,
    borderRadius: 15,
  },
  button__title: {
    color: '#ffffff',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  button__bigTitle: {
    fontSize: 24,
  },
  button__smallTitle: {
    fontSize: 18,
  },
  button__disabled: {
    backgroundColor: '#B8BDC1',
  },
});
