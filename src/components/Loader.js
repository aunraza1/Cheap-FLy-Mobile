import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS} from '../constants';

const Loader = ({isVisible, color, size}) => {
  return (
    <ActivityIndicator
      size={size ? size : 'large'}
      color={color ? color : COLORS.primary_color}
      style={styles.loader}
      animating={isVisible}
    />
  );
};
export default Loader;

const styles = StyleSheet.create({
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
