import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import  Header  from "../SHARED/header";
import React from "react";


const screens={
    Home:{
        screen: Home,
        navigationOptions:({navigation})=>{
            return{ 
                headerTitle:()=><Header navigation={navigation} title='Home Wonderlist' />
            }
        }
    }, 
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title:'ReviewDetails miWonder',
            
        }
    }
}

const HomeStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{backgroundColor:'coral',height:110}
    }
}); 

export default HomeStack; 