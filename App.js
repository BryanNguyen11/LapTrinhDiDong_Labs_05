import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://th.bing.com/th/id/OIP.3lQ8VqzNIPPtyekuLdzPqgHaHa?rs=1&pid=ImgDetMain' }} style={styles.phoneImage} />
      <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      
      <View style={{flex:1, flexDirection: 'row', alignItems:'center',justifyContent:'space-around'}}>
        <Image source={require('./assets/star.png')}  />
        <Image source={require('./assets/star.png')}  />
        <Image source={require('./assets/star.png')}  />
        <Image source={require('./assets/star.png')}  />
        <Image source={require('./assets/star.png')}  />

        <Text style={styles.rating}>(Xem 828 đánh giá)</Text>
      </View>


      <View style={{flex:2, flexDirection: 'row', alignItems:'center',justifyContent:'space-around'}}>
      <View><Text style={styles.price}>1.790.000₫</Text></View>

       <View><Text style={styles.old_price}>1.790.000₫</Text></View>
      </View>

      <View style={{flex:3,flexDirection:'colum',alignItems:'left',justifyContent:'left'}}>
        <Text style={{fontFamily:'Roboto',fontSize:16,fontWeight:'bold',textAlign: 'left'}}>Ở đâu rẻ hơn hoàn tiền</Text>
      </View>
      
      <Button style={styles.buy_button} title="Chọn Màu" onPress={() => {}} />
      <Button style={styles.option_button} title="CHỌN MUA" onPress={() => {}} />
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
  phoneImage: {
    marginTop:0,
    width: 300,
    height: 300,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  rating: {
    fontSize: 16,
    color: 'gray',
  },
  price: {
    fontWeight:'bold',
    fontSize: 24,
    color: 'back',
    marginRight:50,
  },
  old_price: {
    fontSize: 24,
    color: 'gray',
    
  },
  buy_button: {
    Color:'Red'
  },
  option_button: {
    color:'back'
  },
});
