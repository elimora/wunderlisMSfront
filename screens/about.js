import React from 'react'; 
import { StyleSheet,View,Text, Image } from "react-native";

import { globalStyles } from "../styles/global";

export default function About(){
    return(
        <View style={globalStyles.container}>
            <View style={styles.rating}>
                <Text style={styles.rating} >Abouts:</Text>
                <Image style={styles.rating} source={require('../assets/wunderlist.jpg')}/>
            </View>
            <Text style={globalStyles.titleText}>WunderListMS App, es una aplicación
                diseñada para organizar tus actividades.Esta 
                 es la filosofía de nuestro administrador de tareas que ahora también es tuyo, 
                Bienvenidos...
            </Text>
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
        borderTopColor:'#eee', 
    },
    image:{
        
    }
}); 

