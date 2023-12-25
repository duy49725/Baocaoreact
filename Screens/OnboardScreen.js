import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { myColors } from '../Utils/MyColors';
import { useNavigation } from '@react-navigation/native';

const OnboardScreen = () => {
    const nav = useNavigation()
    return (
        <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} source={require('../assets/onBoarding.png')}>
            <StatusBar />
            <View style={{ flex: 0.8,justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ height: 75, width: 65, alignSelf: 'center' }}
                    source={require('../assets/Group.png')}
                />
                <Text style={{ color: 'white', fontSize: 60 }}>Welcome </Text>
                <Text style={{ color: 'white', fontSize: 60 }}>to our store</Text>
                <Text style={{ color: 'white', fontSize: 20 }}>Get your groceries in as fast as one hour</Text>
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    onPress={()=>{
                        nav.navigate('SignInScreen')
                    }}
                    activeOpacity={0.8}
                    style={{ backgroundColor: myColors.primary, borderRadius: 18, height: 70, justifyContent: 'center', alignItems: 'center', width: 350 }}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: '700' }}>Get Started</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    )
}

export default OnboardScreen;

const styles = StyleSheet.create({})