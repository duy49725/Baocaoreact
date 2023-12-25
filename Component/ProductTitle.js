import { Pressable, StyleSheet, Text, View } from 'react-native'
import React,  {useState, useEffect} from 'react'
import { myColors } from '../Utils/MyColors';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { getProducts } from '../ProductReducer';
import { database } from '../firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';

const ProductTitle = ({ title, data }) => {
  const nav = useNavigation();
  return (
    <Pressable
      onPress={() => (
        nav.navigate('FruitesScreen', {
          data: data
        })
      )}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>{title}</Text>
        <Text style={{ fontSize: 16, color: myColors.primary }}>See all</Text>
      </View>
    </Pressable>
  )
}

export default ProductTitle;

const styles = StyleSheet.create({})