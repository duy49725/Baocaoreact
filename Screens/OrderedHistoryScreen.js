import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { database, athentication } from '../firebaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const OrderHistoryScreen = () => {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);
  const [userUid, setUserUid] = useState(null);
  const nav = useNavigation();
  useEffect(() => {
    // Lắng nghe sự thay đổi trạng thái đăng nhập của người dùng
    const unsubscribeAuth = athentication.onAuthStateChanged((user) => {
      if (user) {
        setUserUid(user.uid);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (userUid) {
      // Truy vấn dữ liệu từ Firestore
      const fetchOrders = async () => {
        const userDocRef = doc(database, 'users', userUid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          const userOrders = userData.orders || [];

          setOrders(userOrders);
          console.log('userOrders:', userOrders);
        }
      };

      fetchOrders();
    }
  }, [userUid]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
       <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#53b175', marginBottom: 20}}>
          <Pressable style={{ marginLeft:0,  width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
              <AntDesign
                  style={{ margin: 10 }}
                  onPress={() => (
                      nav.goBack()
                  )}
                  name="left" size={40} color="white"
              />
          </Pressable>  
          <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 80, color: 'white'}}>
              Order History
          </Text> 
      </View>

      {orders.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text>Your order history is empty</Text>
        </View>
      ) : (
        <View style={styles.orderContainer}>
          {orders.map((order, index) => (
            <View key={index} style={styles.orderItem}>
              <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 700}}>Order {index + 1}</Text>
              <View style={styles.itemContainer}>
                {order.items.map((item, itemIndex) => (
                  <View key={itemIndex} style={styles.item}>
                    <Text style={styles.itemText}>Item {itemIndex + 1}</Text>
                    <Text style={styles.itemText}>Item Name: {item.name}</Text>
                    <Text style={styles.itemText}>Item Price: ${item.price}</Text>
                    <Text style={styles.itemText}>Item Quantity: {item.quantity}</Text>
                    {/* Hiển thị các thông tin khác của mục */}
                  </View>
                ))}
              </View>
              <Text style={styles.orderText}>Pickup Address: {order.pickUpDetail.Address.address}</Text>
              <Text style={styles.orderText}>Discount: {order.pickUpDetail.Discount.coupon}</Text>
              <Text style={styles.orderText}>Item Total: {order.pickUpDetail.ItemTotal}</Text>
              <Text style={styles.orderText}>No of Days: {order.pickUpDetail.NoOfDays.day}</Text>
              <Text style={styles.orderText}>Pickup Time: {order.pickUpDetail.PickUpTime.time}</Text>
              <Text style={styles.orderText}>Selected Date: {order.pickUpDetail.selectedDate}</Text>
            </View>
          ))}
        </View>
      )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 10,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderContainer: {
    marginHorizontal: 10,
  },
  orderItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
  },
  orderText: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemContainer: {
    marginTop: 10,
  },
  item: {
    marginBottom: 10,
  },
  itemText: {
    fontSize: 14,
  },
});

export default OrderHistoryScreen;
