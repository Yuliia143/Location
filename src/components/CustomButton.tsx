import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  color?: string;
  titleColor?: string;
  radius: string;
  type: string;
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color = 'blue',
  titleColor = 'light',
  radius,
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
        color === 'blue' ? styles.button__blue : styles.button__gray,
        radius === 'big'
          ? styles.button__radiusBig
          : styles.button__radiusSmall,
        disabled ? styles.button__disabled : styles.button,
      ]}>
      <Text
        style={[
          styles.button__title,
          type === 'small'
            ? styles.button__bigTitle
            : styles.button__smallTitle,
          titleColor === 'dark'
            ? styles.button__titleDark
            : styles.button__titleLight,
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
  },
  button__blue: {
    backgroundColor: '#005BA4',
  },
  button__gray: {
    backgroundColor: '#f2f2f2',
  },
  button__small: {
    width: 119,
    height: 39,
  },
  button__big: {
    width: 188,
    height: 44,
  },
  button__radiusBig: {
    borderRadius: 25,
  },
  button__radiusSmall: {
    borderRadius: 15,
  },
  button__title: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  button__bigTitle: {
    fontSize: 24,
  },
  button__smallTitle: {
    fontSize: 18,
  },
  button__titleDark: {
    color: '#0F397E',
  },
  button__titleLight: {
    color: '#ffffff',
  },
  button__disabled: {
    backgroundColor: '#B8BDC1',
  },
});
