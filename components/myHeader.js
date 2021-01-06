import React, {Component} from 'react';
import {Header, Icon} from 'react-native-elements';
import {Text, View, StyleSheet} from 'react-native';

const myHeader= props=>{
    return(
        <Header
        centerComponent={{text: props.title,styles:{color:'#90A5A9', fontSize: 20, fontWeight: 'BOLD'}}}
        backgroundColor= "eaf8fe"
        />
    )
}

export default myHeader