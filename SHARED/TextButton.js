import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";


export default function TextButton({title, style, onPress}){
    return(
        <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    ); 
    
}

const styles=StyleSheet.create({

    container:{
      
       width:'100%', 
       alignItems:'center',
       marginVertical:20, 
       justifyContent:'center',
     
       borderRadius:8
    }, 
    text:{
        color:'coral', 
        fontWeight:'500',
        fontSize:14, 
    }
}); 