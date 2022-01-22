import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { COLORS,FONTS } from '../constants';

const CustomText = ({text,style,numberOfLines}) => {
  return <Text numberOfLines={numberOfLines} style={[styles.text,style]} >{text}</Text>;
};
const styles = StyleSheet.create({
 text:{
    ...FONTS.Bold18,
    textAlign: 'center',
    color:COLORS.black_color,
 }  
});
export default CustomText