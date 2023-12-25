import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCountry } from '../CountryReducer';
import { setCity } from '../CityReducer';

const SelectMethodScreen = () => {
  const [selected, setSelected] = React.useState("");
  const [country2, setCountry2] = useState("");
  const [city2, setCity2] = useState("");
  const nav = useNavigation();
  const dispath = useDispatch();
  const country = useSelector((state) => state.country.country);
  const city = useSelector((state) => state.city.city);
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

  const handlCountrySelection = (selectedCountry) => {
    const selectedCountryValue = countries.find(country => country.key === selectedCountry)?.value;
    setCountry2(selectedCountry);
    dispath(setCountry(selectedCountryValue));
    dispath(setCity(null));
  };

  return (
    <SafeAreaView style={{ paddingHorizontal: 10, paddingTop: 20, flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
      <View>
        <Pressable style={{ marginLeft: 0, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
          <AntDesign
            onPress={() => (
              nav.navigate('OtpScreen')
            )}
            name="left" size={30} color="black"
          />
        </Pressable>
        <Image
          style={{ height: 150, width: 200, alignSelf: 'center', marginTop: 30, marginBottom: 30 }}
          source={require("../assets/illustration.png")}
        />
        <Text style={{ alignSelf: 'center', fontSize: 26, fontWeight: '600' }}>Select Your Location</Text>
        <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 16, color: '#7c7c7c' }}>Swithch on your Location to stay in tune with</Text>
        <Text style={{ alignSelf: 'center', fontSize: 16, color: '#7c7c7c' }}>what's happening in your area</Text>
        <View>
          <Text style={{ marginLeft: 10, fontWeight: 500, color: 'grey', marginTop: 30 }}>Your Zone</Text>
          <SelectList
            setSelected={handlCountrySelection}
            boxStyles={{ marginTop: 10, borderWidth: 0, borderBottomWidth: 1 }}
            arrowicon={<FontAwesome5 name="chevron-down" size={15} color={'grey'} />}
            data={countries}
            placeholder={"Select your country"}
            defaultOption={{key: 'VN', value: 'Viet Nam'}}
          />
          <Text style={{ marginLeft: 10, fontWeight: 500, color: 'grey', marginTop: 30 }}>Your Area</Text>
          <SelectList
            setSelected={(selectedCityKey) => {
              // Set the selected city value to state
              const selectedCity = cites[country2].find(city => city.key === selectedCityKey)?.value;
              setCity2(selectedCity);
              // Dispatch the selected city to the Redux store
              dispath(setCity(selectedCity));
            }}
            boxStyles={{ marginTop: 10, color: 'grey', borderWidth: 0, borderBottomWidth: 1 }}
            data={cites[country2]}
            arrowicon={<FontAwesome5 name="chevron-down" size={15} color={'grey'} />}
            placeholder={"Select your province/state"}
          //defaultOption={subcategories[category][0]}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          nav.navigate("Login")
        }}
        activeOpacity={0.8}
        style={{ backgroundColor: '#53b175', borderRadius: 18, height: 70, justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 40 }}>
          <Text style={{ fontSize: 22, color: 'white', fontWeight: '500' }}>
            Submit
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>

  )
}

export default SelectMethodScreen;

const styles = StyleSheet.create({})

/*const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const SelectMethodScreen = () => {
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://api.countrystatecity.in/v1/countries',
      headers: {
        'X-CSCAPI-KEY': 'b1VpSGFhWGgybFZsMnJjNlFSRm9RaEpGTEt1c1NQUE42YlVWaGphcA=='
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      var count = Object.keys(response.data).length;
      let countryArray = [];
      for(var i = 0; i < count; i++){
        countryArray.push({
          value: response.data[i].iso2,
          label: response.data[i].name,
        })
      }
      setCountryData(countryArray);
    })
    .catch(function (error) {
      console.log(error);
    });
  })
 

  return (
    <SafeAreaView style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={countryData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Country' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select State' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select City' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </SafeAreaView>
  );
};

export default SelectMethodScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginTop: 20,
    flex: 1
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 25,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});*/