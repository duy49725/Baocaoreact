import React from 'react';
import { StyleSheet, Text, View, Pressable, Feather, AntDesign, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HelpScreen() {
    const nav = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Maskg.png')} style={{ flex: 1, alignItems:'center', backgroundColor: '#FDFDFD' }} >     
        <View style={{flexDirection:'row',  marginTop: 0, backgroundColor: 'green',width: 380, height:80}}>
        <Pressable onPress={() => {nav.goBack()}} style={{ marginTop: 10, marginBottom: 0, marginLeft: -20, borderBottomWidth: 2, borderColor: '#E2E2E2', alignItems: 'center', justifyContent: 'space-between', height: 55, width: 100, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginLeft: 30, marginTop:30, fontWeight: '500', fontSize: 18 }}>Quay lại</Text>
        </View>
      </Pressable>
        <View style={{}}>
        <Text style={styles.title}>Hướng dẫn</Text>
        </View>
        </View>

      
      <Text style={styles.text}>
        {'\n'}
        -Bạn có thể tìm kiếm các sản phẩm bán tạp hóa theo danh mục hoặc từ khóa.{'\n'}{'\n'}
        -Bạn có thể xem chi tiết sản phẩm bằng cách nhấn vào tên sản phẩm.{'\n'}{'\n'}
        -Bạn có thể đặt hàng bằng cách chọn số lượng và thanh toán qua các phương thức như chuyển khoản, ví điện tử, ...{'\n'}{'\n'}
        -Bạn có thể theo dõi trạng thái đơn hàng của bạn trong phần "Đơn hàng" của ứng dụng.
      </Text>
      <Text style={styles.text}>
        Nếu bạn gặp bất kỳ vấn đề nào khi sử dụng ứng dụng, bạn có thể liên hệ với chúng tôi qua {'\n'}email: support@taphoa.com
        {'\n'}Hoặc gọi số điện thoại: 0987654321
      </Text>
  
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 43,
    marginLeft: 50
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});