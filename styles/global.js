import { StyleSheet } from "react-native";


export const globalStyles= StyleSheet.create({
    container:{
        flex:1, 
        padding:40
    }, 
    titleText:{
        fontSize:18,
        fontStyle:'italic', 
        color: '#333'
    }, 
    paragraph:{
        marginVertical:8, 
        lineHeight: 20
    }, 
    input:{
        borderWidth:1, 
        borderColor:'#ddd',
        padding:10,
        fontSize:18,
        borderRadius:6
    }, 
    errorText:{
        color:'crimson', 
        fontWeight:'bold',
        marginBottom: 10, 
        marginTop:6, 
        textAlign:'center'
    }
}); 

export const images = {
    ratings:{
        '1': require('../assets/rating1.png'),
        '2': require('../assets/rating2.png'),
        '3': require('../assets/rating3.png'),
        '4': require('../assets/rating4.png'),
        '5': require('../assets/rating5.png'),
    }
}