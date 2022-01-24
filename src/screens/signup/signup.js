import React from 'react';
import {Image, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import * as Animatable from 'react-native-animatable';
import {images} from '../../constants';
import {Button, InputField, Text} from '../../components';
import I18n from '../../i18n';

function Signup() {
  return (
    <SafeAreaView style={styles.safe_area}>
      <Animatable.View animation="fadeInUpBig" style={styles.container}>
        <Image resizeMode="contain" style={styles.img} source={images.signup} />
        <Text text={I18n.t('signup_text')} />
        <ScrollView showsVerticalScrollIndicator={false} style={{flexGrow: 1}}>
          <InputField
            iconName={faUser}
            borderBottom={true}
            placeholder={I18n.t('full_name_text')}
          />
          <InputField
            iconName={faEnvelopeOpenText}
            borderBottom={true}
            placeholder={I18n.t('email_text')}
          />
          <InputField
            iconName={faLock}
            secureTextEntry={true}
            borderBottom={true}
            placeholder={I18n.t('password_text')}
          />
          <InputField
            iconName={faLock}
            secureTextEntry={true}
            borderBottom={true}
            placeholder={I18n.t('confirm_password_text')}
          />
          <Button buttonTitle={I18n.t('signup_text')} />
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
    padding: 10,
    backgroundColor: 'white',
  },
  img: {
    width: '100%',
    height: 280,
  },
});
