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
            <Text style={globalStyles.titleText}>Nuestra WunderListMS App, es una aplicación
                diseñada para organizar tus tareas. Es posible ordenar las miasmas 
                 ya que puedes listar, agregar, actualizar y borrar las actividades 
                 pendientes para llevar un control fectivo de tu itinerario. También cuenta con un sistema de calificación de prioridades que te ayudan a recordar que tan urgente es la tarea.Esta 
                 es la filosofía de nuestro WunderListMS que ahora también es tuya, 
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

