import * as React from 'react';
import {Image, Button,View,Text,SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import monitor from './pics/monitor.png'
import ricecooker from './pics/ricecooker.png'
import iron from './pics/iron.png'
import aircon from './pics/aircon.png'
import tv from './pics/tv.png'
import laptop from './pics/laptop.png'
import bulb from './pics/bulb.png'
import cfan from './pics/cfan.png'
import ref from './pics/ref.png'
import waterh from './pics/waterh.png'
import { ScrollView } from 'react-native-gesture-handler';
import { Modal, Animated,Pressable, TextInput, ImageBackground} from "react-native";
import { useNavigation } from "@react-navigation/native";
import close from './pics/close.png'
import success from './pics/success.png'

const Ricecookeredit = ({ navigation }) => {
  return (
    <ScrollView>
  
      <SafeAreaView style={styles.container}>
    
        <TouchableOpacity style={styles.Bbutton} onPress={()=> {
          navigation.navigate('Your Devices')
        }}>
          <Text style={styles.btext}>BACK</Text>
        </TouchableOpacity>
        <Text style={{backgroundColor:'#F8D866',
                alignItems:'center',
                width:350,
                height:550,
                top:100,
                borderRadius:10
              }}
        ></Text>
       
        <View style={{alignItems: 'center'}}>
            <View style={styles.header}>
             
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={ricecooker}
              style={{height: 100, width: 100, bottom:380}}
            />
          </View>
  
          <Text style={{ bottom:350, fontWeight:"bold", fontSize:20}}>
          Name: Rice Cooker
          </Text>
          <Text style={{ bottom:330, fontWeight:"bold", fontSize:20}}>
          Wattage: 30-50W
          </Text>
          <TextInput style = {styles.usageInput} placeholder="number of hours used" keyboardType="numeric"/>
          <TextInput style = {styles.usageInput1} placeholder="number of devices" keyboardType="numeric"/>

          <TouchableOpacity style={styles.mButton} onPress={()=> {
          navigation.navigate('Your Devices')
        }}> 
            <Text style={styles.mTxt}>UPDATE</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.mButton1} onPress={()=> {
          navigation.navigate('Your Devices')
        }}> 
            <Text style={styles.mTxt1}>DELETE</Text>
          </TouchableOpacity>
   

      </SafeAreaView>
    </ScrollView>
      
  );
}

export default Ricecookeredit;

const styles = StyleSheet.create({
  usageInput1:{
    borderWidth: 2,
    height: 50,
    width: 300,
    textAlign:'center',
    borderRadius: 20,
    backgroundColor: '#EBE8CD',
    justifyContent: 'center',
    fontFamily: "sans-serif-condensed",
    bottom:350

},
  usageInput:{
    borderWidth: 2,
    height: 50,
    width: 300,
    textAlign:'center',
    borderRadius: 20,
    backgroundColor: '#EBE8CD',
    justifyContent: 'center',
    fontFamily: "sans-serif-condensed",
    bottom:230
},

   
    mTxt:{
      fontStyle: "normal",
      fontSize: 25,
      textAlign:'center',
      height: 60,
      padding:5,
      margin:5,
      fontWeight: "bold",
      fontFamily: "sans-serif-condensed"

  },
  mButton: {
      backgroundColor: '#DCB900',
      height: 45,
      width: 120,
      borderRadius: 20,
      textAlign:'center',
      bottom:260,
      right:80


  },
  mTxt1:{
    fontStyle: "normal",
    fontSize: 25,
    textAlign:'center',
    height: 60,
    padding:5,
    margin:5,
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed"
},
mButton1: {
    backgroundColor: 'red',
    height: 45,
    width: 120,
    borderRadius: 20,
    textAlign:'center',
    bottom:304,
    left:80
  },

 
  textsyd: {
    fontStyle: "normal",
    fontSize: 25,
    textAlign:'center',
    height: 60,
    padding:5,
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",  
  },
  syd:{
    backgroundColor: '#DCB900',
    height: 40,
    width: 250,
    borderRadius: 20,
    textAlign:'center',
    bottom: 410
  },
  container: {
    flex: 1,
    backgroundColor: '#EFECE1',
    alignItems: 'center',
    height:800,
    textAlign:'center'
  },
  calcButton: {
    backgroundColor: '#DCB900',
    height: 40,
    width: 130,
    textAlign:'center',
  },
btext:{
  textAlign:'center',
  fontStyle: "normal",
  fontSize: 18,
  height: 30,
  width: 45,
  fontWeight: "bold",
  fontFamily: "sans-serif-condensed",
  left:8
  },

  Bbutton: {
    backgroundColor:'#FEF0B3',
    flexDirection: "row",
    alignItems: "center",
    width:70,
    textAlign:'center',
    top: 50,
    right:150,
    borderRadius:10,
    height:40
},


});