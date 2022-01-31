import React, {useState} from 'react';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import I18n from '../../i18n';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Button, InputField, Text} from '../../components';
import {COLORS, FONTS, images} from '../../constants';
function Login({navigation}) {
  const [loginValues, setLoginValues] = useState({
    userNameFocused: false,
    passwordFocused: false,
  });
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.img} source={images.login} />
      <Text text={I18n.t('welcome_text')} />
      <Text style={styles.text} text={I18n.t('login_existing_account')} />
      <View style={styles.subCont}>
        <InputField
          iconName={faUser}
          onChangeText={text => console.log(text)}
          placeholder={I18n.t('user_name_text')}
          onFocus={() =>
            setLoginValues({...loginValues, userNameFocused: true})
          }
          onBlur={() =>
            setLoginValues({...loginValues, userNameFocused: false})
          }
          style={{
            borderColor: loginValues.userNameFocused
              ? COLORS.primary_color
              : COLORS.light_gray,
          }}
        />
        <InputField
          iconName={faLock}
          onChangeText={text => console.log(text)}
          placeholder={I18n.t('password_text')}
          onFocus={() =>
            setLoginValues({...loginValues, passwordFocused: true})
          }
          onBlur={() =>
            setLoginValues({...loginValues, passwordFocused: false})
          }
          secureTextEntry={true}
          style={{
            borderColor: loginValues.passwordFocused
              ? COLORS.primary_color
              : COLORS.light_gray,
          }}
        />
        <Button
          style={{alignSelf: 'center'}}
          onPress={() => navigation.navigate('Tabs')}
          buttonTitle={I18n.t('login_text')}
        />
        <View style={styles.dontAccountCont}>
          <Text style={styles.text} text={I18n.t('dont_account_cont')} />
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text
              style={[styles.text, {...FONTS.Medium14, marginLeft: 4}]}
              text={I18n.t('signup_text')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  text: {
    ...FONTS.Light14,
  },
  img: {
    height: 250,
    width: '100%',
  },
  welcomeTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  subCont: {
    marginTop: 20,
    justifyContent: 'center',
  },
  inputCont: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 40,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  btnLogin: {
    alignSelf: 'center',
    marginTop: 30,
    height: 50,
    backgroundColor: 'rgba(50,50,122,1)',
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  dontAccountCont: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
});
export default Login;
