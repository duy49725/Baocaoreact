import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { myColors } from '../Utils/MyColors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
    const nav = useNavigation();
    return (
        <SafeAreaView style={{ paddingHorizontal: 20, flex: 1}}>
            <View style={{flex: 0.9}}>
                <AntDesign
                    style={{ marginTop: 10 }}
                    onPress={() => (
                        nav.goBack()
                    )}
                    name="left" size={30} color="black"
                />
                <View style={{ marginTop: 50 }}>
                    <Text style={{ marginBottom: 40, fontSize: 30 }}>Enter Your 4-digit code</Text>
                    <Text style={{ color: 'grey' }}>Code</Text>
                    <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: "#E3E3E3", marginTop: 20, }}>
                        <TextInput style={{fontSize: 30}} keyboardType='number-pad' placeholder=' - - - - ' />
                    </View>
                </View>
            </View>
            <View style={{ justifyContent: 'flex-end' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ color: myColors.primary }}>Resend Code</Text>
                    <Pressable style={{ backgroundColor: myColors.primary, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign
                            style={{ margin: 10 }}
                            onPress={() => (
                                nav.navigate('SelectMethodScreen')
                            )}
                            name="right" size={30} color="white"
                        />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OtpScreen;

const styles = StyleSheet.create({})