import { Pressable, StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground, Image } from 'react-native'
import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { addToAddresst, cleanaAddress, setAddress } from '../AddressReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

const Address = () => {
  const nav = useNavigation();
  const dispath = useDispatch();
  const address = useSelector((state) => state.address.address);
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState('We are loading your location');
  const [locationServiceEnabled, setlocationServiceEnabled] = useState(false);
  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);
  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        'Location service not enabled',
        'Please enable the location service', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
        { cancelable: false }
      );
    } else {
      setlocationServiceEnabled(enabled)
    }
  }

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        'Permission denied',
        'allow the app to use the location services', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
        { cancelable: false }
      );
    };
    const { coords } = await Location.getCurrentPositionAsync();
    console.log(coords)
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });
      console.log(response)
      for (let item of response) {
        let address = `${item.name}  ${item.region} ${item.subregion} ${item.street}`;
        setdisplayCurrentAddress(address);
      }
    }
  }

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
          Delivery Address
        </Text>
      </View>
        <Text style={{ fontSize: 20, fontWeight: 600, marginTop: 40 }}> Địa chỉ giao hàng hiện tại của bạn:</Text>
        {address.length > 0 ? (<View><Text>{address}</Text></View>) : (<View><Text>{displayCurrentAddress}</Text></View>)}
        <Text style={{ marginTop: 60, fontSize: 20, marginBottom: 10 }}>Bạn muốn giao đến nơi khác?</Text>
        <TextInput style={{ borderWidth: 1, borderRadius: 10, width: 300, height: 50, padding: 10 }}
          placeholder="Nhập địa chỉ giao hàng"
          value={data2}
          onChangeText={(val) => setdata2(val)}
        />
        <Button title="Cập nhật" onPress={(data) => { setdata(data2); (data2.length > 0) ? dispath(setAddress(data2)) : dispath(setAddress("")) }} />
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
    marginLeft: 20
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default Address;