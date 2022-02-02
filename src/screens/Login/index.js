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
import {Button, InputField, Loader, Text} from '../../components';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {ModalHandler} from '../../store/actions/modal-actions';
import {LoginHandler} from '../../store/actions/autth-actions';
import {CommonActions} from '@react-navigation/native';
function Login({navigation}) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginValues, setLoginValues] = useState({
    userNameFocused: false,
    passwordFocused: false,
  });
  const {loading} = useSelector(state => state.AuthReducer);

  const goToHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'Tabs',
          },
        ],
      }),
    );
  };
  const authenticateUser = () => {
    if (email && password) {
      dispatch(LoginHandler(email, password, goToHome));
    } else {
      dispatch(
        ModalHandler({
          show: true,
          message: I18n.t('email_pass_cant_text'),
        }),
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.img} source={images.login} />
      <Text text={I18n.t('welcome_text')} />
      <Text style={styles.text} text={I18n.t('login_existing_account')} />
      <View style={styles.subCont}>
        <InputField
          onChangeText={text => setEmail(text)}
          iconName={faUser}
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
          onChangeText={text => setPassword(text)}
          iconName={faLock}
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
        {loading ? (
          <Loader />
        ) : (
          <Button
            style={{alignSelf: 'center'}}
            onPress={() => authenticateUser()}
            buttonTitle={I18n.t('login_text')}
          />
        )}
        <View style={styles.dont_account_cont}>
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
    padding: SIZES.padding2 * 1.2,
  },
  text: {
    ...FONTS.Light14,
  },
  img: {
    height: 250,
    width: '100%',
  },
  subCont: {
    marginTop: SIZES.padding,
  },
  dont_account_cont: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: SIZES.padding2,
  },
});
export default Login;
