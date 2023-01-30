import { Image, Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ReportCard(props) {
   const navigation = useNavigation();
 
    return (
      
        <View style={styles.grid}>
            <TouchableOpacity 
            >
            <Image style={styles.img} source = {props.image}/>            
            <Text >Name: { props.devName }</Text>
            <Text >No. of Hours: { props.noOfHours }</Text>
            <Text >No. of Devices: {props.noOfDevices}</Text>
            <Text >Total KW: {props.calculate}</Text>
            <Text>Possible bill per device: ₱{props.perDev}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditDevice', { device: props.devName })}>
              <Text style={{fontWeight:'bold', bottom:88, left:289, textDecorationLine:'underline'}}>Edit</Text>
            </TouchableOpacity>
            </TouchableOpacity>
        </View>
        
        
        
        
    )
}

export default ReportCard
const styles = StyleSheet.create({
    grid:{
        backgroundColor: "#F8D866",
        borderRadius: 10,
        width:330,
        height:95,
        marginLeft: '8%',
        marginTop:'5%',
        paddingLeft:10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap",
        textAlign:'center',
    },
  
})