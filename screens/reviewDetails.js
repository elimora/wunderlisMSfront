import React from 'react'; 
import { StyleSheet,View,Text, Image } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../SHARED/card";

export default function ReviewDetails ({navigation}){
   
    return(
        <View style={globalStyles.container}>
           <Card>
           <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <View style={styles.rating}>
                <Text>Wolderlist Ratin</Text>
            </View>
           </Card>
        </View>
    );
}

const styles=StyleSheet.create({
    rating:{
        flexDirection:'row', 
        justifyContent:'center',
        paddingTop:16, 
        marginTop:16, 
        borderTopWidth:1, 
        borderTopColor:'#eee'
    }
}); 

