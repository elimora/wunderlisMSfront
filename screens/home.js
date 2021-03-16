import React, { useState } from 'react'; 
import { StyleSheet,View,Text, TouchableOpacity,Modal,
TouchableWithoutFeedback, Keyboard} from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { globalStyles } from "../styles/global";
import Card from "../SHARED/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewDetails from "./reviewForm";
import ReviewForm from './reviewForm';

export default function Home({navigation}){
 
 const [modalOpen,setModalOpen]=useState(false)   

 const [reviews,setReviews]=useState([
     {title:'Ir de Compras', rating:5, body:'debo comprar comida de la semana', key:1},
     {title:'tesis', rating:4, body:'Preparar capitulo 3 y 4 para la entrega', key:2},
     {title:'Comprar gasolina', rating:3, body:'estar pendiente de la cola', key:3},
 ]); 

 const addReview=(review)=>{
     review.key=Math.random().toString(); 
     setReviews((currentReviews)=>{
        return [review, ...currentReviews]; 
     }); 
     setModalOpen(false); 
 }

    return(
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                 <View style={styles.modalContent}>
                   <MaterialIcons
                     name='close'
                     size={24}
                     style={{...styles.modalToggle,...styles.modalClose}}
                     onPress={()=>setModalOpen(false)}
                />
                    <ReviewForm addReview={addReview}/>
                 </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={()=>setModalOpen(true)}
            />

           <FlatList
            data={reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                   <Card>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                   </Card>
                </TouchableOpacity>
            )}
           /> 
        </View>
    );
}

const styles=StyleSheet.create({
    modalToggle:{
        marginBottom:10, 
        borderWidth:1,
        borderColor:'#f2f2f2', 
        padding:10, 
        borderRadius: 10, 
        alignSelf: 'center'
    }, 
    modalClose:{
        marginTop:20, 
        marginBottom:0, 
    },
    modalContent:{
        flex:1
    }
})