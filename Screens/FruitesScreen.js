import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { myColors } from '../Utils/MyColors';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../CartReducer';
import { useState } from 'react';
import { getProducts } from '../ProductReducer';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { database } from '../firebaseConfig';

const FruitesScreen = (data, title1, tittle2) => {
    const [items, setItems] = useState([]);
    const product = useSelector((state) => state.product.product)
    const route = useRoute()
    const dispath = useDispatch();
    const nav = useNavigation();
    const storeData = useSelector((state) => state.cart.cart);

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 10, paddingBottom: 50 }}>
            <StatusBar backgroundColor='white' />
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <AntDesign
                        onPress={() => (
                            nav.goBack()
                        )}
                        name="left" size={24} color="black" />
                    {route.params.check=="1"?(<Text style={{ fontSize: 25 }}>{route.params.title}</Text>):(<Text style={{ fontSize: 25 }}>{route.params.title2}</Text>)}
                    <Ionicons
                        onPress={() => {
                            nav.navigate('Filter')
                        }}
                        style={{ alignSelf: 'center', marginRight: 5 }} name="md-filter" size={30} color="black" />
                </View>
                <FlatList
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    data={route.params.check=='1'?(route.params.title=='all'?(route.params.data):(route.params.data.filter((data)=>data.title===route.params.title))):(route.params.data)}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => {
                                nav.navigate('Detail', {
                                    main: item,
                                    id: item.id
                                })
                            }}

                            activeOpacity={0.7}
                            style={{
                                height: responsiveHeight(28),
                                borderWidth: 2,
                                borderColor: '#E3E3E3',
                                width: responsiveWidth(45),
                                marginRight: 15,
                                borderRadius: 15,
                                marginTop: 20
                            }}
                        >
                            <Image
                                style={{ height: 125, width: 120, alignSelf: 'center', resizeMode: 'contain' }}
                                source={{ uri: item.img }}
                            />
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: '600' }}>
                                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                </Text>
                                <Text style={{ color: 'gray' }}>{item.pieces} Price</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>${item.price}</Text>
                                    {
                                        storeData.some((value) => value.name == item.name)
                                            ?
                                            (<FontAwesome
                                                onPress={() => {
                                                    dispath(removeFromCart(item))
                                                }}
                                                name="minus-square" size={33} color={myColors.primary}
                                            />)
                                            :
                                            (<FontAwesome
                                                onPress={() => {
                                                    dispath(addToCart(item))
                                                    alert('add to cart success')
                                                }}
                                                name="plus-square" size={33} color={myColors.primary}
                                            />)
                                    }

                                </View>
                            </View>

                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default FruitesScreen;

const styles = StyleSheet.create({})