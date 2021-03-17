import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import Error from '../SHARED/Error';
import FilledButton from '../SHARED/FilledButton';
import Heading from '../SHARED/HeadingLogin';
import Input from '../SHARED/Input';
import TextButton from '../SHARED/TextButton';


export default function Register(){
    return(
        <View style={styles.container}>
           <Heading style={styles.title}>Register WunderListMS</Heading> 
           <Error error={''}/>
           <Input style={styles.input} placeholder={'Email'} keyboardType={'email-address'}/>
           <Input style={styles.input} placeholder={'Password'} secureTextEntry />
           <FilledButton 
            title={'Register'} 
            style={styles.loginButton}
            onPress={()=>{}}
            />
            
        </View>
    );
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        paddingTop:120,
        alignItems:'center', 
        padding:20, 
    }, 
    input:{
        marginVertical:8
    }, 
    title:{
        marginBottom:48
    }, 
    loginButton:{
        marginVertical:32
    }
}); 