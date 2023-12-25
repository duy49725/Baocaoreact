import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { myColors } from '../Utils/MyColors';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const OrderPlace = () => {
  const nav = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      nav.navigate('main')
    }, 3000000);
  })
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.95 }}>
        <StatusBar backgroundColor='white' />
        <MaterialIcons name="verified" size={100} color={myColors.primary} />
        <Text style={{ fontSize: 20, textAlign: 'center' }}>Your Orders have been successfull acceped</Text>
        <Text>Your items has been placed and is on it’s way to being processed</Text>
      </View>
      <View style={{ margin: 20, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          onPress={() => {
            nav.navigate('main')
          }}
          activeOpacity={0.8}
          style={{ backgroundColor: myColors.primary, borderRadius: 18, height: 70, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, color: 'white', fontWeight: '700' }}>Track Order</Text>
        </TouchableOpacity>
        <View style={{ margin: 20, justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => {
              nav.goBack()
            }}
            activeOpacity={0.8}
            style={{ borderRadius: 18, height: 70, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: 'grey', fontWeight: '700' }}>Back to</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OrderPlace;

const styles = StyleSheet.create({})