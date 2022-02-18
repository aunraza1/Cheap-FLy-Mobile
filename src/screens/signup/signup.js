import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import * as Animatable from 'react-native-animatable';
import { COLORS, images, SIZES } from '../../constants';
import { Button, InputField, Text, Loader } from '../../components';
import I18n from '../../i18n';
import { useDispatch, useSelector } from 'react-redux';
import { ModalHandler } from '../../store/actions/modal-actions';
import { signupHandler } from '../../store/actions/autth-actions';

function Signup({ navigation }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPass, setConfirm] = useState(null)

  const { loading } = useSelector(state => state.AuthReducer);


  const signup = () => {

    if (name && email && password && confirmPass) {
      if (password === confirmPass) {
        dispatch(signupHandler(name, email, password, () => navigation.goBack()))
      }
      else {
        dispatch(ModalHandler({
          show: true,
          message: "Password not match"
        }))
      }
    }
    else {
      dispatch(ModalHandler({
        show: true,
        message: "All Fields are required",
        type: 'Error'

      }))
    }
  }

  return (
    <SafeAreaView style={styles.safe_area}>
      <Animatable.View animation="fadeInUpBig" style={styles.container}>
        <Image resizeMode="contain" style={styles.img} source={images.signup} />
        <Text text={I18n.t('signup_text')} />
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1 }}>
          <InputField
            onChangeText={(text) => setName(text)}
            value={name}
            iconName={faUser}
            borderBottom={true}
            placeholder={I18n.t('full_name_text')}
          />
          <InputField
            onChangeText={(text) => setEmail(text)}
            value={email}
            iconName={faEnvelopeOpenText}
            borderBottom={true}
            placeholder={I18n.t('email_text')}
          />
          <InputField
            onChangeText={(text) => setPassword(text)}
            value={password}
            iconName={faLock}
            secureTextEntry={true}
            borderBottom={true}
            placeholder={I18n.t('password_text')}
          />
          <InputField
            onChangeText={(text) => setConfirm(text)}
            value={confirmPass}
            iconName={faLock}
            secureTextEntry={true}
            borderBottom={true}
            placeholder={I18n.t('confirm_password_text')}
          />

          {loading ?
            <Loader /> :
            <Button onPress={() => signup()} buttonTitle={I18n.t('signup_text')} />
          }
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
}
export default Signup;

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: SIZES.padding2,
    backgroundColor: COLORS.white_color,
  },
  img: {
    width: '100%',
    height: 280,
  },
});
