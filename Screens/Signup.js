import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { myColors } from '../Utils/MyColors';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { database,athentication } from '../firebaseConfig';

const Signup = () => {
    const [isVisible, setisVisible] = useState(true)
    const nav = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const register = () =>{
        if(email === "" || password === "" || username === ""){
            Alert.alert(
                'Invalid Detail', 
                'Please fill all detail', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
        }
        createUserWithEmailAndPassword(athentication,email,password).then((userCredential) => {
            console.log("User credential", userCredential);
            const user = userCredential._tokenResponse.email
            const myUserUid = athentication.currentUser.uid
            setDoc(doc(database,"users", `${myUserUid}`),{
                email: user,
                username: username
            })
        })
        nav.navigate('Login')
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secondary }}>
            <StatusBar />
            <ScrollView style={{ flex: 1, paddingTop: 30 }}>
                <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                    <Text style={{ color: myColors.third, fontSize: 24, fontWeight: '500' }}>Sign Up</Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: 'grey',
                            marginTop: 10
                        }}
                    >Enter your credentials to continue
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'grey', marginTop: 40 }}>Username</Text>
                    <TextInput
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        keyboardType='name-phone-pad'
                        style={{ borderColor: '#E3E3E3', borderBottomWidth: 2, fontSize: 16, marginTop: 15 }}
                    />
                    
                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'grey', marginTop: 30 }}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType='email-address'
                        style={{ borderColor: '#E3E3E3', borderBottomWidth: 2, fontSize: 16, marginTop: 15 }}
                    />

                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'grey', marginTop: 30 }}>Password</Text>
                    <View style={{
                        borderColor: '#E3E3E3', 
                        borderBottomWidth: 2,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={isVisible}
                            maxLength={6}
                            keyboardType='ascii-capable'
                            style={{ fontSize: 16, marginTop: 15, flex: 0.9}}
                        />
                        <Ionicons onPress={() => {
                            setisVisible(!isVisible)
                        }} name={isVisible == true ?"eye-off-outline" : "eye-outline"}size={24} color="black" />
                    </View>
                    <Text numberOfLines={2} style={{fontSize: 16,fontWeight: '400', marginTop: 15, letterSpacing: 0.7, lineHeight: 25, width: '95%', opacity: 0.7}}>
                        By continuing you agree to our Terms of Service and Privacy Policy
                    </Text>
                    <TouchableOpacity 
                        onPress={register}
                        style={{backgroundColor: myColors.primary, marginTop: 30, height: 70, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 19, color: myColors.secondary, fontWeight: '500'}}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, gap: 5}}>
                        <Text style={{fontSize: 16}}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity 
                            onPress={()=>{
                                nav.navigate('Login')
                            }}
                        >
                            <Text style={{fontSize: 15, color: myColors.primary, fontWeight: '600'}}>
                            Login Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Signup;

const styles = StyleSheet.create({})