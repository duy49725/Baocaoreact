import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; 
import { myColors } from '../Utils/MyColors';
import Checkbox from '../Component/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../ProductReducer';
import { useNavigation } from '@react-navigation/native';

function Filter() {
    const nav= useNavigation();
    const [isEggs, setIsEggs] = useState(false);
    const [isNoodlesPasta, setIsNoodlesPasta] = useState(false);
    const [isChipsCrisps, setIsChipsCrisps] = useState(false);
    const [items, setItems] = useState([]);
  const product = useSelector((state) => state.product.product)
    const dispatch = useDispatch();

    let title2="";


    if(isChipsCrisps&&isEggs) title2='all'
    else if(isEggs) title2='Product-Detail'
    else if(isChipsCrisps) title2='Product-Detail2'
    else title2='all'

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
    console.log(product)

    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.container}>
                <Text style={styles.title}>Categories</Text>
                <Checkbox
                    text="Product-Detail"
                    isChecked={isEggs}
                    onPress={() => {
                        setIsEggs(!isEggs);
                    }}
                    style={styles.checkbox}
                />
                <Checkbox
                    text="Product-Detail2"
                    isChecked={isChipsCrisps}
                    onPress={() => {
                        setIsChipsCrisps(!isChipsCrisps);
                    }}
                    style={styles.checkbox}
                />
            </View>

            <View style={{ flex: 0.9, justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={() => (
                        nav.navigate('FruitesScreen', {
                          check: "1",
                          title: title2,
                          data: product
                        })
                      )}
                    activeOpacity={0.8}
                    style={{ backgroundColor: myColors.primary, borderRadius: 18, height: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: '700' }}>Apply Filter</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safearea: { flex: 1, paddingHorizontal: 20 },
    container: {
        marginTop: 30,
        marginLeft: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: '600'
    },
    checkbox: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
});

export default Filter;