import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { myColors } from '../Utils/MyColors';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { addToCart, decrementQuantity, incrementQuantity } from '../CartReducer';
import { ScrollView } from 'react-native';
import { addToFavourite, removeFromFavourite } from '../FavouriteReducer';
import { incrementQty } from '../ProductReducer';

const Detail = ({ route }) => {
    const cart = useSelector((state) => state.cart.cart);
    const dispath = useDispatch();
    const storeData = useSelector((state) => state.favourite.favourite);
    const productData = route.params.main
    const { name, price, pieces, img, id, quantity, content, title } = productData
    const quantity3 = quantity - (quantity - 1);
    const [quantity2, setquantity2] = useState(quantity3);
    const nav = useNavigation();
    const [myIndex, setMyIndex] = useState(false);
    const [toggle, setToggle] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1, gap: 20, backgroundColor: 'white' }}>
            <StatusBar backgroundColor='white' />
            <View>
                <Image
                    resizeMode='contain'
                    style={{ height: 300, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}
                    source={{ uri: img }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', width: '100%', paddingHorizontal: 15, alignItems: 'center' }}>
                    <Ionicons
                        onPress={() => {
                            nav.goBack();
                        }}
                        name="chevron-back" size={28} color="black" />
                    <Feather name="share" size={20} color="black" />
                </View>
            </View>
            <View style={{ paddingHorizontal: 15, backgroundColor: 'white', flex: 1 }} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, color: 'black', fontWeight: '600' }}>{name}</Text>
                    {
                        storeData.some((value) => value.name == productData.name)
                            ?
                            (<MaterialIcons
                                onPress={() => (
                                    dispath(removeFromFavourite(productData))
                                )}
                                name="favorite" size={30} color="red" />
                            )
                            :
                            (<MaterialIcons
                                onPress={() => {
                                    nav.navigate('Favourite')
                                    dispath(addToFavourite(productData))
                                }}
                                name="favorite-border" size={30} color="black"
                            />)
                    }

                </View>
                <Text style={{ marginTop: 5, fontSize: 15, color: 'gray' }}>{pieces}, Price</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', gap: 7 }}>
                        <AntDesign
                            onPress={() => {
                                dispath(decrementQuantity(cart.quantity))
                            }}
                            name="minuscircleo" size={28} color={myColors.primary} />
                        <Text style={{ fontSize: 20, fontWeight: '600', justifyContent: 'center', alignItems: 'center' }}>{quantity2}</Text>
                        <AntDesign
                            onPress={() => {
                                dispath(incrementQuantity(cart.quantity))
                            }}
                            name="pluscircleo" size={28} color={myColors.primary} /></View>
                    <Text style={{ marginTop: 5, fontSize: 28, color: 'black', fontWeight: 'bold' }}>
                        ${price}
                    </Text>
                </View>
                <ScrollView style={{ marginTop: 20 }}>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setToggle(!toggle)
                                setMyIndex(!myIndex)
                            }}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottomColor: '#E3E3E3',
                                marginBottom: 10,
                                paddingVertical: 10
                            }}
                        >
                            <Text>{title}</Text>
                            <AntDesign name={myIndex && toggle ? "down" : 'right'} size={24} color="black" />
                        </TouchableOpacity>
                        {toggle ? <Text>{content}</Text> : null}
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#E3E3E3',
                            marginBottom: 10,
                            paddingVertical: 5
                        }}></View>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setToggle(!toggle)

                            }}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottomColor: '#E3E3E3',
                                marginBottom: 10,
                                paddingVertical: 10
                            }}
                        >
                            <Text>{title}</Text>
                            <AntDesign name={toggle ? "down" : 'right'} size={24} color="black" />
                        </TouchableOpacity>
                        {toggle ? <Text>{content}</Text> : null}
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#E3E3E3',
                            marginBottom: 10,
                            paddingVertical: 5
                        }}></View>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setToggle(!toggle)

                            }}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottomColor: '#E3E3E3',
                                marginBottom: 10,
                                paddingVertical: 10
                            }}
                        >
                            <Text>{title}</Text>
                            <AntDesign name={toggle ? "down" : 'right'} size={24} color="black" />
                        </TouchableOpacity>
                        {toggle ? <Text>{content}</Text> : null}
                        <View style={{
                            borderBottomWidth: 1,
                            borderBottomColor: '#E3E3E3',
                            marginBottom: 10,
                            paddingVertical: 5
                        }}></View>
                    </View>


                </ScrollView>
                <View style={{ marginBottom: 30, justifyContent: 'flex-end' }}>
                    <TouchableOpacity
                        onPress={() => {
                          
                            dispath(addToCart(productData));
                            dispath(incrementQty(productData))
                            nav.navigate('Cart', {
                                main: productData
                            })
                        }}
                        activeOpacity={0.8}
                        style={{ backgroundColor: myColors.primary, borderRadius: 18, height: 70, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '700' }}>Add to Basket</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default Detail;