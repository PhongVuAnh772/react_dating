import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DiscoverMain from './tab-childrens/discover/DiscoverMain';
import CardViewScreen from './tab-childrens/cards/CardViewScreen';
import ConversationChat from './tab-childrens/conversation/ConversationChat';
import OutStandingActivity from './out-standing/OutStandingActivity';
import PersonalPage from './tab-childrens/personal/PersonalPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
        indicatorStyle: {
          width: 0,
          height: 0,
          elevation: 0,
        },
        style: {
          elevation: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
        },

        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'black',
          borderTopColor: 'transparent',
        },
        tabBarLabelStyle: {
          fontSize: 13, // Kích thước của chữ
          paddingBottom: 5,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconComponent;

          if (route.name === 'CardViewScreen') {
            iconName = focused
              ? 'cards-playing-heart-multiple-outline'
              : 'cards-playing-heart-multiple-outline';
            color = focused ? 'white' : 'rgb(123, 133, 146)';
            iconComponent = (
              <MaterialCommunityIcons name={iconName} size={25} color={color} />
            );
          } else if (route.name === 'DiscoverMain') {
            iconName = focused ? 'people-sharp' : 'people-outline';
            color = focused ? 'white' : 'rgb(123, 133, 146)';
            iconComponent = (
              <Ionicons name={iconName} size={25} color={color} />
            );
          } else if (route.name === 'OutStandingActivity') {
            iconName = focused ? 'heart' : 'heart-outline';
            color = focused ? 'white' : 'rgb(123, 133, 146)';
            iconComponent = (
              <Ionicons name={iconName} size={27} color={color} />
            );
          } else if (route.name === 'ConversationChat') {
            iconName = focused ? 'chatbubble-sharp' : 'chatbubble-outline';
            color = focused ? 'white' : 'rgb(123, 133, 146)';
            iconComponent = (
              <Ionicons name={iconName} size={25} color={color} />
            );
          } else if (route.name === 'PersonalPage') {
            iconName = focused ? 'user' : 'user-o';
            color = focused ? 'white' : 'rgb(123, 133, 146)';
            iconComponent = (
              <FontAwesome name={iconName} size={25} color={color} />
            );
          }

          return iconComponent;
        },
      })}>
      <Tab.Screen
        name="CardViewScreen"
        component={CardViewScreen}
        options={{tabBarLabel: 'Trang chủ', tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="DiscoverMain"
        component={DiscoverMain}
        options={{tabBarLabel: 'Tìm', tabBarShowLabel: false}}
      />

      <Tab.Screen
        name="OutStandingActivity"
        component={OutStandingActivity}
        options={{tabBarLabel: 'Người dùng nổi bật', tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="ConversationChat"
        component={ConversationChat}
        options={{tabBarLabel: 'Nhắn tin', tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="PersonalPage"
        component={PersonalPage}
        options={{tabBarLabel: 'Tôi', tabBarShowLabel: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigators;

const styles = StyleSheet.create({});
