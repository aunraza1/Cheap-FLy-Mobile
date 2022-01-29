import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconComponent, Text} from '../../../components';
import {FONTS, SIZES} from '../../../constants';

const SingleRouteView = ({icon, text}) => {
  return (
    <View style={styles.main_view}>
      <IconComponent iconName={icon} />
      <Text style={{textAlign: 'left', ...FONTS.Light14}} text={text} />
    </View>
  );
};
export default SingleRouteView;
const styles = StyleSheet.create({
  main_view: {},
});
