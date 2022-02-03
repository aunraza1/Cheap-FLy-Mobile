import React from 'react';
import {StyleSheet} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import {animations, COLORS, FONTS, SIZES} from '../constants';
import {Text} from './index.js';

const Loader = ({isVisible, loadingText}) => {
  return (
    <AnimatedLoader
      visible={isVisible ? isVisible : true}
      source={animations.Loader}
      animationStyle={styles.lottie}
      speed={1}>
      <Text style={styles.text} text={loadingText} />
    </AnimatedLoader>
  );
};
export default Loader;
const styles = StyleSheet.create({
  lottie: {
    width: SIZES.padding * 4,
    height: SIZES.padding * 4,
  },
  text: {
    ...FONTS.Light15,
    color: COLORS.white_color,
  },
});
