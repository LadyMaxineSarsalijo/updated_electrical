import { Image, Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

function DeviceCard(props) {
   const navigation = useNavigation();
    
    return (
      <ScrollView>
        <View style={styles.grid}>
            <TouchableOpacity 
            >
            <Image style={styles.img} source = {props.image}/>            
            <Text >Name: { props.devName }</Text>
            </TouchableOpacity>
        </View></ScrollView>
    )
}

export default DeviceCard
const styles = StyleSheet.create({
    grid:{
        backgroundColor: "#F8D866",
        borderRadius: 10,
        width:150,
        height:130,
        marginLeft: '11%',
        marginTop:'5%',
        marginBottom:'10%',
        alignItems:'center'
    },
    img:{
        height:100,
        width: 100,
        paddingBottom:15

    },

})