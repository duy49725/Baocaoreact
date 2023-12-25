import React from 'react';
import { StyleSheet, Text, View, Pressable, Feather, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setCoupon } from '../CouponReducer';
import { AntDesign } from '@expo/vector-icons';

export default function Promocard() {
    const nav = useNavigation();
    const dispath = useDispatch();
    const coupon = useSelector((state) => state.coupon.coupon);


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Maskg.png')} style={{backgroundColor: 'white' }} >
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#53b175', marginTop: 40, width: '100%' }}>
                    <Pressable style={{ marginLeft: 0, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign
                            style={{ margin: 10 }}
                            onPress={() => (
                                nav.goBack()
                            )}
                            name="left" size={40} color="white"
                        />
                    </Pressable>
                    <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 90, color: 'white'}}>
                        Promocard
                    </Text>
                </View>
                <View style={{ flex: 1 , alignItems:'center'}}>
                    <View style={{ backgroundColor: 'greenyellow', width: 300, height: 150, marginTop: 30, borderRadius: 30, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: 'red', height: 150, width: 50, borderRadius: 30 }}></View>
                        <View style={{ backgroundColor: 'red', height: 150, width: 30, marginLeft: -30 }}>
                            <Text style={{ fontSize: 15, fontWeight: '800' }}> D{'\n'} I{'\n'} S{'\n'} C{'\n'} O{'\n'} U{'\n'} N{'\n'} T</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 10, marginLeft: 30 }}>Thẻ giảm giá 20% cho{'\n'} đơn hàng từ 50 $</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 50, marginLeft: 5 }}>
                                        Ngày hết hạn:
                                    </Text>
                                    <Text style={{ fontSize: 15, marginTop: 0, marginLeft: 5 }}>
                                        30/12/2023
                                    </Text>
                                </View>
                                {coupon != 20 ? (<Pressable onPress={() => { dispath(setCoupon('20')) }} style={{ backgroundColor: 'blue', marginTop: 45, marginLeft: 20, width: 100, height: 40, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, fontWeight: '600', color: 'white' }}>Sử dụng</Text>
                                </Pressable>) : (<Pressable onPress={() => { dispath(setCoupon('0')) }} style={{ backgroundColor: 'blue', marginTop: 45, marginLeft: 20, width: 100, height: 40, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, fontWeight: '600', color: 'white' }}>Hủy</Text>
                                </Pressable>)}
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'greenyellow', width: 300, height: 150, marginTop: 30, borderRadius: 30, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: 'red', height: 150, width: 50, borderRadius: 30 }}></View>
                        <View style={{ backgroundColor: 'red', height: 150, width: 30, marginLeft: -30 }}>
                            <Text style={{ fontSize: 15, fontWeight: '800' }}> D{'\n'} I{'\n'} S{'\n'} C{'\n'} O{'\n'} U{'\n'} N{'\n'} T</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 10, marginLeft: 30 }}>Thẻ giảm giá 25% cho{'\n'} đơn hàng từ 50 $</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 50, marginLeft: 5 }}>
                                        Ngày hết hạn:
                                    </Text>
                                    <Text style={{ fontSize: 15, marginTop: 0, marginLeft: 5 }}>
                                        30/12/2023
                                    </Text>
                                </View>
                                {coupon != 25 ? (<Pressable onPress={() => { dispath(setCoupon('25')) }} style={{ backgroundColor: 'blue', marginTop: 45, marginLeft: 20, width: 100, height: 40, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, fontWeight: '600', color: 'white' }}>Sử dụng</Text>
                                </Pressable>) : (<Pressable onPress={() => { dispath(setCoupon('0')) }} style={{ backgroundColor: 'blue', marginTop: 45, marginLeft: 20, width: 100, height: 40, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, fontWeight: '600', color: 'white' }}>Hủy</Text>
                                </Pressable>)}
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'greenyellow', width: 300, height: 150, marginTop: 30, borderRadius: 30, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: 'red', height: 150, width: 50, borderRadius: 30 }}></View>
                        <View style={{ backgroundColor: 'red', height: 150, width: 30, marginLeft: -30 }}>
                            <Text style={{ fontSize: 15, fontWeight: '800' }}> D{'\n'} I{'\n'} S{'\n'} C{'\n'} O{'\n'} U{'\n'} N{'\n'} T</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 10, marginLeft: 30 }}>Thẻ giảm giá 30% cho{'\n'} đơn hàng từ 50 $</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={{ fontSize: 15, fontWeight: '600', marginTop: 50, marginLeft: 5 }}>
                                        Ngày hết hạn:
                                    </Text>
                                    <Text style={{ fontSize: 15, marginTop: 0, marginLeft: 5 }}>
                                        30/12/2023
                                    </Text>
                                </View>
                                {coupon != 30 ? (<Pressable onPress={() => { dispath(setCoupon('30')) }} style={{ backgroundColor: 'blue', marginTop: 45, marginLeft: 20, width: 100, height: 40, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, fontWeight: '600', color: 'white' }}>Sử dụng</Text>
                                </Pressable>) : (<Pressable onPress={() => { dispath(setCoupon('0')) }} style={{ backgroundColor: 'blue', marginTop: 45, marginLeft: 20, width: 100, height: 40, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 15, fontWeight: '600', color: 'white' }}>Hủy</Text>
                                </Pressable>)}
                            </View>
                        </View>
                    </View>

                </View>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 43,
        marginLeft: 50
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 20,
    },
});