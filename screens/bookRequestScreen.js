import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView, } from 'react-native';
import myHeader from '../components/myHeader';
import db from '../config.js';
import firebase from 'firebase';

export default class BookRequestScreen extends Component{
    constructor(){
        super()
        this.state= {
            userId: firebase.auth().currentUser.email,
            bookName: "",
            reasonToRequest: ""
        }
    }

    addRequest=(bookName, reasonToRequest)=>{
        var userId= this.state.userId
        var randomRequestId= this.createUniqueId()
            db.collection('requested_books').add({
                'user_id': userId,
                'book_name': bookName,
                "reason_to_request": reasonToRequest,
                "request_id": randomRequestId
            }),
            this.setState({
                bookName: '',
                reasonToRequest:''
            })
            return Alert.alert("Book Requested Successfuly")
    }
 render(){
     return(
        <View style= {{flex: 1}}>
            <MyHeader title= "Request Book"/>
            <KeyboardAvoidingView style= {styles.keyboardStyle}> </KeyboardAvoidingView>
            <TextInput style= {styles.formTextInput}
            placeholder= {"Enter Book Name"}
            onChangeText= {(text)=>{
                this.setState({bookName: text})
            }}
            value= {this.state.bookName}
            />
            <TextInput style= {[styles.formTextInput, {height: 300}]}
            multiLine
            numberOfLines= {8}
            placeholder= {"Why Do You Need The Book?"}
            onChangeText= {(text)=>{
                this.setState({reasonToRequest: text})
            }}
            value= {this.state.reasonToRequest}
            />
            <TouchableOpacity style= {styles.button}> 
                <Text> Request </Text>
            </TouchableOpacity>
        </View>
     )
 }
} 