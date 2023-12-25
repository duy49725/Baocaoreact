import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import Detail from './Screens/Detail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './Screens/Cart';
import Favourite from './Screens/Favourite';
import Explore from './Screens/Explore';
import FruitesScreen from './Screens/FruitesScreen';
import Filter from './Screens/Filter';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Account from './Screens/Account';
import { myColors } from './Utils/MyColors';
import SearchScreen from './Screens/SearchScreen';
import SearchScreenHome from './Screens/SearchScreenHome';
import PhoneScreen from './Screens/PhoneScreen';
import OrderPlace from './Screens/OrderPlace';
import OtpScreen from './Screens/OtpScreen';
import SelectMethodScreen from './Screens/SelectMethodScreen';
import Splash from './Screens/Splash';
import OnboardScreen from './Screens/OnboardScreen';
import SignInScreen from './Screens/SignInScreen';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import HelpScreen from './Screens/HelpScreen';
import Address from './Screens/Address';
import Promocard from './Screens/Promocard';
import Payment from './Screens/Payment';
import Mydetail from './Screens/Mydetail';
import Promocard2 from './Screens/Coupon2';
import PickUpScreen from './Screens/PickUpScreen';
import BillingScreen from './Screens/BillingScreen';
import OrderHistoryScreen from './Screens/OrderedHistoryScreen';
import AboutScreen from './Screens/AboutScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    function BottomTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarActiveTintColor:  '#53b175',
                        tabBarLabel: "Shop",
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Fontisto name="shopping-store" size={24} color={myColors.primary} />

                            ) : (
                                <Fontisto name="shopping-store" size={24} color="black" />
                            ),
                    }}
                />
                <Tab.Screen
                    name="Explore"
                    component={Explore}
                    options={{
                        tabBarActiveTintColor:  '#53b175',
                        tabBarLabel: "Explore", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <MaterialCommunityIcons name="store-search" size={24} color={myColors.primary} />
                            ) : (
                                <MaterialCommunityIcons name="store-search" size={24} color="black" />)
                        }}
                />
                <Tab.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        tabBarActiveTintColor:  '#53b175',
                        tabBarLabel: "Cart", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <FontAwesome5 name="shopping-cart" size={24} color={myColors.primary} />
                        ) : (
                            <FontAwesome5 name="shopping-cart" size={24} color="black" />
                        )
                    }}
                />
                <Tab.Screen
                    name="Favourite"
                    component={Favourite}
                    options={{
                        tabBarActiveTintColor:  '#53b175',
                        tabBarLabel: "Favourite", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <AntDesign name="heart" size={24} color={myColors.primary} />
                        ) : (
                            <AntDesign name="heart" size={24} color="black" />
                        )
                    }}
                />

                <Tab.Screen
                    name="Account"
                    component={Account}
                    options={{
                        tabBarActiveTintColor:  '#53b175',
                        tabBarLabel: "Account", headerShown: false, tabBarIcon: ({ focused }) => focused ? (
                            <Ionicons name="person" size={24} color={myColors.primary}/>
                        ) : (
                            <Ionicons name="person" size={24} color="black" />
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Splash'
                screenOptions={{
                    headerShown: false,
                    headerTitleAlign: 'center'
                }}
            >
                
                <Stack.Screen name="main" component={BottomTabs} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
                <Stack.Screen name="SearchScreenHome" component={SearchScreenHome} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="PickUpScreen" component={PickUpScreen} />
                <Stack.Screen name="Account" component={Account} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="BillingScreen" component={BillingScreen} />
                <Stack.Screen name="Favourite" component={Favourite} />
                <Stack.Screen name="PhoneScreen" component={PhoneScreen} />
                <Stack.Screen name="OrderPlace" component={OrderPlace} />
                <Stack.Screen name="OtpScreen" component={OtpScreen} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={Signup} />
                <Stack.Screen name="Explore" component={Explore} />
                <Stack.Screen name="FruitesScreen" component={FruitesScreen} />
                <Stack.Screen name="Filter" component={Filter} options={{headerShown: true}}/>
                <Stack.Screen name="SelectMethodScreen" component={SelectMethodScreen} />
                <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="HelpScreen" component={HelpScreen} />
                <Stack.Screen name="Address" component={Address} />
                <Stack.Screen name="Promocard" component={Promocard} />
                <Stack.Screen name="Payment" component={Payment} />
                <Stack.Screen name="Mydetail" component={Mydetail}/>
                <Stack.Screen name="Promocard2" component={Promocard2}/>
                <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen}/>
                <Stack.Screen name="AboutScreen" component={AboutScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;

const styles = StyleSheet.create({})