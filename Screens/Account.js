import React from 'react'
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import { Feather, AntDesign, MaterialCommunityIcons, Ionicons, FontAwesome5, } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import{athentication} from '../firebaseConfig';



export default function Account() {
  const nav = useNavigation();
  const user = athentication.currentUser;
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topleft}>
          <Image source={require('../assets/avatarr.png')} style={{ width: 70, height: 70, marginTop: 80, marginLeft: 20, borderRadius: 27 }} ></Image>
        </View>
        <View style={styles.topright}>
          <Text style={{ marginTop: 90, marginLeft: 10, color: 'black', fontWeight: '500', fontSize: 20 }}>Người dùng</Text>
          <Text style={{ marginLeft: 10, color: '#7C7C7C' }}>{user.email}</Text>

        </View>
      </View>
      <Pressable onPress={() => nav.navigate('OrderHistoryScreen')} style={{ borderBottomWidth: 2, borderTopWidth: 2, borderColor: '#E2E2E2', alignItems: 'center', justifyContent: 'space-between', height: 55, marginTop: 20, flexDirection: 'row' }} >
        <View style={{ flexDirection: 'row' }}>
          <Feather name="shopping-bag" size={24} color="black" style={{ marginLeft: 24 }} />
          <Text style={{ marginLeft: 10, fontWeight: '500', fontSize: 18 }}>Order History</Text>
        </View>
        <View style={{}}>
          <AntDesign name="right" size={24} color="black" style={{ marginRight: 25 }} />
        </View>
      </Pressable>
      <Pressable onPress={() => nav.navigate('Mydetail')} style={{ borderBottomWidth: 2, borderColor: '#E2E2E2', alignItems: 'center', justifyContent: 'space-between', height: 55, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons name="card-account-details-outline" size={24} color="black" style={{ marginLeft: 24 }} />
          <Text style={{ marginLeft: 10, fontWeight: '500', fontSize: 18 }}>My Detail</Text>
        </View>
        <View style={{}}>
          <AntDesign name="right" size={24} color="black" style={{ marginRight: 25 }} />
        </View>
      </Pressable>
      <Pressable onPress={() => nav.navigate('Address')} style={{ borderBottomWidth: 2, borderColor: '#E2E2E2', alignItems: 'center', justifyContent: 'space-between', height: 55, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="location-outline" size={24} color="black" style={{ marginLeft: 24 }} />
          <Text style={{ marginLeft: 10, fontWeight: '500', fontSize: 18 }}>Delivery Address</Text>
        </View>
        <View style={{}}>
          <AntDesign name="right" size={24} color="black" style={{ marginRight: 25 }} />
        </View>
      </Pressable>
      <Pressable onPress={() => nav.navigate('Payment')} style={{ borderBottomWidth: 2, borderColor: '#E2E2E2', alignItems: 'center', justifyContent: 'space-between', height: 55, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome5 name="credit-card" size={24} color="black" style={{ marginLeft: 24 }} />
          <Text style={{ marginLeft: 10, fontWeight: '500', fontSize: 18 }}>Payment Method</Text>
        </View>
        <View style={{}}>
          <AntDesign name="right" size={24} color="black" style={{ marginRight: 25 }} />
        </View>
      </Pressable>
      <Pressable onPress={() => nav.navigate('Promocard')} style={{ borderBottomWidth: 2, borderColor: '#E2E2E2', alignItems: 'center', justifyContent: 'space-between', height: 55, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('../assets/PromoCardIcon.png')} style={{ marginLeft: 24 }} />
          <Text style={{ marginLeft: 10, fontWeight: '500', fontSize: 18 }}>Promo Card</Text>
        </View>
        <View style={{}}>
          <AntDesign name="right" size={24} color="black" style={{ marginRight: 25 }} />
        </View>
      </Pressable>
      <Pressable style={{ borderBottomWidth: 2, borderColor: '#E2E2E2', alignItems: 'center', justifyContent: 'space-between', height: 55, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="notifications-outline" size={24} color="black" style={{ marginLeft: 24 }} />
          <Text style={{ marginLeft: 10, fontWeight: '500', fontSize: 18 }}>Notification</Text>
        </View>
        <View style={{}}>
          <AntDesign name="right" size={24} color="black" style={{ marginRight: 25 }} />
        </View>
      </Pressable>
      <Pressable onPress={() => nav.navigate('HelpScreen')} style={{ borderBottomWidth: 2, borderColor: '#E2E2E2', alignItems: 'center', justifyContent: 'space-between', height: 55, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <Feather name="help-circle" size={24} color="black" style={{ marginLeft: 24 }} />
          <Text style={{ marginLeft: 10, fontWeight: '500', fontSize: 18 }}>Help</Text>
        </View>
        <View style={{}}>
          <AntDesign name="right" size={24} color="black" style={{ marginRight: 25 }} />
        </View>
      </Pressable>
      <Pressable onPress={() => nav.navigate('AboutScreen')} 
            style={{ borderBottomWidth: 2, borderColor: '#E2E2E2', alignItems: 'center', justifyContent: 'space-between', height: 55, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign name="exclamationcircleo" size={24} color="black" style={{ marginLeft: 24 }} />
          <Text style={{ marginLeft: 10, fontWeight: '500', fontSize: 18 }}>About</Text>
        </View>
        <View style={{}}>
          <AntDesign name="right" size={24} color="black" style={{ marginRight: 25 }} />
        </View>
      </Pressable>
      <Pressable 
       onPress={()=>{
        nav.navigate('Login')
       }}
        style={{ borderWidth: 2, borderColor: 'white', backgroundColor: '#F2F3F2', height: 70, width: 300, borderRadius: 19, alignSelf: 'center', marginTop: 30, alignItems: 'center', flexDirection: 'row' }}>
        <Feather name="log-out" size={24} color='#53B175' style={{ marginLeft: 15 }} />
        <Text style={{ color: '#53B175', fontSize: 18, fontWeight: '600', marginLeft: 75 }}>Log Out</Text>
      </Pressable>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flexDirection: 'row',
  },

  topright: {
    flex: 1,
  }

})