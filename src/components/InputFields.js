import React,{useState} from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';
import {IconComponent} from './index';
import {faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons';
const InputContainer = ({
  onChangeText,
  value,
  placeholder,
  onFocus,
  onBlur,
  keyboardType,
  style,
  iconName,
  iconColor,
  iconStyle,
  borderBottom,
  secureTextEntry,
  placeholderTextColor
}) =>
{
  const [show,setShow]=useState(false)
  const [secureEntry,setEntry]=useState(secureTextEntry)
  return (
    <View style={[styles.main_view,style,borderBottom && {borderBottomWidth:1,borderWidth:0,borderRadius:0}]}>
      {iconName && (
        <IconComponent
          iconName={iconName}
          iconColor={iconColor}
          iconStyle={iconStyle}
        />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor?placeholderTextColor:COLORS.black_color}
        value={value}
        style={[styles.input, iconName && {marginLeft: SIZES.padding2}]}
        keyboardType={keyboardType}
        onFocus={onFocus}
        onBlur={onBlur}
        secureTextEntry={secureEntry}
        onChangeText={onChangeText}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={()=>{
          setShow(!show)
          setEntry(!secureEntry)

        }} >
        <IconComponent
          iconName={show?faEye:faEyeSlash}
          iconColor={iconColor}
          iconStyle={iconStyle}
        />
        </TouchableOpacity>

      )}
    </View>
  );
};
export default InputContainer;

const styles = StyleSheet.create({
  main_view: {
    flexDirection: 'row',
    alignItems: 'center',
    height: SIZES.padding * 3,
    paddingHorizontal: SIZES.padding2,
    borderWidth: 1,
    borderColor: COLORS.light_gray,
    borderRadius: SIZES.padding * 1.2,
    marginTop:SIZES.padding2,
    
  },
  input: {
    flex: 1,
    ...FONTS.Light14,
    color:COLORS.black_color

  },
});
