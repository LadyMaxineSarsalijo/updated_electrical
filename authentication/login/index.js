import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, Button,Text, TextInput, View, TouchableOpacity,Image, ImageBackground, Alert} from "react-native";
import { StyleSheet } from "react-native";
import { useTogglePasswordVisibility } from "../useTogglePasswordVisibility";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { useDispatch } from "react-redux";
import { mutateUser } from "../../screen/components/userSlice";

export default function Login (){
  const dispatch = useDispatch();

    const navigation = useNavigation ();
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

      const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
          const response = await axios.post('https://electricaladmin.000webhostapp.com/Login.php', values);
          const data = response.data;
          console.log(data);
          if (data[0].Message === 'Logged In Successfully') {
            Alert.alert("Successful", "Successfully logged in")
            dispatch(mutateUser({ 
              fname: data[0].user.fname,
              lname: data[0].user.lname,
              email: data[0].user.email,
              userID: data[0].user.userID
          })) 
            navigation.navigate("DrawBar")
          } else if(data[0].Message === "Your account has been deleted. Please contact the admin.") {
            Alert.alert("Error", "Your account has been deleted. Please contact the admin.");
          } else {
            setErrors({ general: data[0].Message });
            Alert.alert("Error", "Incorrect email or password")
          }
        } catch (err) {
          console.log(err);
          // Handle error
        } finally {
          setSubmitting(false);
        }
      }

      const SignupSchema = Yup.object().shape({
        email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
        password: Yup.string()
        .required('Password is required')
        

      });
    return (
        <ImageBackground source={require('./309801225_1271235570111784_2236775530307066990_n.png')} resizeMode = "cover" style = {styles.bgimage}>
       <Formik
             initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={handleSubmit}
             >
              {({values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting }) => (

        <View  style ={styles.container}>
            <Image source={require('./electriCAL__2_-removebg-preview.png')}style = {styles.image}/>
            <TextInput 
            style={styles.txtinput} 
            placeholder="Email Address" 
            value={values.email} 
            onChangeText={handleChange('email')} 
            onBlur={handleBlur('email')}
            name="email"/>
             {touched.email &&
                errors.email &&(
            <Text style={{color: "red"}}>{errors.email}</Text>
             )}

            <TextInput style={styles.txtinput} 
            placeholder="Password"  
            secureTextEntry={passwordVisibility}
            value={values.password} 
            onChangeText={handleChange('password')} 
            onBlur={handleBlur('password')}
            />
             {touched.password &&
                     errors.password &&(
            <Text style={{color: "red"}}>{errors.password}</Text>
            )}
            <Pressable style={styles.eye} onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable>
            <TouchableOpacity 
            disabled={isSubmitting}
            style={styles.loginButton}
            onPress= {handleSubmit} >
                <Text style={styles.text} >LOG IN</Text>    
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() =>{
                    navigation.navigate('Forgotpassword');
                }}>
                <Text style={styles.fg}>Forgot Password?</Text>
              </TouchableOpacity>
            <Text style={styles.fg}>Don't have an account?
                 <Text onPress={() =>{
                    navigation.navigate('Registration');
                }} style={styles.fg2}> Sign Up </Text> </Text>
                
        </View>
                                 )}
        </Formik>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    
    txtinput:{
        borderWidth: 2,
        height: 50,
        width: 300,
        padding:10,
        margin:5,
        marginTop: 10,
        textAlign:'center',
        borderRadius: 20,
        backgroundColor: '#EBE8CD',
        marginBottom: 10,
        justifyContent: 'center',
        fontFamily: "sans-serif-condensed"

    },
    
    fg: {
        width:250,
        back: '#463a0b',
        textAlign: "center",
        justifyContent: 'center',
        marginBottom: 5,
        fontFamily: "sans-serif-condensed",
        fontSize: 15,


    },

    fg2: {
        margin: 5,
        width:200,
        back: '#463a0b',
        textAlign: "center",
        color: "#3F52FD",
        fontWeight: "800",
        textDecorationLine: 'underline',
        fontFamily: "sans-serif-condensed"
    },

    loginButton: {
        width: 200,
        backgroundColor: '#DCB900',
        height: 50,
        width: 250,
        borderRadius: 20,
        textAlign:'center',
        marginBottom: 5,
        marginTop: -25
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
    image:{
        justifyContent: "center",
        width: 300,
        height: 280,
        marginBottom: -20
    
    },
    bgimage: {
        flex: 1
    },

    eye: {
        marginLeft: 250, 
         top: -45,
     },

     textFailed: {
        alignSelf: 'center',
        color: 'red',
      },
  });