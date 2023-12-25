import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { myColors } from '../Utils/MyColors'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {

    const nav = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            nav.replace('OnboardScreen')
        }, 2000)
    }, [])

    return (
        <View style={{ backgroundColor: myColors.primary, flex: 1, justifyContent: 'center' }}>
           
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 15
            }}>
                <Image 
                    style={{height: 75, width: 65}}
                    source={require('../assets/Group.png')}
                />
                <View>
                    <Text style={{fontSize: 75, color: myColors.secondary}}>nectar</Text>
                    <Text style={{color:myColors.secondary, fontSize: 17, textAlign: 'center', letterSpacing: 5, top: -10}}>online groceries</Text>
                </View>
            </View>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({})