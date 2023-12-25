import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import SearchResult from '../Component/SearchResult';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../ProductReducer';
import { database } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const SearchScreen = () => {
    const [input, setInput] = useState("");
    const nav = useNavigation();
    const [items, setItems] = useState([]);
    const product = useSelector((state) => state.product.product)
      const dispatch = useDispatch();
      useEffect(() => {
          if (product.length > 0)
              return;
          const fetchProduct = async () => {
             const colRef = collection(database, "type")
             const docsSnap = await getDocs(colRef);
             docsSnap.forEach((doc) => {
                  items.push(doc.data());
             });
             items?.map((services) => dispatch(getProducts(services)));
          };
          fetchProduct();
      }, [])
    const dispath = useDispatch();
    const storeData = useSelector((state) => state.cart.cart);
    return (
        <SafeAreaView>
            <View style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
            >
                <View style={{
                    height: 50,
                    marginLeft: 10,
                    width: '85%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderColor: '#FFC72C',
                    borderWidth: 4,
                    borderRadius: 10,
                }}>
                    <TextInput style={{marginLeft: 10}} value={input} onChangeText={(text) => setInput(text)} placeholder='Enter Your Product You Want' />
                    <Feather style = {{marginRight: 10}}name="search" size={24} color="black" />
                </View>
                <Ionicons 
                    onPress={()=>{
                        nav.navigate('Filter')
                    }}
                    style={{alignSelf: 'center', marginRight: 5}} name="md-filter" size={30} color="black" />
            </View>
            <SearchResult data={product} input={input} setInput={setInput} />
        </SafeAreaView>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({})