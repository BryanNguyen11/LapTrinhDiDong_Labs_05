import { StatusBar } from 'expo-status-bar';
import { Touchable, TouchableOpacity } from 'react-native';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.bigContainer}>
        <Image style={styles.bigimg} source={require('./assets/imgs/bluephone.png')}/>
        <Text style={styles.bigTitle}>Điện thoại Vsmart Joy 3- Hàng chính Hãng</Text>
        <View style={styles.ratingBar}>
            <View style={{flexDirection:'row'}}>
            <Image source={require('./assets/imgs/star.png')}/> 
            <Image source={require('./assets/imgs/star.png')}/> 
            <Image source={require('./assets/imgs/star.png')}/> 
            <Image source={require('./assets/imgs/star.png')}/> 
            <Image source={require('./assets/imgs/star.png')}/>  
            </View> 
            <Text style={{fontSize:20}}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.prices}>
            <Text style={{marginRight: 35,fontWeight:'bold',fontSize:35}} >1.790.000</Text>
            <Text style={{marginTop: 8,fontWeight:'bold',fontSize:27,color:'grey',textDecorationLine:'line-through'}} >1.790.000</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
            <Text style={{marginRight: 150,fontWeight:'bold',fontSize:20,color:'red'}} >Ở đâu rẻ hơn hoàn tiền</Text>
            <Image source={require('./assets/imgs/help_icon.png')} style={{position:'absolute',left:220}} />
        </View>

        <TouchableOpacity style={{flexDirection:'row', alignItems:'center',marginTop:10,justifyContent:'center',borderColor: 'black',borderWidth:1,backgroundColor:'white',borderRadius:10,height:50,width:'90%'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{alignSelf: 'center',fontSize:24}} >4 Màu - Chọn màu</Text>
            <Image source={require('./assets/imgs/Vector.png')} style={{position:'absolute',left:240,}} />
          </View>
        </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bigContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'felx-start',
    alignItems: 'center',
    padding: 10,
  },
  bigimg: {
    width: 320,  
    height: 400,
    marginBottom: 10,
  },
  bigTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  ratingBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  prices: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});
