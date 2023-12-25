import { Pressable, StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import HomeIcon from '../Component/HomeIcon';
import HomeSearch from '../Component/HomeSearch';
import Slider from '../Component/Slider';
import ProductTitle from '../Component/ProductTitle';
import ProductsCarousel from '../Component/ProductsCarousel';
import { useDispatch, useSelector } from 'react-redux';
import GroceriesSlider from '../Component/GroceriesSlider';
import { FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { MaterialIcons } from '@expo/vector-icons';
import { getProducts } from '../ProductReducer';
import { myColors } from '../Utils/MyColors';
import { database } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { getBestSelling } from '../bestselling';

const HomeScreen = () => {
  const nav = useNavigation();
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState('We are loading your location');
  const [locationServiceEnabled, setlocationServiceEnabled] = useState(false);
  const country = useSelector((state) => state.country.country);
  const city = useSelector((state) => state.city.city);
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
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);
  const product = useSelector((state) => state.product.product)
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch();
  const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0)
  const total2 = cart.map((item2) => item2.quantity * item2.price).reduce((curr, prev) => curr + prev, 0)
  useEffect(() => {
    if (product.length > 0)
      return;
    const fetchProduct = async () => {
      const colRef = collection(database, "type")
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
      const colRef2 = collection(database, "type2")
      const docsSnap2 = await getDocs(colRef2);
      docsSnap2.forEach((doc) => {
        items.push(doc.data());
      });
      items?.map((services) => dispatch(getProducts(services)));
    };
    fetchProduct();
  }, [])

  const best = useSelector((state) => state.best.best)
  useEffect(() => {
    if (best.length > 0)
      return;
    const fetchProduct2 = async () => {
      const colRef2 = collection(database, "type2")
      const docsSnap2 = await getDocs(colRef2);
      docsSnap2.forEach((doc) => {
        items2.push(doc.data());
      });
      items2?.map((services) => dispatch(getBestSelling(services)));
    };
    fetchProduct2();
  }, [])


  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar backgroundColor='white' />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, paddingHorizontal: 20, paddingTop: 10 }}>
          <View style={{ gap: 20, paddingBottom: 20 }}>
            <HomeIcon />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <MaterialIcons name="location-on" size={24} color="black" />
              <View>
                <Text>{country} {city}</Text>
              </View>
            </View>
            <HomeSearch />
            <Slider />
            <ProductTitle title={'Exclusive Offer'} data={product} />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={product}
              renderItem={({ item, index }) =>
          
                  <ProductsCarousel item={item} />
               
              }
            />
            <ProductTitle title={'Best Selling'} data={product} />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={best}
              renderItem={({ item, index }) => <ProductsCarousel item={item} />}
            />
            <ProductTitle title={'Groceries'} data={product} />
            <GroceriesSlider />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={product}
              renderItem={({ item, index }) => <ProductsCarousel item={item} />}
            />
          </View>
        </ScrollView>
        {
          total === 0 ?
            (
              null
            ) : (
              <Pressable style={{ backgroundColor: myColors.primary, borderRadius: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginBottom: 20, padding: 10 }}>
                <View>
                  <Text style={{ fontSize: 14, fontWeight: "600", color: 'white' }}>{cart.length} items    |   ${total}</Text>
                  <Text style={{ fontSize: 17, fontWeight: "400", color: 'white', marginVertical: 6 }}>extra charge might apply</Text>
                </View>
                <Pressable
                  onPress={() => nav.navigate('Cart')}
                >
                  <Text style={{ fontSize: 17, fontWeight: "600", color: 'white' }}>Open Cart</Text>
                </Pressable>
              </Pressable>
            )
        }
      </SafeAreaView>
    </>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})