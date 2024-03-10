import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import CardViewHeader from './child/header/CardViewHeader'
import CardViewContent from './child/content/CardViewContent'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  interpolate,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

const CardViewScreen = () => {
  return (
    <View style={styles.container}>
      <CardViewHeader />
      <CardViewContent />
    </View>
  )
}

export default CardViewScreen

const styles = StyleSheet.create({
  container: {flex: 1,
  backgroundColor:'black'}
  
})