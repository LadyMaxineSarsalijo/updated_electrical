import * as React from 'react';
import {Image, Button,View,Text,SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import ReportCard from './components/reportCard';
import axios from 'axios';


const Reports = ({ navigation }) => {
    const myDevices = useSelector((state) => state.devices.myDevice)
    const userID = useSelector((state) => state.auth.user.userID)
    let total = 0;
  for (let i=0; i<myDevices.length; i++ ){
      total += myDevices[i].calculate
  }
    let kwh= 10.66;
    let totalBillday = total * kwh;
    let MonthBill = totalBillday * 30;

    axios.post('https://electricaladmin.000webhostapp.com/reportsDB.php', {
      totalKwhDay: total,
      billPerDay: totalBillday,
      billPerMonth: MonthBill,
      userID: userID
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  
    const possible = () => {
      dispatch(mutateMyHistory({
        pb: MonthBill, 

})) 
    }


  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
   
       
        <View style={{alignContent:'center', alignItems:'center'}}>
        <Text style={styles.textAbout}>REPORTS</Text>

        </View>
        
        <TouchableOpacity style={styles.Bbutton} onPress={()=> {
          navigation.navigate('Your Devices')
        }}>
        
          <Text style={styles.btext}>BACK</Text>
        </TouchableOpacity>
       <View style={{alignItems:'center'}}>
       <Text style={{
          fontWeight: 'bold',
          fontSize: 15,
          top: 10,
          marginBottom:10
        }} 
        
        >Possible total KWH per day: {total.toFixed(2)}</Text>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 15,
          top: 10,
          marginBottom:10
        }} >Possible bill per day: ₱{totalBillday.toFixed(2)}</Text>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 15,
          top: 10,
          marginBottom:10
        }} >Possible bill per Month: ₱{MonthBill.toFixed(2)}</Text>
       </View>
        
        <View >
        {
            (myDevices != undefined) ? myDevices.map(obj => <ReportCard devName={obj.devName} noOfDevices={obj.noOfDevices} noOfHours={obj.noOfHours} calculate={obj.calculate} perDev={obj.perDev} />) : null
          }
       
      
      </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Reports;

const styles = StyleSheet.create({
  
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
          bottom:10
  
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