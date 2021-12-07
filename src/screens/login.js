import React ,{useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser,faLock} from '@fortawesome/free-solid-svg-icons';
import {View, Image, ScrollView, Text, TextInput, TouchableOpacity} from 'react-native';
function Login() {

    const [loginValues,setLoginValues]=React.useState({
        userNameFocused:false,
        passwordFocused:false,
    });
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white', padding: 15}}>
      <Image
        style={{height: 250, width: '100%'}}
        source={require('../assets/login.png')}
      />

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Welcome Back!
        </Text>
        <Text style={{color: 'gray'}}>
          Login to your existing account of cheap fly
        </Text>
      </View>

      <View style={{marginTop: 20, justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
            borderColor: loginValues.userNameFocused ? 'blue' : 'black',
            borderRadius: 40,
            borderWidth: 1,
            backgroundColor: 'white',
          }}>
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
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: loginValues.passwordFocused ? 'blue' : 'black',
            padding: 5,
            borderRadius: 40,
            borderWidth: 1,
            marginTop: 20,
          }}>
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

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 30,
            height: 50,
            backgroundColor: 'rgba(50,50,122,1)',
            width: 140,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
          }}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default Login;
