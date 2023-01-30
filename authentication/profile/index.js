import React from "react";
import { useRoute } from "@react-navigation/native";
import { Text, TextInput, View, TouchableOpacity,Image, ImageBackground} from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";




export default function Profile (){
    const navigation = useNavigation ();
    const fname = useSelector((state) => state.auth.user.fname)
    const lname = useSelector((state) => state.auth.user.lname)
    const email = useSelector((state) => state.auth.user.email)


    return (
        <ImageBackground source={require('./Max.png')} resizeMode = "cover" style = {styles.bgimage}>
        <View style={styles.container}>
            <Text style={styles.name}>First Name: {fname}  </Text>
            <Text style={styles.name}>Last Name: {lname}</Text>
            <Text style={styles.name}>Email: {email} </Text>
            <TouchableOpacity style={styles.loginButton} onPress={() =>{
                    navigation.navigate('DrawBar')
                }}>
                <Text style={styles.text}>DASHBOARD</Text>    
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={() =>{
                    navigation.navigate('Login')
                }}>
                <Text style={styles.text1}>LOG OUT</Text>    
            </TouchableOpacity>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginTop: 150
    
    },
  
    bgimage: {
        flex: 1
    },

    name: {
        fontFamily: "sans-serif-condensed",
        marginLeft: 40,
        marginBottom:10,
        marginTop: 10,
        fontSize: 20
    },
    
    loginButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        marginBottom: 5,
        marginTop: 25,
        marginLeft: 50
    },

    text:{
        fontStyle: "normal",
        fontSize: 25,
        textAlign:'center',
        height: 60,
        padding:5,
        margin:5,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed"

    },

    text1:{
        fontStyle: "normal",
        fontSize: 25,
        textAlign:'center',
        height: 60,
        padding:5,
        margin:5,
        fontWeight: "bold",
        fontFamily: "sans-serif-condensed"

    },


 

  });