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
const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const Devices = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <ScrollView>
       <View>
        <ModalPoup visible={visible}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image
                  source={close}
                  style={{height: 30, width: 30, top:-190, right:-3}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={monitor}
              style={{height: 100, width: 100,left:-100, top:10}}
            />
          </View>
  
          <Text style={{left: 140, bottom:70, fontWeight:"bold", fontSize:20}}>
            Name: Computer
          </Text>
          <Text style={{left: 140, bottom:60, fontWeight:"bold", fontSize:20}}>
            Wattage: 200W
          </Text>
          <TextInput style = {styles.usageInput} placeholder="number of hours used" keyboardType="numeric"/>
          <TextInput style = {styles.usageInput1} placeholder="number of devices" keyboardType="numeric"/>

            <TouchableOpacity style={styles.calcButton}></TouchableOpacity>
          <TouchableOpacity style={styles.mButton} onPress={() => setVisible(false)}>
            <Text style={styles.mTxt}>SAVE</Text>
          </TouchableOpacity>
        </ModalPoup>
    
     

        </View>
      <SafeAreaView style={styles.container}>
       

        <TouchableOpacity style={styles.Bbutton} onPress={()=> {
          navigation.navigate('DrawBar')
        }}>
          <Text style={styles.btext}>BACK</Text>
        </TouchableOpacity>
        <View style={styles.syd}>
          <Text style={styles.textsyd}>SELECT YOUR DEVICE</Text>
        </View>
        <View style={styles.monitorbg}>
        <TouchableOpacity onPress={() => setVisible(true)}>
      
        <Image source={monitor} style={styles.monitorimg}/>
        </TouchableOpacity>
        </View>
        <View style={styles.ricecookerbg}>
        <TouchableOpacity >
        <Image source={ricecooker} style={styles.ricecookerimg}/>
        </TouchableOpacity>  
        </View>
        <View style={styles.ironbg}>
        <TouchableOpacity >
        <Image source={iron} style={styles.ironimg}/>
        </TouchableOpacity> 
        </View>
        <View style={styles.airconbg}>
        <TouchableOpacity >
        <Image source={aircon} style={styles.airconimg}/>
        </TouchableOpacity>
        </View>
        <View style={styles.tvbg}>
        <TouchableOpacity >
        <Image source={tv} style={styles.tvimg}/>
        </TouchableOpacity>
        </View>
        <View style={styles.laptopbg}>
        <TouchableOpacity >
        <Image source={laptop} style={styles.laptopimg}/>
        </TouchableOpacity>
        </View>
        <View style={styles.bulbbg}>
        <TouchableOpacity >
        <Image source={bulb} style={styles.bulbimg}/>
        </TouchableOpacity>
        </View>
        <View style={styles.cfanbg}>
        <TouchableOpacity >
        <Image source={cfan} style={styles.cfanimg}/>
        </TouchableOpacity>
        </View>
        <View style={styles.refbg}>
        <TouchableOpacity >
        <Image source={ref} style={styles.refimg}/>
        </TouchableOpacity>
        </View>
        <View style={styles.waterhbg}>
        <TouchableOpacity >
        <Image source={waterh} style={styles.waterhimg}/>
        </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    </ScrollView>
      
  );
}

export default Devices;

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
    left: 28,
    top: 10
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
    left: 28
},
  modalBackGround: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '90%',
      backgroundColor: '#F8D866',
      borderRadius: 20,
      elevation: 20,
    },
    header: {
      width: '100%',
      height: 40,
      alignItems: 'flex-end',
      justifyContent: 'center',
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
      left: 110,
      bottom:15,
      borderRadius: 20,
      textAlign:'center'
  },

    waterhbg:{
    backgroundColor: "#F8D866",
    borderRadius: 10,
    width:150, 
    height: 120,
    left: 224,
    top: -300,

    },
    refbg:{
    backgroundColor: "#F8D866",
    borderRadius: 10,
    width:150,
    height: 120,
    left: 20,
    top: -180

    },
    cfanbg:{
    backgroundColor: "#F8D866",
    borderRadius: 10,
    width:150,
    height: 120,
    left: 224,
    top: -180,
    top: -240,

    },

    bulbbg:{
    backgroundColor: "#F8D866",
    borderRadius: 10,
    width:150,
    height: 120,
    left: 20,
    top: -120

    },
    laptopbg:{
    backgroundColor: "#F8D866",
    borderRadius: 10,
    width:150,
    height: 120,
    left: 224,
    top: -180,

    },
    tvbg:{
    backgroundColor: "#F8D866",
    width:150,
    height: 120,
    borderRadius: 10,
    left: 20,
    top: -60
    },
    airconbg:{
    backgroundColor: "#F8D866",
    width:150,
    height: 120,
    borderRadius: 10,
    left: 224,
    top: -120,

    },
    ironbg:{
    backgroundColor: "#F8D866",
    width:150,
    height: 120,
    left: 20,
    borderRadius: 10
    },

    ricecookerbg:{
    backgroundColor: "#F8D866",
    width:150,
    height: 120,
    top: -60,
    left: 224,
    borderRadius: 10

    },
    monitorbg:{
    backgroundColor: "#F8D866",
    top: 60,
    width:150,
    left: 20,
    height: 120,
    borderRadius: 10

 },
  waterhimg:{
    top: 5,
    left: 20,
    height: 100,
    width: 110
  }, 
  refimg:{
    top: 10,
    left: 10,
    height: 100,
    width: 120
  }, 
  cfanimg:{
    top: 20,
    left: 20,
    height: 80,
    width: 110
  }, 
  bulbimg:{
    top: 10,
    left: 15,
    height: 100,
    width: 120
  },
  laptopimg:{
    top: 20,
    left: 15,
    height: 80,
    width: 120
  }, 
  tvimg:{
    top:20,
    left: 10,
    height: 80,
    width: 130
  },
  airconimg:{
    top: 10,
    left: 15,
    height: 100,
    width: 120
  }, 
  ironimg:{
    top: 10,
    left: 15,
    height: 100,
    width: 100
  },
  ricecookerimg:{
    top: 10,
    left: 30,
    height: 95,
    width: 90
  }, 
  monitorimg:{
    top: 10,
    left: 25,
    height: 100,
    width: 100
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
  container: {
    flex: 1,
    backgroundColor: '#EFECE1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height:1100
  },
  calcButton: {
    backgroundColor: '#DCB900',
    height: 40,
    width: 130,
    borderRadius: 15,
    textAlign:'center',
    left: 130,
    top: 610
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
    paddingVertical: 8,
    paddingLeft: 20,
    paddingRight: 50,
    borderRadius: 15,
    marginTop: 50,
    marginLeft: 10
},


});