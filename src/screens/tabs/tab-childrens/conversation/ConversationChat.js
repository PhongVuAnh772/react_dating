import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import ConversationHeader from './children/ConversationHeader'
import ConversationContent from './children/content/ConversationContent'
const ConversationMain = () => {
  return (
    <ScrollView style={styles.container}>
      <ConversationHeader />
      <ConversationContent />
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