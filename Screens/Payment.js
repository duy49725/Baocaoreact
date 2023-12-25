import { Pressable, StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground, Image } from 'react-native'
import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Fontisto, Entypo, AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import PaymentReduces, { setPayment } from '../PaymentReduces';

const Payment = () => {
  const nav = useNavigation();
  const [modalVisibile, setModalVisibile] = useState(false);
  const dispath = useDispatch();
  const payment = useSelector((state) => state.payment.payment);

  const [data, setdata] = useState('');
  const [data2, setdata2] = useState('');
  return (
    <ImageBackground source={require('../assets/Maskg.png')} style={{ flex: 1, alignItems: 'center', backgroundColor: '#FDFDFD' }} >
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
        <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 60, color: 'white' }}>
          Payment Method
        </Text>
      </View>
      <View>
        <Text style={{ marginLeft: -20, marginTop: 20, fontSize: 20, fontWeight: '600' }}>Chọn phương thức thanh toán :</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Pressable onPress={() => dispath(setPayment('1'))} style={{ borderRadius: 30, borderWidth: 2, width: 300, height: 70, marginTop: 30, flexDirection: 'row' }}>
          <View style={{ height: 70, width: 70, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: -3 }}>
            <Fontisto name="visa" size={24} color="black" />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: 50 }}>
            <Text style={{ fontWeight: '600' }}>
              VISA
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
            {payment == 1 ? (<MaterialIcons style={{ marginRight: 20 }} name="circle" size={24} color="black" />) : (<Entypo style={{ marginRight: 20 }} name="circle" size={24} color="black" />)}
          </View>
        </Pressable>

        <Pressable onPress={() => dispath(setPayment('2'))} style={{ borderRadius: 30, borderWidth: 2, width: 300, height: 70, marginTop: 30, flexDirection: 'row' }}>
          <View style={{ height: 70, width: 70, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: -3 }}>
            <AntDesign name="creditcard" size={24} color="black" />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: 100 }}>
            <Text style={{ fontWeight: '600' }}>
              CREDIT CARD
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
            {payment == 2 ? (<MaterialIcons style={{ marginRight: 20 }} name="circle" size={24} color="black" />) : (<Entypo style={{ marginRight: 20 }} name="circle" size={24} color="black" />)}
          </View>
        </Pressable>

        <Pressable onPress={() => dispath(setPayment('3'))} style={{ borderRadius: 30, borderWidth: 2, width: 300, height: 70, marginTop: 30, flexDirection: 'row' }}>
          <View style={{ height: 70, width: 70, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: -3 }}>
            <Entypo name="paypal" size={24} color="black" />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: 60 }}>
            <Text style={{ fontWeight: '600' }}>
              PAYPAL
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
            {payment == 3 ? (<MaterialIcons style={{ marginRight: 20 }} name="circle" size={24} color="black" />) : (<Entypo style={{ marginRight: 20 }} name="circle" size={24} color="black" />)}
          </View>
        </Pressable>

        <Pressable onPress={() => dispath(setPayment('4'))} style={{ borderRadius: 30, borderWidth: 2, width: 300, height: 70, marginTop: 30, flexDirection: 'row' }}>
          <View style={{ height: 70, width: 70, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: -3 }}>
            <FontAwesome5 name="money-bill-wave" size={24} color="black" />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: 150 }}>
            <Text style={{ fontWeight: '600' }}>
              THANH TOÁN KHI{'\n'}NHẬN HÀNG
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 1 }}>
            {payment == 4 ? (<MaterialIcons style={{ marginRight: 20 }} name="circle" size={24} color="black" />) : (<Entypo style={{ marginRight: 20 }} name="circle" size={24} color="black" />)}
          </View>
        </Pressable>

        <Pressable onPress={() => nav.goBack()} style={{ borderRadius: 30, borderWidth: 2, width: 200, height: 50, marginTop: 50, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'greenyellow' }}>
          <Text style={{ fontWeight: '600' }}>
            XÁC NHẬN
          </Text>
        </Pressable>

      </View>


    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 43,
    marginLeft: 60
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
export default Payment;