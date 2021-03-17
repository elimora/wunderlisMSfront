import React from 'react';
import { StyleSheet, View, TextInput } from "react-native";


export default function Input({style,...props}){
    return(
    <TextInput {...props} style={[styles.input,style]}/>
    ); 
    
}

const styles=StyleSheet.create({

    input:{
       backgroundColor:'#ccc', 
       width:'100%', 
       marginVertical:20, 
       padding:20, 
       borderRadius:8
    }
}); 