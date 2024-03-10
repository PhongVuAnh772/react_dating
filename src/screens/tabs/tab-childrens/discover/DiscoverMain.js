import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import DiscoverHeader from './child/header/DiscoverHeader'
import DiscoverContent from './child/content/DiscoverContent'
const DiscoverMain = () => {
  return (
    <ScrollView style={styles.container}>
      <DiscoverHeader />
      <DiscoverContent />
    </ScrollView>
  )
}

export default DiscoverMain

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    marginBottom:'10%',
    
  }
})