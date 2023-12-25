import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { myColors } from '../Utils/MyColors';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { athentication } from '../firebaseConfig';

const Login = () => {
  const nav = useNavigation();
  const [isVisible, setisVisible] = useState(true)
  const [LoginCrendentials, setLoginCrendentials] = useState({
    email: '',
    password: '',
  })
  const {email, password} = LoginCrendentials

  const loginUser=()=>{
    signInWithEmailAndPassword(athentication, email,password).then((val) => {
        nav.replace('main')
    }).catch((err)=>{
        Alert.alert(err.message)
    })
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secondary }}>
       <ScrollView style={{ flex: 1, paddingTop: 30 }}>
                <Image style={{ alignSelf: 'center' }} source={require('../assets/Group(1).png')} />
                <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                    <Text style={{ color: myColors.third, fontSize: 24, fontWeight: '500' }}>Login</Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: 'grey',
                            marginTop: 10
                        }}
                    >Enter your email and password
                    </Text>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: 'grey', marginTop: 40 }}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={(val) => {
                            setLoginCrendentials({...LoginCrendentials, email: val})
                        }}
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
                            onChangeText={(val) => {
                                setLoginCrendentials({...LoginCrendentials, password: val})
                            }}
                            secureTextEntry={isVisible}
                            maxLength={6}
                            keyboardType='ascii-capable'
                            style={{ fontSize: 16, marginTop: 15, flex: 0.9}}
                        />
                        <Ionicons onPress={() => {
                            setisVisible(!isVisible)
                        }} name={isVisible == true ?"eye-off-outline" : "eye-outline"}size={24} color="black" />
                    </View>
                    <Text numberOfLines={2} style={{fontSize: 16,fontWeight: '400', marginTop: 15, width: '95%', textAlign:'right'}}>
                       Forgot Password?
                    </Text>
                    <TouchableOpacity 
                        onPress={loginUser}
                        style={{backgroundColor: myColors.primary, marginTop: 30, height: 70, borderRadius: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 19, color: myColors.secondary, fontWeight: '500'}}>
                           Log in
                        </Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, gap: 5}}>
                        <Text style={{fontSize: 16}}>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity 
                            onPress={() => {
                                nav.navigate('SignUp')
                            }}
                        >
                            <Text style={{fontSize: 15, color: myColors.primary, fontWeight: '600'}}>
                            Signup
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}

export default Login;

const styles = StyleSheet.create({})