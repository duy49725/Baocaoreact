import { FlatList, Pressable, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { myColors } from '../Utils/MyColors';
import { responsiveHeight, responsiveWidth, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { BottomModal, ModalButton, ModalContent, ModalFooter, ModalTitle, SlideAnimation } from 'react-native-modals';
import { cleanCart, decrementQuantity, incrementQuantity, removeFromCart } from '../CartReducer';
import  { setPayment } from '../PaymentReduces';
import { doc, setDoc } from 'firebase/firestore';
import{athentication,database} from '../firebaseConfig';


const Cart = () => {
    const address = useSelector((state) => state.address.address);
    const nav = useNavigation();
    const route = useRoute();
    const [modalVisibile, setModalVisibile] = useState(false);
    const payment = useSelector((state) => state.payment.payment);
    const coupon = useSelector((state) => state.coupon.coupon);
    const dispath = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    let amount = 0;
    cart.forEach(element => {
        amount += element.price * element.quantity
    });
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, backgroundColor: 'white', gap: 15 }}>
            <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '500' }}>My Cart</Text>
            <View style={{ flex: 0.95 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={cart} renderItem={({ item, index }) => (
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
                            <View style={{ flex: 0.7, paddingHorizontal: 10, paddingVertical: 20 }}>
                                <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 20, fontWeight: '600' }}>{item.name}</Text>
                                    <AntDesign name="close" size={25} color="grey"
                                        onPress={() => {
                                            dispath(removeFromCart(item))
                                        }}
                                    />
                                </View>
                                <Text style={{ fontSize: 17, color: 'grey', marginTop: 5 }}>{item.pieces}</Text>
                                <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 10 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                        <AntDesign
                                            onPress={() => {
                                                dispath(decrementQuantity(item))

                                            }}
                                            name="minuscircleo" size={28} color={myColors.primary} />
                                        <Text style={{ fontSize: 20, fontWeight: '600' }}>{item.quantity}</Text>
                                        <AntDesign
                                            onPress={() => {
                                                if (item.quantity == 7) {

                                                } else {
                                                    dispath(incrementQuantity(item))
                                                }
                                            }}
                                            name="pluscircleo" size={28} color={myColors.primary} />
                                    </View>
                                    <Text style={{ fontSize: 22, fontWeight: '600' }}>${item.quantity * item.price}</Text>
                                </View>
                            </View>
                        </View>
                    )} />
            </View>
            <View style={{ justifyContent: 'flex-end'}}>
                <TouchableOpacity
                    onPress={() => {
                        setModalVisibile(!modalVisibile)
                    }}
                    activeOpacity={0.8}
                    style={{ backgroundColor: myColors.primary, borderRadius: 18, height: 70, justifyContent: 'center', alignItems: 'center' }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 40 }}>
                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '700' }}>
                            Go to CheckOut
                        </Text>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: 'white' }}>${amount}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <BottomModal
                swipeThreshold={200}
                onBackdropPress={() => setModalVisibile(!modalVisibile)}
                swipeDirection={['up', 'down']}
                footer={<ModalFooter>
                    <ModalButton
                        textStyle={{color: 'white', fontSize:22}}
                        text='Continue'
                        style={{ margin: 20, backgroundColor: myColors.primary, borderRadius: 15}}
                        onPress={()=>{
                            nav.navigate('BillingScreen')
                            setModalVisibile(!modalVisibile)
                        }}
                    />
                </ModalFooter>
                }
                modalTitle={<ModalTitle title='Check out'></ModalTitle>}
                modalAnimation={new SlideAnimation({
                    slideFrom: "bottom",
                })}
                onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
                visible={modalVisibile}
                onTouchOutside={() => setModalVisibile(!modalVisibile)}
            >
                <ModalContent style={{ width: "100%", height: 350 }}>
                    <View>
                        <Pressable
                            onPress={()=>{
                                nav.navigate('PickUpScreen')
                                setModalVisibile(!modalVisibile)
                            }}
                        >
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', alignItems:'center', marginTop: 20, borderBottomWidth: 1, paddingBottom: 20, borderColor: '#E3E3E3'}}>
                                <View>
                                    <Text style={{fontSize: 23, color: 'grey'}}>Delivery</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                {address.length >0 ? (<View style={{ width: 200}}><Text>{address}</Text></View>):(<View><Text>Nhập địa chỉ hoặc {'\n'}chờ load địa chỉ của bạn</Text></View>)}
                                    <AntDesign style={{marginLeft: 10}}name="right" size={24} color="black" />
                                </View>
                            </View>
                        </Pressable>
                        <Pressable>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', alignItems:'center', marginTop: 20, borderBottomWidth: 1, paddingBottom: 20, borderColor: '#E3E3E3'}}>
                                <Text style={{fontSize: 23, color: 'grey'}}>Payment</Text>
                                <Pressable onPress={()=> {nav.navigate('Payment');setModalVisibile(!modalVisibile)}} style={{flexDirection: 'row', alignItems: 'center'}}>
                                    {payment==1 ?(<Text style={{fontWeight:'600', fontSize: 18}}>VISA</Text>):(payment==2?(<Text style={{fontWeight:'600', fontSize: 18}}>CREDIT CARD</Text>):(payment==3 ?(<Text style={{fontWeight:'600', fontSize: 18}}>PAYPAL</Text>):(payment==4?(<Text style={{fontWeight:'600', fontSize: 18}}>Thanh toán khi{'\n'}nhận hàng</Text>):(<Text style={{fontWeight:'600', fontSize: 18}}>Chọn phương thức</Text>))))}
                                    <AntDesign style={{marginLeft: 10}}name="right" size={24} color="black" />
                                </Pressable>
                            </View>
                        </Pressable>
                        <Pressable  >
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', alignItems:'center', marginTop: 20, borderBottomWidth: 1, paddingBottom: 20, borderColor: '#E3E3E3'}}>
                                <Text style={{fontSize: 23, color: 'grey'}}>Promo Code</Text>
                                <Pressable onPress={()=> {nav.navigate('Promocard2');setModalVisibile(!modalVisibile)}} style={{flexDirection: 'row', alignItems: 'center'}}>
                                    {coupon != 0? (<Text style={{fontWeight:'600', fontSize: 18}}>Giảm giá {coupon}%</Text>):<Text style={{fontWeight:'600', fontSize: 18}}>Pick discount</Text>}
                                    <AntDesign style={{marginLeft: 10}}name="right" size={24} color="black" />
                                </Pressable>
                            </View>
                        </Pressable>
                        <Pressable>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', alignItems:'center', marginTop: 20, borderBottomWidth: 1, paddingBottom: 20, borderColor: '#E3E3E3'}}>
                                <Text style={{fontSize: 23, color: 'grey'}}>Total Cost</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    {coupon!=0 ? (<Text style={{fontWeight:'600', fontSize: 18}}>${amount.toFixed(3)} ={'>'} ${(amount-amount*coupon/100).toFixed(3)}</Text>):(<Text style={{fontWeight:'600', fontSize: 18}}>${amount}</Text>)}
                                    <AntDesign style={{marginLeft: 10}}name="right" size={24} color="black" />
                                </View>
                            </View>
                        </Pressable>
                        <Pressable>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-between', alignItems:'center', marginTop: 20}}>
                                <Text style={{fontSize: 18, color: 'grey'}}>By placing an order you agree to our <Text style={{fontWeight:'bold', color: 'black'}}>Terms</Text> And <Text style={{fontWeight:'bold', color: 'black'}}>Conditions</Text></Text>
                            </View>
                        </Pressable>
                    </View>
                </ModalContent>
            </BottomModal>
        </SafeAreaView>
    )
}

export default Cart;

const styles = StyleSheet.create({})