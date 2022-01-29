import React from 'react';
import {StyleSheet} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
import {animations, SIZES} from '../constants';
import {Text} from '../components';

const Loader = ({isVisible, loadingText}) => {
  return (
    <AnimatedLoader
      visible={isVisible}
      source={animations.Loader}
      animationStyle={styles.lottie}
      speed={1}>
      <Text text={loadingText} />
    </AnimatedLoader>
  );
};
export default Loader;
const styles = StyleSheet.create({
  lottie: {
    width: SIZES.padding * 4,
    height: SIZES.padding * 4,
  },
});
