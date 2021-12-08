import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import {
  View,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
function Login({navigation}) {
  const [loginValues, setLoginValues] = useState({
    userNameFocused: false,
    passwordFocused: false,
  });
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.img} source={require('../assets/login.png')} />

      <View style={styles.welcomeTxtCont}>
        <Text style={styles.welcomeTxt}>Welcome Back!</Text>
        <Text style={{color: 'gray'}}>
          Login to your existing account of cheap fly
        </Text>
      </View>

      <View style={styles.subCont}>
        <View
          style={[
            styles.inputCont,
            {
              borderColor: loginValues.userNameFocused
                ? 'lightblue'
                : 'lightgray',
            },
          ]}>
          <FontAwesomeIcon
            style={{marginLeft: 10}}
            color="gray"
            icon={faUser}
          />
          <TextInput
            onFocus={() =>
              setLoginValues({...loginValues, userNameFocused: true})
            }
            onBlur={() =>
              setLoginValues({...loginValues, userNameFocused: false})
            }
            style={{width: '100%'}}
            placeholder="User Name"
          />
        </View>

        <View
          style={[
            styles.inputCont,
            {
              borderColor: loginValues.passwordFocused
                ? 'lightblue'
                : 'lightgray',
              marginTop: 20,
            },
          ]}>
          <FontAwesomeIcon
            style={{marginLeft: 10}}
            color="gray"
            icon={faLock}
          />
          <TextInput
            onFocus={() =>
              setLoginValues({...loginValues, passwordFocused: true})
            }
            onBlur={() =>
              setLoginValues({...loginValues, passwordFocused: false})
            }
            style={{width: '100%'}}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
        <View style={styles.dontAccountCont}>
          <Text style={{color: 'black'}}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text> Sign up!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  img: {
    height: 250,
    width: '100%',
  },
  welcomeTxtCont: {
    justifyContent: 'center',
    alignItems: 'center',
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
