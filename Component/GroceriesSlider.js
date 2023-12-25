import { ScrollView,Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GroceriesSlider = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{}}>
        <View style={{backgroundColor: '#F8A44C', width: 200, height: 80, borderRadius: 10, marginRight: 20, alignItems: 'center', flexDirection: 'row'}}>
            <Image style={{width: 50, height: 50, marginLeft: 20}} source={require('../assets/Rice.png')}/> 
            <Text style={{marginLeft: 10, fontSize: 20}}>Pulses</Text>
        </View>
        <View style={{backgroundColor: 'skyblue', width: 200, height: 80, borderRadius: 10, marginRight: 20,alignItems: 'center', flexDirection: 'row'}}>
            <Image style={{width: 50, height: 50, marginLeft: 20}} source={require('../assets/Rice.png')}/> 
            <Text style={{marginLeft: 10, fontSize: 20}}>Rice</Text>
        </View>
    </ScrollView>
  )
}

export default GroceriesSlider;

const styles = StyleSheet.create({})