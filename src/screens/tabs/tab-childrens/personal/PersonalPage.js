import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import PersonalHeader from './children/header/PersonalHeader'
import PersonalContent from './children/content/PersonalContent'
const ConversationMain = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator>
      <PersonalHeader />
      <PersonalContent />
    </ScrollView>
  )
}

export default ConversationMain

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    marginBottom:'10%',
    
  }
})