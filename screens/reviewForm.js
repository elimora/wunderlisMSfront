import  React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Form, Formik } from 'formik';
import * as yup from 'yup'; 
import FlatButton from "../SHARED/button";

//el esquema de validacion puede estar fuera
const reviewSchema=yup.object({
    title: yup.string()
    .required()
    .min(4), 
    body:yup.string()
    .required()
    .min(8),
    rating:yup.string()
    .required()
    .test('is-num-1-5','La prioridad debe estar entre 1 y 5', (val)=>{
        return parseInt(val) < 6 && parseInt(val) > 0; 
    })
}); 


export default function ReviewForm({addReview}){
    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title:'', body:'', rating:''}}
                validationSchema={reviewSchema}
                onSubmit={(values)=>{
                    addReview(values); 
                }}
            >
                {(props)=>(
                    <View>
                        <TextInput
                            multiline minHeigth={60}
                            style={globalStyles.input}
                            placeholder='Titulo de la tarea'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

                        <TextInput
                             multiline minHeigth={60}
                            style={globalStyles.input}
                            placeholder='Escribe la tarea'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

                          <TextInput
                            style={globalStyles.input}
                            placeholder='Prioridad de la tarea (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                        <FlatButton text='Guardar' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    ); 
}