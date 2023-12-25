import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeIcon = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image style={{width: 40, height: 45}} source={require('../assets/carrot2.png')}/>
    </View>
  )
}

export default HomeIcon;

const styles = StyleSheet.create({})