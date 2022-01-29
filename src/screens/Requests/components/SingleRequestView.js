import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconComponent, Text} from '../../../components';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {faCarAlt} from '@fortawesome/free-solid-svg-icons';
import I18n from '../../../i18n';
const SingleRequestView = () => {
  return (
    <View style={styles.main_view}>
      <View style={styles.row}>
        <View style={styles.icon_view}>
          <IconComponent
            size={50}
            iconColor={COLORS.white_color}
            iconName={faCarAlt}
          />
        </View>
        <View style={styles.key_view}>
          <Text style={styles.key_text} text={I18n.t('booking_date')} />
          <Text style={styles.key_text} text={I18n.t('vehicle_text')} />
          <Text style={styles.key_text} text={I18n.t('vendor_text')} />
          <Text style={styles.key_text} text={I18n.t('amount_text')} />
        </View>
        <View style={styles.text_view}>
          <Text style={styles.text} text={'22-Jan'} />
          <Text style={styles.text} text={'AKB-619'} />
          <Text style={styles.text} text={'F&S Traders'} />
          <Text style={styles.text} text={'5000/-'} />
        </View>
      </View>
    </View>
  );
};
export default SingleRequestView;
const styles = StyleSheet.create({
  main_view: {
    marginTop: SIZES.padding2,
    borderRadius: SIZES.padding2,
    backgroundColor: COLORS.white_color,
    padding: SIZES.padding2,
    elevation: 2,
  },
  icon_view: {
    backgroundColor: COLORS.maroon_color,
    padding: SIZES.padding,
    justifyContent: 'center',
    height: SIZES.padding * 4,
    borderRadius: SIZES.padding2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  key_view: {
    marginLeft: SIZES.padding2,
    width: '30%',
  },
  text_view: {
    marginLeft: SIZES.padding2,
    width: '70%',
  },
  key_text: {
    textAlign: 'left',
    ...FONTS.Light14,
    color: COLORS.primary_color,
  },
  text: {
    textAlign: 'left',
    ...FONTS.Light14,
  },
});
