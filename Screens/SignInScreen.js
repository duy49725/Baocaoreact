import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { myColors } from '../Utils/MyColors';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SignInScreen = () => {
    const nav = useNavigation()
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <StatusBar backgroundColor='light' />
            <Image source={require('../assets/MaskGroup.png')} />
            <View style={{ marginHorizontal: 15 }}>
                <View>
                    <Text style={{ fontSize: 30 }}>Get your groceries</Text>
                    <Text style={{ fontSize: 30 }}>with nectar</Text>
                    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: "#E3E3E3", marginTop: 20, }}>
                        <Image style={{}} source={require('../assets/Rectangle11.png')}/>
                        <TextInput keyboardType='number-pad' placeholder='+84'/>
                    </View>
                    <Text style={{ marginTop: 30, color: 'grey', alignSelf: 'center', fontSize: 17 }}>Or connect with social media</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            nav.navigate('SignInScreen')
                        }}
                        activeOpacity={0.8}
                        style={{ marginTop: 30, backgroundColor: '#5383EC', borderRadius: 18, height: 70, justifyContent: 'center', alignItems: 'center', width: 350, flexDirection: 'row' }}>
                        <AntDesign style={{ left: -50 }} name="google" size={24} color="white" />
                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '700' }}>Continue with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            nav.navigate('PhoneScreen')
                        }}
                        activeOpacity={0.8}
                        style={{ marginTop: 30, backgroundColor: '#4A66AC', borderRadius: 18, height: 70, justifyContent: 'center', alignItems: 'center', width: 350, flexDirection: 'row' }}>
                        <FontAwesome style={{ left: -50 }} name="facebook-f" size={24} color="white" />
                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '700', alignSelf: 'center' }}>Continue with Facebook</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({})