import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/Home/HomeStack';
import Hotels from '../screens/hotels/hotels';
import {COLORS, images, SIZES} from '../constants';
import {StyleSheet, View, Image} from 'react-native';
import {IconComponent} from '../components';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
  faBell,
  faUser,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import Requests from '../screens/Requests';
const Tab = createBottomTabNavigator();

function Tabs() {
  const IconSize = SIZES.padding * 1.3;
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: COLORS.primary_color},
        headerTitleAlign: 'center',
        headerTintColor: COLORS.white_color,
        headerTitle: () => (
          <Image
            style={{height: SIZES.padding2 * 4, width: SIZES.padding2 * 4}}
            source={images.logo}
          />
        ),
        tabBarActiveTintColor: COLORS.white_color,
        tabBarInactiveTintColor: COLORS.white_color,
        tabBarStyle: styles.tab_bar,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {marginBottom: SIZES.padding},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <IconComponent
                  iconName={faHome}
                  size={IconSize}
                  iconColor={COLORS.white_color}
                />
              ) : (
                <IconComponent
                  iconName={faHome}
                  iconColor={COLORS.white_color}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Requests"
        component={Requests}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <IconComponent
                  iconColor={COLORS.white_color}
                  size={IconSize}
                  iconName={faPaperPlane}
                />
              ) : (
                <IconComponent
                  iconColor={COLORS.white_color}
                  iconName={faPaperPlane}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.middle_icon}>
              {focused ? (
                <IconComponent
                  iconColor={COLORS.white_color}
                  size={IconSize * 1.2}
                  iconName={faHeart}
                />
              ) : (
                <IconComponent
                  iconColor={COLORS.white_color}
                  size={IconSize}
                  iconName={faHeart}
                />
              )}
            </View>
          ),
        }}
        name="Favourites"
        component={Hotels}
      />
      <Tab.Screen
        name="Notifications"
        component={Hotels}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <IconComponent
                  iconColor={COLORS.white_color}
                  size={SIZES.padding * 1.3}
                  iconName={faBell}
                />
              ) : (
                <IconComponent
                  iconColor={COLORS.white_color}
                  iconName={faBell}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Hotels}
        options={{
          tabBarIcon: ({focused}) => (
            <>
              {focused ? (
                <IconComponent
                  iconColor={COLORS.white_color}
                  size={SIZES.padding * 1.3}
                  iconName={faUser}
                />
              ) : (
                <IconComponent
                  iconColor={COLORS.white_color}
                  iconName={faUser}
                />
              )}
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Tabs;
const styles = StyleSheet.create({
  tab_bar: {
    height: SIZES.padding * 4,
    borderTopEndRadius: SIZES.padding,
    borderTopStartRadius: SIZES.padding,
    backgroundColor: COLORS.primary_color,
  },
  middle_icon: {
    height: SIZES.padding * 3.2,
    width: SIZES.padding * 3.2,
    marginBottom: 30,
    backgroundColor: COLORS.primary_color,
    borderWidth: 7,
    borderColor: COLORS.white_color,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
