import React, {useRef} from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { myColors } from '../Utils/MyColors';

const Checkbox = ({
  text,
  onPress,
  isChecked,
  containerStyle,
  textStyle,
  checkboxStyle,
}) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    const toValue = isChecked ? 0 : 30;
    Animated.timing(animatedWidth, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={() => {
          startAnimation();
          onPress();
        }}
        style={[
          styles.checkbox,
          isChecked && styles.checkboxSelected,
          checkboxStyle,
        ]}>
        <Animated.View style={{width: animatedWidth}}>
          <Icon style={{justifyContent: 'center', alignItems: 'center', color:'white'}} name="checkmark" size={30} />
        </Animated.View>
      </TouchableOpacity>
      <Text style={isChecked ? [styles.checkboxTextSelected, textStyle] : [styles.checkboxText, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 30,
    marginBottom: 10
  },
  checkboxSelected: {
    backgroundColor: '#53b175',
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10,
  },
  checkboxTextSelected:{
    fontSize: 16,
    marginLeft: 10,
    color:'#53b175'
  }
});

export default Checkbox;
