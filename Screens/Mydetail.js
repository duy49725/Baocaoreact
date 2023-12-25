import { Pressable, StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground, Image, TouchableOpacity } from 'react-native'
import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Fontisto, Entypo, AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { setCity } from '../CityReducer';
import { setCountry } from '../CountryReducer';
import { SelectList } from 'react-native-dropdown-select-list'
import { database, athentication } from '../firebaseConfig';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';

const Mydetail = () => {
  const countries = [
    { key: 'VN', value: 'Vietnam' },
    { key: 'CN', value: 'China' },
    { key: 'AM', value: 'America' },
    { key: 'CA', value: 'Canada' },
    { key: 'AU', value: 'Australia' },
    { key: 'FR', value: 'France' },
    { key: 'DE', value: 'Germany' },
    { key: 'IN', value: 'India' },
    { key: 'JP', value: 'Japan' },
    { key: 'BR', value: 'Brazil' },
    { key: 'RU', value: 'Russia' },
    { key: 'GB', value: 'United Kingdom' },
    { key: 'IT', value: 'Italy' },
    { key: 'ES', value: 'Spain' },
    { key: 'MX', value: 'Mexico' },
    { key: 'ZA', value: 'South Africa' },
    { key: 'KR', value: 'South Korea' },
    { key: 'TR', value: 'Turkey' },
    { key: 'SA', value: 'Saudi Arabia' },
    { key: 'ID', value: 'Indonesia' },
  ];

  const cites = {
    'VN': [
      { key: '1', value: 'Hà Nội' },
      { key: '2', value: 'Nam Định' },
      { key: '3', value: 'Ninh Bình' },
      { key: '4', value: 'Hà Nam' },
      { key: '5', value: 'Hồ Chí Minh' },
    ],
    'CN': [
      { key: '6', value: 'Guangzhou' },
      { key: '7', value: 'Beijing' },
      { key: '8', value: 'Shanghai' },
      { key: '9', value: 'Chongqing' },
      { key: '10', value: 'Shenzhen' },
    ],
    'AM': [
      { key: '11', value: 'Alaska' },
      { key: '12', value: 'California' },
      { key: '13', value: 'Texas' },
      { key: '14', value: 'Florida' },
      { key: '15', value: 'New York' },
    ],
    'CA': [
      { key: '16', value: 'Ontario' },
      { key: '17', value: 'Quebec' },
      { key: '18', value: 'British Columbia' },
      { key: '19', value: 'Alberta' },
      { key: '20', value: 'Manitoba' },
    ],
    'AU': [
      { key: '21', value: 'New South Wales' },
      { key: '22', value: 'Victoria' },
      { key: '23', value: 'Queensland' },
      { key: '24', value: 'Western Australia' },
      { key: '25', value: 'South Australia' },
    ],
    'US': [
      { key: '26', value: 'New York' },
      { key: '27', value: 'California' },
      { key: '28', value: 'Texas' },
      { key: '29', value: 'Florida' },
      { key: '30', value: 'Illinois' },
    ],
    'GB': [
      { key: '31', value: 'London' },
      { key: '32', value: 'Manchester' },
      { key: '33', value: 'Birmingham' },
      { key: '34', value: 'Liverpool' },
      { key: '35', value: 'Glasgow' },
    ],
    'DE': [
      { key: '36', value: 'Berlin' },
      { key: '37', value: 'Munich' },
      { key: '38', value: 'Hamburg' },
      { key: '39', value: 'Cologne' },
      { key: '40', value: 'Frankfurt' },
    ],
    'IN': [
      { key: '41', value: 'Delhi' },
      { key: '42', value: 'Mumbai' },
      { key: '43', value: 'Bangalore' },
      { key: '44', value: 'Chennai' },
      { key: '45', value: 'Kolkata' },
    ],
    'JP': [
      { key: '46', value: 'Tokyo' },
      { key: '47', value: 'Osaka' },
      { key: '48', value: 'Kyoto' },
      { key: '49', value: 'Hiroshima' },
      { key: '50', value: 'Sapporo' },
    ],
    'BR': [
      { key: '51', value: 'Sao Paulo' },
      { key: '52', value: 'Rio de Janeiro' },
      { key: '53', value: 'Brasilia' },
      { key: '54', value: 'Salvador' },
      { key: '55', value: 'Fortaleza' },
    ],
    'RU': [
      { key: '56', value: 'Moscow' },
      { key: '57', value: 'Saint Petersburg' },
      { key: '58', value: 'Novosibirsk' },
      { key: '59', value: 'Yekaterinburg' },
      { key: '60', value: 'Kazan' },
    ],
    'IT': [
      { key: '61', value: 'Rome' },
      { key: '62', value: 'Milan' },
      { key: '63', value: 'Naples' },
      { key: '64', value: 'Turin' },
      { key: '65', value: 'Palermo' },
    ],
    'ES': [
      { key: '66', value: 'Madrid' },
      { key: '67', value: 'Barcelona' },
      { key: '68', value: 'Valencia' },
      { key: '69', value: 'Seville' },
      { key: '70', value: 'Zaragoza' },
    ],
    'MX': [
      { key: '71', value: 'Mexico City' },
      { key: '72', value: 'Guadalajara' },
      { key: '73', value: 'Monterrey' },
      { key: '74', value: 'Puebla' },
      { key: '75', value: 'Tijuana' },
    ],
    'ZA': [
      { key: '76', value: 'Johannesburg' },
      { key: '77', value: 'Cape Town' },
      { key: '78', value: 'Durban' },
      { key: '79', value: 'Pretoria' },
      { key: '80', value: 'Port Elizabeth' },
    ],
    'KR': [
      { key: '81', value: 'Seoul' },
      { key: '82', value: 'Busan' },
      { key: '83', value: 'Incheon' },
      { key: '84', value: 'Daegu' },
      { key: '85', value: 'Daejeon' },
    ],
    'TR': [
      { key: '86', value: 'Istanbul' },
      { key: '87', value: 'Ankara' },
      { key: '88', value: 'Izmir' },
      { key: '89', value: 'Bursa' },
      { key: '90', value: 'Adana' },
    ],
    'SA': [
      { key: '91', value: 'Riyadh' },
      { key: '92', value: 'Jeddah' },
      { key: '93', value: 'Mecca' },
      { key: '94', value: 'Medina' },
      { key: '95', value: 'Dammam' },
    ],
    'ID': [
      { key: '96', value: 'Jakarta' },
      { key: '97', value: 'Surabaya' },
      { key: '98', value: 'Bandung' },
      { key: '99', value: 'Medan' },
      { key: '100', value: 'Semarang' },
    ],
    'AR': [
      { key: '101', value: 'Buenos Aires' },
      { key: '102', value: 'Cordoba' },
      { key: '103', value: 'Rosario' },
      { key: '104', value: 'Mendoza' },
      { key: '105', value: 'San Miguel de Tucuman' },
    ],

  };
  const [selected, setSelected] = React.useState("");
  const [country2, setCountry2] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [city2, setCity2] = useState("");
  const nav = useNavigation();
  const dispath = useDispatch();
  const country = useSelector((state) => state.country.country);
  const city = useSelector((state) => state.city.city);
  const handlCountrySelection = (selectedCountry) => {
    const selectedCountryValue = countries.find(country => country.key === selectedCountry)?.value;
    setCountry2(selectedCountry);
    dispath(setCountry(selectedCountryValue));
    dispath(setCity(null));
  };
  const [userUid, setUserUid] = useState(null);
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
          const userName = userData.username || [];

          setUsername(userName);
          console.log(userName);
        }
      };

      fetchOrders();
    }
  }, [userUid]);
  const handleUserNameChange = (text) => {
    setName(text);
  };
  const Save = async () => {
    nav.navigate("main")
    await setDoc(
      doc(database, "users", userUid),
      {
        username: name
      },
      {
        merge: true,
      }
    );
    console.log(name)
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#53b175', marginBottom: 20, flex: 0.08 }}>
        <Pressable style={{ marginLeft: 0, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
          <AntDesign
            style={{ margin: 10 }}
            onPress={() => (
              nav.goBack()
            )}
            name="left" size={40} color="white"
          />
        </Pressable>
        <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 80, color: 'white' }}>
          My Detail
        </Text>
      </View>
      <View style={{ justifyContent: 'space-between', flex: 0.9, paddingHorizontal: 10 }}>
        <View>
          <View style={{paddingHorizontal: 10}}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: 'grey', marginTop: 40 }}>Username</Text>
            <TextInput
              keyboardType='name-phone-pad'
              onChangeText={handleUserNameChange}
              placeholder={username}
              style={{ borderColor: 'grey', borderBottomWidth: 1, borderWidth: 0, fontSize: 16, marginTop: 10 }}
            />
          </View>
          <Text style={{fontSize: 16, marginLeft: 10, fontWeight: 500, color: 'grey', marginTop: 30 }}>Your Zone</Text>
          <SelectList
            setSelected={handlCountrySelection}
            boxStyles={{ marginTop: 10, borderWidth: 0, borderBottomWidth: 1 }}
            arrowicon={<FontAwesome5 name="chevron-down" size={15} color={'grey'} />}
            data={countries}
            placeholder={country}
          //defaultOption={countries[0]}
          />
          <Text style={{ fontSize: 16,marginLeft: 10, fontWeight: 500, color: 'grey', marginTop: 30 }}>Your Area</Text>
          <SelectList
            setSelected={(selectedCityKey) => {
              const selectedCity = cites[country2].find(city => city.key === selectedCityKey)?.value;
              setCity2(selectedCity);
              dispath(setCity(selectedCity));
            }}
            boxStyles={{ marginTop: 10, color: 'grey', borderWidth: 0, borderBottomWidth: 1 }}
            data={cites[country2]}
            arrowicon={<FontAwesome5 name="chevron-down" size={15} color={'grey'} />}
            placeholder={city}
          //defaultOption={cites[0][0]}
          />
        </View>
        <TouchableOpacity
          onPress={Save}
          activeOpacity={0.8}
          style={{ backgroundColor: '#53b175', borderRadius: 18, height: 70, justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 40, }}>
            <Text style={{ fontSize: 22, color: 'white', fontWeight: '500' }}>
              Save
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
});
export default Mydetail;