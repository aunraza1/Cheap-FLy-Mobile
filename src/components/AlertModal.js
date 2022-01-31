import React from 'react';
import {Modal, View, StyleSheet, Image} from 'react-native';
import {Text, Button} from './index';
import {COLORS, FONTS, images, SIZES} from '../constants';
import {useSelector, useDispatch} from 'react-redux';
import {ModalHandler} from '../store/actions/modal-actions';
import I18n from '../i18n';

const AlertModal = () => {
  const {show_modal} = useSelector(state => state.ModalReducer);
  const {modal_message} = useSelector(state => state.ModalReducer);
  const {modal_type} = useSelector(state => state.ModalReducer);
  const dispatch = useDispatch();
  return (
    <Modal transparent={true} visible={show_modal}>
      <View style={styles.main_view}>
        <View style={styles.sub_view}>
          <View
            style={[
              styles.head_view,
              modal_type === 'success' && {
                backgroundColor: COLORS.dark_green,
              },
            ]}>
            <Text
              style={styles.text}
              text={
                modal_type === 'success'
                  ? I18n.t('success_text')
                  : I18n.t('error_text')
              }
            />
          </View>
          <View style={styles.detail_view}>
            <Image style={styles.img} source={images.logo} />
            <Text style={styles.desc} text={modal_message} />
            <Button
              onPress={() =>
                dispatch(
                  ModalHandler({
                    show: false,
                  }),
                )
              }
              style={styles.btn}
              buttonTitleStyle={styles.text}
              buttonTitle={I18n.t('ok_text')}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default AlertModal;
const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.overlay_black,
    paddingHorizontal: SIZES.padding2,
  },
  sub_view: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '60%',
    backgroundColor: COLORS.white_color,
    borderRadius: SIZES.padding2,
  },
  head_view: {
    height: SIZES.padding * 1.8,
    width: '100%',
    backgroundColor: COLORS.maroon_color,
    borderTopLeftRadius: SIZES.padding2,
    borderTopRightRadius: SIZES.padding2,
    justifyContent: 'center',
  },
  detail_view: {
    width: '100%',
    alignItems: 'center',
    padding: SIZES.padding2,
  },
  img: {
    height: SIZES.padding * 3,
    width: SIZES.padding * 3,
  },
  btn: {
    height: SIZES.padding * 2,
    borderRadius: SIZES.padding2,
  },
  text: {
    ...FONTS.Medium16,
    color: COLORS.white_color,
  },
  desc: {
    ...FONTS.Light16,
  },
});
