import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../ProductReducer';

const Explore = () => {
  const [items, setItems] = useState([]);
  const product = useSelector((state) => state.product.product)
    const dispatch = useDispatch();
    useEffect(() => {
        if (product.length > 0)
            return;
        const fetchProduct = async () => {
           const colRef = collection(database, "type")
           const docsSnap = await getDocs(colRef);
           docsSnap.forEach((doc) => {
                items.push(doc.data());
           });
           items?.map((services) => dispatch(getProducts(services)));
        };
        fetchProduct();
    }, [])
    console.log(product)
  const title1 = 'Frash Fruits & Vegetable';
  const title2 = 'Cooking Oil & Ghee';
  const title3 = 'Meat & Fish';
  const title4 = 'Barkery & Snacks';
  const title5 = 'Beverages';
  const title6 = 'Dairy & Eggs';
  

  const nav = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontSize: 25, fontWeight: '500' }}>Find Products</Text>
        <TouchableOpacity
           onPress={() => (
            nav.navigate('SearchScreen')
          )}
        >
          <View style={{
            backgroundColor: '#E2E3E2',
            height: responsiveHeight(6.5),
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            gap: 10,
            width: '92%',
            marginBottom: 20,
            marginTop: 20,
          }}>
            <Feather name="search" size={24} color="black" />
            <TextInput style={{ flex: 1 }} placeholder='Search Store' />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 120 }}
      >
        <View style={{ paddingHorizontal: 10, flex: 1, flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          <Pressable
            onPress={() => (
              nav.navigate('FruitesScreen', {
                check: "0",
                title2: title1,
                data: product,
              })
            )}
            style={{ backgroundColor: '#D8EEE0', flex: 0.5, height: 200, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderColor: 'green', borderWidth: 1 }}>
            <Image source={require('../assets/fruit.png')} />
            <Text style={{ color: 'black', fontSize: 20, paddingHorizontal: 30 }}>{title1}</Text>
          </Pressable>
          <Pressable
            onPress={() => (
              nav.navigate('FruitesScreen', {
                check: "0",
                title2: title2,
                data: product
              })
            )}
            style={{ backgroundColor: '#F1C699', flex: 0.5, height: 200, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderColor: 'orange', borderWidth: 1 }}>
            <Image source={require('../assets/oil.png')} />
            <Text style={{ color: 'black', fontSize: 20, paddingHorizontal: 30 }}>{title2}</Text>
          </Pressable>
        </View>
        <View style={{ paddingHorizontal: 10, flex: 1, flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          <Pressable
            onPress={() => (
              nav.navigate('FruitesScreen',{
                check: "0",
                title2: title3,
                data: product
              })
            )}
            style={{ backgroundColor: '#F7A593', flex: 0.5, height: 200, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderColor: 'green', borderWidth: 1 }}>
            <Image source={require('../assets/fish.png')} />
            <Text style={{ color: 'black', fontSize: 20, paddingHorizontal: 30 }}>{title3}</Text>
          </Pressable>
          <Pressable
            onPress={() => (
              nav.navigate('FruitesScreen',{
                check: "0",
                title2: title4,
                data: product
              })
            )}
            style={{ backgroundColor: '#D3B0E0', flex: 0.5, height: 200, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderColor: 'orange', borderWidth: 1 }}>
            <Image source={require('../assets/bread.png')} />
            <Text style={{ color: 'black', fontSize: 20, paddingHorizontal: 30 }}>{title4}</Text>
          </Pressable>
        </View>
        <View style={{ paddingHorizontal: 10, flex: 1, flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          <Pressable
            onPress={() => (
              nav.navigate('FruitesScreen', {
                check: "0",
                title2: title5,
                data: product
              })
            )}
            style={{ backgroundColor: '#FDE598', flex: 0.5, height: 200, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderColor: 'green', borderWidth: 1 }}>
            <Image source={require('../assets/drink.png')} />
            <Text style={{ color: 'black', fontSize: 20, paddingHorizontal: 30 }}>{title5}</Text>
          </Pressable>
          <Pressable
            onPress={() => (
              nav.navigate('FruitesScreen', {
                check: "0",
                title6: title6,
                data: product
              })
            )}
            style={{ backgroundColor: '#B7DFF5', flex: 0.5, height: 200, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderColor: 'orange', borderWidth: 1 }}>
            <Image source={require('../assets/egg.png')} />
            <Text style={{ color: 'black', fontSize: 20, paddingHorizontal: 30 }}>{title6}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Explore;

const styles = StyleSheet.create({})