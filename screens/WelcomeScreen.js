import React, { Component } from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';

export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state={ emailId: '', password: ''}
    }

    userSignup= (emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert("User added successfully")
        })
        .catch(function(error){
            var errorCode= error.code;
            var errorMessage= error.message;
            return Alert.alert(errorMessage)
        })
    }

    userLogin= (emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("User successfully logged in")
        })
        .catch((error)=>{
            var errorCode= error.code;
            var errorMessage= error.message;
            return Alert.alert(errorMessage)
        })
    }
    render(){
        return(
            <View style= {StyleSheet.container}> 
                <View>
                    <Text style= {styles.title}> Book Santa</Text>
                </View>
                <TextInput
                style= {styles.loginBox}
                placeholder= "abc@example.com"
                keyboardType= "email-address"
                onChangeText= {(Text)=>{
                    this.setState({
                        emailId: text
                    })
                }}
                />
                 <TextInput
                style= {styles.loginBox}
                secureTextEntry= {true}
                placeholder= "Enter Password"
                onChangeText= {(Text)=>{
                    this.setState({
                        password: text
                    })
                }}
                />
                <TouchableOpacity style= {[styles.Button,{marginTop:20, marginBottom: 20}]}
                    onPress={()=>{
                        this.userLogin(this.state.emailId, this.state.password)
                    }}>
                <Text style= {styles.ButtonText}> Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style= {styles.Button}
                onPress= {()=>{
                    this.userSignup(this.state.emailId, this.state.password)
                }}>
                <Text style= {styles.buttonText}> Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
} 