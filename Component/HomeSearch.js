import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native';

const HomeSearch = () => {
  const nav = useNavigation()
  return (
    <Pressable
        onPress={()=>{
            nav.navigate('SearchScreenHome')
        }}
    >
      <View style={{
        backgroundColor: '#E2E3E2',
        height: responsiveHeight(6.5),
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 10
      }}>
        <Feather name="search" size={24} color="black" />
        <TextInput style={{ flex: 1 }} placeholder='Search Store' />
      </View>
    </Pressable>
  )
}

export default HomeSearch

const styles = StyleSheet.create({})