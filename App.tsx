// In App.js in a new project

import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigators from './src/screens/tabs/TabsNavigators';
import {GestureHandlerRootView,GestureDetector } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor="black"
        barStyle="light-content"
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="TabsNavigators" component={TabNavigators} />
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
