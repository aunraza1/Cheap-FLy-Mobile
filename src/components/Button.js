import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';
import { Text } from './index';

const CustomButton = ({
  buttonTitle,
  onPress,
  style,
  buttonTitleStyle,
  activeOpacity,
  disabled,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      style={[styles.button, style]}
      onPress={onPress}>
      <Text style={[styles.title, buttonTitleStyle]} text={buttonTitle} />
    </TouchableOpacity>
  );
};
export default CustomButton;
const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: SIZES.padding * 2.5,
    borderRadius: SIZES.padding,
    marginTop: SIZES.padding2,
    backgroundColor: COLORS.primary_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLORS.white_color,
  },
});
