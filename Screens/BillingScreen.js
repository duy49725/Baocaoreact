import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { cleanCart, decrementQuantity, incrementQuantity } from '../CartReducer';
import { decrementQty, incrementQty } from '../ProductReducer';
import { AntDesign } from '@expo/vector-icons';
import { database ,athentication} from '../firebaseConfig';
import { arrayUnion, doc, getDoc, setDoc } from 'firebase/firestore';

const BillingScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const nav = useNavigation();
    const coupon = useSelector((state) => state.coupon.coupon);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const address = useSelector((state) => state.address.address);
    console.log(cart)
    const userUid = athentication.currentUser.uid;
    const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0)
    const placeOrder = async () => {
        navigation.navigate("OrderPlace");
        dispatch(cleanCart());
        console.log(userUid)
        const userDocRef = doc(database, 'users', `${userUid}`);
        const userDoc = await getDoc(userDocRef);
        const userData = userDoc.data();

        const orderNumber = userData.orders ? userData.orders.length + 1 : 1;

        const newOrder = {
        orderNumber,
        items: cart,
        pickUpDetail: {ItemTotal: (amount-amount*coupon/100).toFixed(3), 
                       Discount: {coupon}, 
                       selectedDate: formattedDate, 
                       Address: {address}, 
                       PickUpTime: {time},
                       NoOfDays: {day}}
        };

        await setDoc(
        userDocRef,
        {
            orders: arrayUnion(newOrder),
        },
        {
            merge: true,
        }
        );
    }
    let amount = 0;
    cart.forEach(element => {
        amount += element.price * element.quantity
    });
    const time = useSelector((state) => state.time.time);
    const date = useSelector((state) => state.date.date);
    const formattedDate = date instanceof Date ? date.toISOString() : '';
    const day = useSelector((state) => state.day.day);
    return (
        <>
           <SafeAreaView>
           <ScrollView>
               <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#53b175'}}>
                    <Pressable style={{ marginLeft:0,  width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign
                            style={{ margin: 10 }}
                            onPress={() => (
                                nav.navigate('Cart')
                            )}
                            name="left" size={40} color="white"
                        />
                    </Pressable>  
                    <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 80, color: 'white'}}>
                        Billing Details
                    </Text> 
               </View>
            <View style={{ marginHorizontal: 10 }}>
                <View
                    style={{
                        backgroundColor: "white",
                        borderRadius: 7,
                        padding: 10,
                        marginTop: 15,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text
                            style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                        >
                            Item Total
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: "400" }}>
                            ${total}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: 8,
                        }}
                    >
                        <Text
                            style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                        >
                            Itemquantity
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: "400" }}>
                            {cart.length}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: 8,
                        }}
                    >
                        <Text
                            style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                        >
                            Discount
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: "400" }}>
                            {coupon}%
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginVertical: 8,
                        }}
                    >
                        <Text
                            style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                        >
                            Delivery Fee | 1.2KM
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "400",
                                color: "#088F8F",
                            }}
                        >
                            FREE
                        </Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text
                            style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                        >
                            Free Delivery on Your order                            No
                        </Text>
                    </View>
                    
                    <View
                        style={{
                            borderColor: "gray",
                            height: 1,
                            borderWidth: 0.5,
                            marginTop: 10,
                        }}
                    />

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginVertical: 10,
                        }}
                    >
                        <Text
                            style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                        >
                            Address
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "400",
                                color: "#088F8F",
                            }}
                        >
                             {address}
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginVertical: 10,
                        }}
                    >
                        <Text
                            style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                        >
                            selected Date
                        </Text>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "400",
                                color: "#088F8F",
                            }}
                        >
                         {formattedDate}
                        </Text>
                    </View>


                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text
                            style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                        >
                            No Of Days
                        </Text>

                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "400",
                                color: "#088F8F",
                            }}
                        >
                            {day}
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginVertical: 10,
                        }}
                    >
                        <Text
                            style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                        >
                            selected Pick Up Time
                        </Text>

                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "400",
                                color: "#088F8F",
                            }}
                        >
                                 {time}
                        </Text>
                    </View>
                    <View
                        style={{
                            borderColor: "gray",
                            height: 1,
                            borderWidth: 0.5,
                            marginTop: 10,
                        }}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginVertical: 8,
                        }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            To Pay
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            ${(amount-amount*coupon/100).toFixed(3)}
                        </Text>
                    </View>
                </View>
            </View>
            </ScrollView>
           </SafeAreaView>
            <Pressable
                style={{
                    backgroundColor: "#53b175",
                    marginTop: "auto",
                    padding: 10,
                    marginBottom: 40,
                    margin: 15,
                    borderRadius: 7,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 60,
                    justifyContent: 'center'
                }}
            >
                <Pressable
                    onPress={placeOrder}
                    
                >
                    <Text style={{ fontSize: 25, fontWeight: "600", color: "white",  }}>
                        Place Order
                    </Text>
                </Pressable>
            </Pressable>
        </>

    )
}

export default BillingScreen;

const styles = StyleSheet.create({})