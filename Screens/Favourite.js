import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { myColors } from '../Utils/MyColors';
import { responsiveHeight, responsiveWidth, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addToCart } from '../CartReducer';
import { clearFavourite } from '../FavouriteReducer';

const Favourite = ({route}) => {
    const nav = useNavigation();
    const dispath = useDispatch();
    const storeData = useSelector((state) => state.favourite.favourite);
    const cart = useSelector((state) => state.cart.cart);
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, backgroundColor: 'white', gap: 15 }}>
            <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '500' }}>Favourite</Text>
            <View style={{flex: 0.95}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    key={storeData.id}
                    data={storeData} renderItem={({ item, index }) => (
                        <View
                            style={{
                                height: responsiveHeight(18),
                                borderBottomColor: '#E3E3E3',
                                borderBottomWidth: 2,
                                flexDirection: 'row',
                            }}
                        >
                            <View style={{ flex: 0.35, alignItems: 'center', paddingVertical: 20 }}>
                                <Image style={{ height: 100, width: 100, resizeMode: 'contain' }} source={{ uri: item.img }} />
                            </View>
                            <View style={{ flex: 0.7, paddingHorizontal: 10, paddingVertical: 20 , flexDirection: 'row', justifyContent:'space-between'}}>
                                <View style={{justifyContent: 'center'}}>
                                    <Text style={{ fontSize: 20, fontWeight: '600' }}>{item.name}</Text>
                                    <Text style={{ fontSize: 17, color: 'grey', marginTop: 5 }}>{item.pieces}</Text>
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 10}}>
                                    <Text style={{ fontSize: 22, fontWeight: '600' }}>${item.quantity * item.price}</Text>
                                    <AntDesign style={{marginLeft: 20}} name="right" size={24} color="black" />
                                </View>
                            </View>
                            
                        </View>
                    )} />
            </View>
            <View style={{ justifyContent: 'flex-end'}}>
                <TouchableOpacity
                    onPress={() => {
                        console.log(storeData)
                        storeData.map(item => dispath(addToCart(item)))
                        dispath(clearFavourite(storeData))
                        nav.navigate('Cart')
                    }}
                    activeOpacity={0.8}
                    style={{ backgroundColor: myColors.primary, borderRadius: 18, height: 70, justifyContent: 'center', alignItems: 'center' }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 40 }}>
                        <Text style={{ fontSize: 22, color: 'white', fontWeight: '700' }}>
                            Add all to cart
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Favourite;

const styles = StyleSheet.create({})