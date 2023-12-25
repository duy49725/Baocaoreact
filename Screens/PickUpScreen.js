import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {addToAddresst, cleanaAddress, setAddress} from '../AddressReducer';
import { setTime } from '../timeReducer';
import { setDate } from '../DateReducer';
import { setDay } from '../NoOfDayReducer';

const PickUpScreen = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [enterAddress, setEnterAddress] = useState();
  const [delivery, setDelivery] = useState([])
  const dispath = useDispatch();
  const address = useSelector((state) => state.address.address);
  const cart = useSelector((state) => state.cart.cart);
  const navigation = useNavigation();
  const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0)
  const [selectedTime, setSelectedTime] = useState([]);
  const time = useSelector((state) => state.time.time);
  const handleAddressChange = (text) => {
    setEnterAddress(text);
    dispath(setAddress(text));
  };
  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    dispath(setTime(time));
  };
  const handleDateSelection = (date) => {
    setSelectedDate(date);
    dispath(setDate(date));
  };
  const handleDaySelection = (day) => {
    setDelivery(day);
    dispath(setDay(day));
  };
  const deliveryTime = [
    {
      id: "0",
      name: "2-3 Days",
    },
    {
      id: "1",
      name: "3-4 Days",
    },
    {
      id: "2",
      name: "4-5 Days",
    },
    {
      id: "3",
      name: "5-6 Days",
    },
    {
      id: "4",
      name: "Tommorrow",
    },
  ];

  const times = [
    {
      id: "0",
      time: "11:00 PM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "1:00 PM",
    },
    {
      id: "2",
      time: "2:00 PM",
    },
    {
      id: "4",
      time: "3:00 PM",
    },
    {
      id: "5",
      time: "4:00 PM",
    },
  ];

  const proceedTocart = () => {
    if(!selectedDate || !selectedTime || !delivery){
      Alert.alert(
        'Emty or Invalid', 
        'Please select all the fields', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    if(selectedDate && selectedTime && delivery && enterAddress){
      navigation.navigate('Cart', {
        pickUpDate: selectedDate,
        selectedTime: selectedTime,
        no_Of_days: delivery,
        enterAddress: enterAddress
      })
    }
  }
  return (
    <>
      <SafeAreaView>
        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>Enter Address</Text>
        <TextInput onChangeText={handleAddressChange} style={{ padding: 40, borderColor: "gray", borderWidth: 0.7, paddingVertical: 80, borderRadius: 9, margin: 10 }} />
        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>Pick up date</Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date('2023-12-1')}
          endDate={new Date('2023-12-31')}
          initialSelectedDate={new Date('2020-08-22')}
          onSelectedDateChange={(date) => handleDateSelection(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#53b175"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />
        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>Select time</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {
            times.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => handleTimeSelection(item.time)}
                style={
                  selectedTime.includes(item.time)
                    ? {
                      margin: 10, borderRadius: 7, padding: 15, borderColor: '#53b175', borderWidth: 0.7
                    }
                    : {
                      margin: 10, borderRadius: 7, padding: 15, borderColor: 'gray', borderWidth: 0.7
                    }
                }
              >
                <Text>{item.time}</Text>
              </Pressable>
            ))
          }
        </ScrollView>
        <Text style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 10 }}>Select time</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            deliveryTime.map((item, i) => (
              <Pressable
                style={
                  delivery.includes(item.name)
                    ? {
                      margin: 10, borderRadius: 7, padding: 15, borderColor: '#53b175', borderWidth: 0.7
                    }
                    : {
                      margin: 10, borderRadius: 7, padding: 15, borderColor: 'gray', borderWidth: 0.7
                    }
                }
                onPress={() => handleDaySelection(item.name)}
                key={i}>
                <Text>{item.name}</Text>
              </Pressable>
            ))
          }
        </ScrollView>
      </SafeAreaView>
      <Pressable style={{marginTop:'auto', backgroundColor: "#53b175", padding: 10, marginBottom: 40, margin: 15, borderRadius: 7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontSize: 14, fontWeight: "600", color: 'white' }}>{cart.length} items    |   ${total}</Text>
          <Text style={{ fontSize: 17, fontWeight: "400", color: 'white', marginVertical: 6 }}>extra charge might apply</Text>
        </View>
        <Pressable
          onPress={() => proceedTocart()}
          
        >
          <Text style={{ fontSize: 17, fontWeight: "600", color: 'white' }}>Proceed to Cart</Text>
        </Pressable>
      </Pressable>
    </>
  )
}

export default PickUpScreen;

const styles = StyleSheet.create({})