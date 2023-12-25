import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import MapView from 'react-native-maps';
const AboutScreen = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#53b175' }}>
        <Pressable style={{ marginLeft: 0, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
          <AntDesign
            style={{ margin: 10 }}
            onPress={() => (
              nav.goBack()
            )}
            name="left" size={40} color="white"
          />
        </Pressable>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 110, color: 'white' }}>
          About
        </Text>
      </View>
      <ScrollView style={{ marginBottom: 10 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 500, marginTop: 20 }}>Groceries Location</Text>
        <View style={{ alignSelf: 'center', marginTop: 20, borderWidth: 5, borderRadius: 5, borderColor: '#53b175' }}>
          <MapView
            style={{ width: 350, height: 450 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, borderWidth: 1, padding: 5, marginHorizontal: 10 }}>
            <Image style={{ width: 130, height: 120, marginLeft: 20, flex: 0.5 }} source={require('../assets/aboutimg.png')} />
            <Text style={{ flex: 0.5, marginLeft: 10 }}>A store that sells food and household supplies : supermarket</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, borderWidth: 1, padding: 5, marginHorizontal: 10 }}>
            <Image style={{ width: 130, height: 120, marginLeft: 20, flex: 0.5, marginTop: 10 }} source={require('../assets/instore.png')} />
            <Text style={{ flex: 0.5, marginLeft: 10 }}>A store that sells food and household supplies : supermarket</Text>
          </View>
        </View>
        <View style={{ marginTop: 20, borderWidth: 1, padding: 10, marginHorizontal: 10 }}>
          <Text style={{marginBottom: 5}}>Address Store: America</Text>
          <Text>Store description: WebSelected stores, lines and availability. Online minimum spend, delivery charge and a 40p bag charge may apply. Nectar online shopping, find fresh groceries, George clothing & home, insurance, & more delivered to your door. Save money. Live better.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AboutScreen;

const styles = StyleSheet.create({})