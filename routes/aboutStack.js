import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import  Header  from "../SHARED/header";
import React from "react";



const screens={
    AboutWonder:{
        screen: About,
        navigationOptions:({navigation})=>{
            return{ 
                headerTitle:()=><Header navigation={navigation} title='About Wunderlist'/>
            }
        }
    }, 
}

const AboutStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{backgroundColor:'coral',height:110}
    }
}); 

export default AboutStack;