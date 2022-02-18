import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import Hotels from '../screens/Hotels';
import { COLORS, images, SIZES } from '../constants';
import { StyleSheet, View, Image } from 'react-native';
import { IconComponent } from '../components';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
  faBell,
  faUser,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import Requests from '../screens/Requests';
import Notifications from '../screens/Notifications';
import { Favourites } from '../screens/Fovourites/Favourites';
import { Profile } from '../screens/Profile/Profile';
const Tab = createBottomTabNavigator();
import I18n from '../i18n';

function Tabs() {
  const IconSize = SIZES.padding * 1.3;
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary_color },
        headerTitleAlign: 'center',
        headerTintColor: COLORS.white_color,
        headerTitle: () => (
          <Image
            style={{ height: SIZES.padding2 * 4, width: SIZES.padding2 * 4 }}
            source={images.logo}
          />
        ),
        tabBarActiveTintColor: COLORS.white_color,
        tabBarInactiveTintColor: COLORS.white_color,
        tabBarStyle: styles.tab_bar,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: { marginBottom: SIZES.padding },
      }}>
      <Tab.Screen
        name={I18n.t('home_text')}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
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
        name={I18n.t('request_text')}
        component={Requests}
        options={{
          tabBarIcon: ({ focused }) => (
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
        name={I18n.t('favourite_text')}
        component={Favourites}
        options={{
          tabBarIcon: ({ focused }) => (
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
      />
      <Tab.Screen
        name={I18n.t('notification_text')}
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <IconComponent
                  iconColor={COLORS.white_color}
                  size={IconSize}
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
        name={I18n.t('profile_text')}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <>
              {focused ? (
                <IconComponent
                  iconColor={COLORS.white_color}
                  size={IconSize}
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
    backgroundColor: COLORS.maroon_color,
    borderWidth: 7,
    borderColor: COLORS.white_color,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
