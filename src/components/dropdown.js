import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '../components';
import {COLORS, FONTS, SIZES} from '../constants';
import I18n from '../i18n';
const DropDowwn = ({options, type, style, onSelectValue}) => {
  const [show, setShow] = useState(false);
  const [label, setLabel] = useState(null);
  return (
    <>
      <TouchableOpacity
        onPress={() => setShow(!show)}
        style={[styles.main_view, style]}>
        <Text
          style={styles.text}
          text={label ? label : I18n.t('select_text') + ' ' + type}
        />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          borderWidth: show ? 1 : 0,
          borderColor: COLORS.light_gray,
        }}>
        {show &&
          options?.map((v, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setShow(false);
                  setLabel(v.label);
                  onSelectValue(v);
                }}
                style={[
                  styles.main_view,
                  {borderWidth: 0, borderRadius: 0, borderBottomWidth: 1},
                ]}>
                <Text style={styles.text} text={v?.label} />
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </>
  );
};
export default DropDowwn;

const styles = StyleSheet.create({
  main_view: {
    width: '100%',
    height: SIZES.padding * 2,
    borderColor: COLORS.light_gray,
    borderWidth: 1,
    borderRadius: SIZES.padding2,
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding2,
  },
  text: {
    ...FONTS.Light13,
    textAlign: 'left',
  },
});
