import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { myColors } from '../Utils/MyColors';
import { addToCart, removeFromCart } from '../CartReducer';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const ProductsCarousel = ({ data, item }) => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const nav = useNavigation();
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    nav.navigate('Detail', {
                        main: item
                    })
                }}
                activeOpacity={0.7}
                style={{
                    height: responsiveHeight(28),
                    borderWidth: 2,
                    borderColor: '#E3E3E3',
                    width: responsiveWidth(45),
                    marginRight: 15,
                    borderRadius: 15
                }}
            >
                <Image
                    style={{ height: 125, width: 120, alignSelf: 'center', resizeMode: 'contain' }}
                    source={{ uri: item.img }}
                />
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>
                        {item.name}
                    </Text>
                    <Text style={{ color: 'gray' }}>{item.pieces} Priceg</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>${item.price}</Text>
                        {
                            cart.some((value) => value.name == item.name)
                                ?
                                (<FontAwesome
                                    onPress={() => {
                                        dispatch(removeFromCart(item))

                                    }}
                                    name="minus-square" size={33} color={myColors.primary}
                                />)
                                :
                                (<FontAwesome
                                    onPress={() => {
                                        dispatch(addToCart(item))
                                        alert('add to cart success')
                                        console.log(cart)
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

export default ProductsCarousel;

const styles = StyleSheet.create({})