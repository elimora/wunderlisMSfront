import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/login";
import Register from "../screens/register";
import  Header  from "../SHARED/header";
import React from "react";


const screens={
  
    Login:{
        screen: Login,
        navigationOptions:({navigation})=>{
            return{ 
                headerTitle:()=><Header navigation={navigation} title='Home Wunderlist' />
            }
        }
    }, 
    Register:{
        screen: Register,
        navigationOptions:{
            title:'ReviewDetails miWunderlist',
            
        }
    }
}

const HomeStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{backgroundColor:'coral',height:110}
    }
}); 

export default LoginStack;   