import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import * as Animatable from 'react-native-animatable';

function Signup() {
  return (
    <Animatable.View animation="fadeInUpBig" style={styles.container}>
      <ScrollView style={{flexGrow: 1}}>
        <Image
          resizeMode="cover"
          style={styles.img}
          source={require('../../assets/signup.png')}
        />
        <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
          Sign Up
        </Text>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            style={{marginLeft: 10}}
            color="gray"
            icon={faUser}
          />
          <TextInput style={{width: '100%'}} placeholder="Full Name" />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            style={{marginLeft: 10}}
            color="gray"
            icon={faEnvelopeOpenText}
          />
          <TextInput style={{width: '100%'}} placeholder="Email" />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            style={{marginLeft: 10}}
            color="gray"
            icon={faLock}
          />
          <TextInput
            secureTextEntry={true}
            style={{width: '100%'}}
            placeholder="Password"
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesomeIcon
            style={{marginLeft: 10}}
            color="gray"
            icon={faLock}
          />
          <TextInput
            secureTextEntry={true}
            style={{width: '100%'}}
            placeholder="Confirm Password"
          />
        </View>
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={{color: 'white'}}>Sign up</Text>
        </TouchableOpacity>
      </ScrollView>
    </Animatable.View>
  );
}
export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  img: {
    width: '100%',
    height: 210,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    marginTop: 10,
    borderColor: 'lightgray',
    backgroundColor: 'white',
  },
  signupBtn: {
    alignSelf: 'center',
    marginTop: 30,
    height: 50,
    backgroundColor: 'rgba(50,50,122,1)',
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});
