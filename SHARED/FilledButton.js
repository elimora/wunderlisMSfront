import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";


export default function FilledButton({title, style, onPress}){
    return(
        <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    ); 
    
}

const styles=StyleSheet.create({

    container:{
       backgroundColor:'coral', 
       width:'100%', 
       alignItems:'center',
       marginVertical:20, 
       justifyContent:'center',
       padding:20, 
       borderRadius:8
    }, 
    text:{
        color:'white', 
        fontWeight:'500',
        fontSize:16, 
    }
}); 