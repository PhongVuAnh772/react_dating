import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LikingTab from './children/liking/LikingTab';
import GuestTab from './children/guest/GuestTab';
import LikedTab from './children/liked/LikedTab';

const TabNavigators = route => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const getTabBarVisibility = route => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'QrCodeMain';

    if (routeName === 'QrCodeContainer') {
      return false;
    }

    return true;
  };

  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: 'rgb(255, 102, 100)',
        tabBarInactiveTintColor: '#000000',

        tabBarStyle: {
          height: '4.5%',
          position: 'absolute',
          top: 10,

          right: '15%',
          left: 15,
          borderRadius: 30,
          backgroundColor: 'black',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 13, // Kích thước của chữ
          paddingBottom: 5,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconComponent;

          if (route.name === 'LikingTab') {
            iconName = focused ? 'home' : 'home';
            color = focused ? 'white' : 'rgb(123, 133, 146)';
            iconComponent = (
              <View
                style={{
                  backgroundColor: focused ? 'white' : 'rgb(35, 34, 40)',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    color: focused ? 'black' : 'white',
                    fontSize: 16,
                    fontWeight: 500,
                  }}>
                  Lượt thích
                </Text>
              </View>
            );
          } else if (route.name === 'GuestTab') {
            iconName = focused ? 'compass' : 'compass';
            color = focused ? 'white' : 'rgb(123, 133, 146)';
            iconComponent = (
              <View
                style={{
                  backgroundColor: focused ? 'white' : 'rgb(35, 34, 40)',
                  width: '80%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    color: focused ? 'black' : 'white',
                    fontSize: 16,
                    fontWeight: 500,
                  }}>
                  Khách
                </Text>
              </View>
            );
          } else if (route.name === 'LikedTab') {
            iconName = focused ? 'compass' : 'compass';
            color = focused ? 'white' : 'rgb(123, 133, 146)';
            iconComponent = (
              <View
                style={{
                  backgroundColor: focused ? 'white' : 'rgb(35, 34, 40)',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    color: focused ? 'black' : 'white',
                    fontSize: 16,
                    fontWeight: 500,
                  }}>
                  Đã thích
                </Text>
              </View>
            );
          }

          return iconComponent;
        },
      })}>
      <Tab.Screen
        name="LikingTab"
        component={LikingTab}
        options={{tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="GuestTab"
        component={GuestTab}
        options={{tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="LikedTab"
        component={LikedTab}
        options={{tabBarShowLabel: false}}
      />
      {/* <Tab.Screen
        name="MakeFriend"
        // component={MakeFriend}
         component={ScannerScreen}
        options={{tabBarShowLabel: false}}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigators;

const styles = StyleSheet.create({});
