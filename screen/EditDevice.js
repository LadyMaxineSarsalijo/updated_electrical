import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { mutateMyDevice } from './components/deviceSlice';
const EditDevice = ({ navigation,route }) => {
    const devices = useSelector((state) => state.devices.myDevice)
    const [data, setData] = useState({
      noOfDevices: '',
      noOfHours: '',
    })
    const dispatch = useDispatch()
    const p_kwh= 10.66
    const KWH = 0.225
    const calculate = KWH * data.noOfDevices * data.noOfHours 
    const perDev= calculate * p_kwh
    const { device } = route.params;
    const [devName, setDevName] = useState(device);

  return (
    <View style={{    
        flex: 1,
        backgroundColor: '#EFECE1',
        alignItems: 'center',
        height:800,
        textAlign:'center'}}>
        <Text style={styles.textAbout}>EDIT DEVICE</Text>
        <TouchableOpacity style={styles.Bbutton} onPress={()=> {
          navigation.navigate('Reports')
        }}>
          <Text style={styles.btext}>BACK</Text>
        </TouchableOpacity>
        <Text style={{backgroundColor:'#F8D866',
                alignItems:'center',
                width:350,
                height:400,
                top:50,
                borderRadius:10
              }}
        ></Text>
       
        <TextInput
        style={{ fontWeight:"bold", fontSize:20, marginBottom:20, bottom:300, left:10}}
        placeholder="Device name"
        value={devName}
        onChangeText={text => setDevName(text)}
      />
  <TextInput style = {styles.usageInput} keyboardType="numeric" placeholder="No. of Devices" value={data.noOfDevices} 
          onChangeText={(text) => {
                setData({
                    ...data,
                    noOfDevices: text
                });
            }}/>
     <TextInput style = {styles.usageInput1} keyboardType="numeric" placeholder="No. of Hours" value={data.noOfHours} onChangeText={(text) => {
                setData({
                    ...data,
                    noOfHours: text
                });
            }}/>
   
   <TouchableOpacity style={styles.mButton}  onPress={()=> {
          dispatch(mutateMyDevice({
            noOfDevices: data.noOfDevices,
            noOfHours: data.noOfHours,
            calculate: calculate,
            devName: devName,
            perDev: perDev
        })) 
        navigation.navigate('Reports')
        
        }}> 
            <Text style={styles.mTxt}>SAVE</Text>
          </TouchableOpacity>
    </View>
  );
}
export default EditDevice
const styles = StyleSheet.create({
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
        bottom:220
    },
  
    usageInput1:{
        borderWidth: 2,
        height: 50,
        width: 300,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed",
        bottom:330
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
        bottom:200

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
        bottom:10,
        right:155

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