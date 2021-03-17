import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import LoginStack from "./loginStack";

const RootDrawerNavigator=createDrawerNavigator({
    Login:{
        screen :LoginStack
    },
    
    Home:{
        screen: HomeStack,
    }, 
    About:{
        screen:AboutStack,
    }, 

}); 

export default createAppContainer(RootDrawerNavigator)