import { FlatList, Pressable, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { myColors } from '../Utils/MyColors';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { addToCart, removeFromCart } from '../CartReducer';

const SearchResult = ({ data, input, setInput }) => {
    const dispath = useDispatch();
    const storeData = useSelector((state) => state.cart.cart);
    const nav= useNavigation();
    return (
        <View style={{ padding: 10 }}>
            <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                data={data} renderItem={({ item }) => {
                    if (item.name.toLowerCase().includes(input.toLowerCase())) {
                        if (input === "") {
                            return null;
                        }
                        return (
                            <View style={{justifyContent:'space-between'}}>
                                <TouchableOpacity
                                    onPress={() => {
                                        nav.navigate('Detail', {
                                            main: item
                                        })
                                    }}

                                    activeOpacity={0.7}
                                    style={{
                                        height: 230,
                                        borderWidth: 2,
                                        borderColor: '#E3E3E3',
                                        width: 175,
                                        marginRight: 15,
                                        borderRadius: 15,
                                        marginBottom: 10
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
                                        <Text style={{ color: 'gray' }}>{item.pieces} Priceg</Text>
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
                            </View>
                        )
                    }
                }} 
                keyExtractor={(item, index) => index.toString()}/>
        </View>
    )
}

export default SearchResult;

const styles = StyleSheet.create({})