import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {Image, Button,View,Text,SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { resetMyDevice } from './components/deviceSlice';

import DeviceCard from './components/deviceCard';
const YourDevices = ({ navigation }) => {
  const dispatch = useDispatch();
  const clearDevices = () => {
    dispatch(resetMyDevice());
  };
  const myDevices = useSelector((state) => state.devices.myDevice)


  
  return (
    <ScrollView style={{}}>
      <SafeAreaView style={styles.container}>
   
       
        <View style={{}}>
        <Text style={styles.textAbout}>YOUR DEVICES</Text>
        
        </View>
        
        <TouchableOpacity style={styles.Bbutton} onPress={()=> {
          navigation.navigate('DrawBar')
        }}>
          
          <Text style={styles.btext}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {() => {
          navigation.navigate('Reports')
          
        }}>
        <Text style={{
          fontWeight: 'bold',
          width:70,
          fontSize:15,
          left:315,
          height:25,
          bottom:40,
          color:'white',
          backgroundColor:'red',
          borderRadius:10,
          textAlign:'center'          
        }}>Reports</Text>

        </TouchableOpacity>
        <View style={styles.row}>
          
        {
            (myDevices != undefined) ? myDevices.map(obj => <DeviceCard image={obj.image} devName={obj.devName} noOfDevices={obj.noOfDevices} noOfHours={obj.noOfHours} calculate={obj.calculate} />) : null
          }
   <TouchableOpacity style={{}} onPress={clearDevices}>
      <Text style={{
          fontWeight: 'bold',
          width:70,
          fontSize:15,
          left:163,
          height:35,
          bottom:12,
          color:'white',
          backgroundColor:'red',
          borderRadius:10,
          textAlign:'center',
          marginBottom:20,

        }}>Clear Devices</Text>
    </TouchableOpacity>

      </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default YourDevices;

const styles = StyleSheet.create({
   row:{
    flexDirection:'row',
    flexWrap: 'wrap',
    flex: 1,
    gap: '1rem',

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
        left: 75,
        top: 5
      },


      btext:{
        fontStyle: "normal",
        fontSize: 20,
        textAlign:'center',
        height: 30,
        width: 50,
        padding:0,
        marginLeft:15,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed",
        },
      
        Bbutton: {
          backgroundColor:'#FEF0B3',
          flexDirection: "row",
          alignItems: "center",
            width:80,
          borderRadius: 15,
          height:35,
          bottom:5
  
      },
      

  textAbout: {
      fontStyle: "normal",
      fontSize: 25,
      height: 60,
      width: 400,
      padding:13,
      fontWeight: "bold",
      fontFamily: "sans-serif-condensed",
      backgroundColor: "#F8D866",
      textAlign: 'center',
      top:40
  },
});