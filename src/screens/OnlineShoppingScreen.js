import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

function OnlineShoppingScreen({navigation}) {
  return (
   <View style={styles.parentContainer}>
      <View style={styles.container}>
      <Text style={styles.heading}>Online shopping</Text>
      <Text style={styles.textContent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit nostrum atque quasi error earum, vel enim est sed, magnam exercitationem magni molestias asperiores debitis, dolorem et architecto ratione voluptatem.
      </Text>
      <Image source ={require('./../../assets/img2.png')} style={styles.image} />
      <TouchableOpacity onPress={()=> {
        navigation.navigate('AddToCart')
      }} style={styles.btnContainer}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity> 

      <View style={styles.scrollView}>
        <View style={styles.scroll}>
        <View style={styles.secondScroll}></View>
          <View style={styles.firstScroll}></View>
          <View style={styles.thirdScroll}></View>
        </View>
        <Text style={styles.textView} onPress={()=> {
            navigation.navigate('PaymentSuccessful')
        }} >Skip</Text>
      </View>
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
   parentContainer:{
  flex: 1,
 backgroundColor: '#fff',
  },
  container: {
  marginTop: 20,
  marginHorizontal: 30
  },
  heading: {
textTransform: 'uppercase',
fontWeight: 'bold',
fontSize: 26,
marginBottom: 15

  },
  textContent: {
    color:'#646369',
    fontSize:17,
    marginBottom:25
  },
  image: {
    height:300,
    width: "100%"
  },
  btnContainer:{
    height:50,
    borderRadius: 30,
    backgroundColor:'#6f5af2',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:70,
    width: "50%",
    alignSelf:'center'
  },
  btnText: {
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  scrollView: {
flexDirection: 'row',
marginTop:70,
alignItems:'center',
width: '50%',
justifyContent:'space-between',
alignSelf:'flex-end'

  },
  scroll:{
    flexDirection:'row',
  },
  textView: {
     color: '#89888f',
    fontSize:16

  },
  firstScroll: {
    height: 10,
    width:10,
    backgroundColor:'#d7d2f7',
    borderRadius:10,
    
  },
  secondScroll: {
     height: 10,
    width:20,
    backgroundColor:'#6f5af2',
    borderRadius:10,
    marginRight:7,
  },
  thirdScroll: {
     height: 10,
    width:10,
    backgroundColor:'#d7d2f7',
    borderRadius:10,
    marginLeft:7
  }

})

export default OnlineShoppingScreen
