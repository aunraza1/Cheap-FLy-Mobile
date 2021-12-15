import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faWifi,
  faBed,
  faWater,
  faBreadSlice,
} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
function Home({loggedUser}) {
  const services = [
    {
      icon: faWifi,
      text: 'Wifi',
      backgroundColor: 'rgba(45,85,255,1)',
    },
    {
      icon: faBed,
      text: 'Bed',
      backgroundColor: 'gray',
    },
    {
      icon: faWater,
      text: 'Hot Water',
      backgroundColor: 'red',
    },
    {
      icon: faBreadSlice,
      text: 'Breakfast',
      backgroundColor: 'orange',
    },
  ];

  const Services = ({item}) => {
    return (
      <View style={[styles.services, {backgroundColor: item.backgroundColor}]}>
        <FontAwesomeIcon color="white" size={50} icon={item.icon} />
        <Text style={{color: 'white', fontFamily: 'PetitaLight'}}>
          {item.text}
        </Text>
      </View>
    );
  };

  const Hotels = ({item}) => {
    return (
      <TouchableOpacity style={styles.cardCont}>
        <Image
          resizeMode="stretch"
          style={styles.hotelImage}
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
        />
        <View style={{padding: 10}}>
          <View style={styles.flexProp}>
            <Text
              style={{fontFamily: 'PetitaBold', color: 'black', fontSize: 16}}>
              Holiday Inn
            </Text>
            <Text
              style={{fontFamily: 'PetitaBold', color: 'black', fontSize: 16}}>
              2000PKR
            </Text>
          </View>
          <View style={styles.flexProp}>
            <Text style={{fontFamily: 'PetitaLight'}}>Swat</Text>
            <Text style={{fontFamily: 'PetitaLight'}}>Per Night</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: 'PetitaLight',
          fontSize: 18,
        }}>{`Hello, ${loggedUser}`}</Text>

      <View style={{marginTop: 15}}>
        <Text
          style={{
            marginBottom: 10,
            fontFamily: 'PetitaMedium',
            fontSize: 18,
            color: 'black',
          }}>
          Services
        </Text>
        <FlatList
          contentContainerStyle={{justifyContent: 'space-around', flexGrow: 1}}
          style={{flexGrow: 0}}
          horizontal={true}
          data={services}
          renderItem={Services}
        />
      </View>
      <FlatList
        contentContainerStyle={{paddingBottom: 10}}
        style={{marginTop: 20, flex: 1, padding: 15}}
        data={[1, 2, 3, 4, 5]}
        renderItem={Hotels}
      />
    </View>
  );
}

const mapStateToProp = state => ({
  loggedUser: state.loggedUser,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cardCont: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  services: {
    height: 90,
    width: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hotelImage: {
    height: 160,
    width: '100%',
    borderRadius: 5,
  },
  flexProp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default connect(mapStateToProp, null)(Home);
