import React, {Component} from 'react';
import {Header, Icon, Badge} from 'react-native-elements';
import {Text, View, StyleSheet} from 'react-native';

const BellIconWithBadge= (props)=>{
    return(){
        <View>
        <Icon name= "bell" type= "font-awesome"  color= "#696969" size= {25}        
        onPress={()=>props.navigation.navigate('notifications')} />
        <Badge 
        value= "1"
        containerStyle={{position:'absolute', top:-4}}
        /> 
        </View>
    }
}




const myHeader= props=>{
    return(
        <Header
        leftComponent={<Icon name= "bars" type="font-awesome" color= "#696969" 
        onPress={()=>props.navigation.toggleDrawer()} /> }
        centerComponent={{text: props.title,styles:{color:'#90A5A9', fontSize: 20, fontWeight: 'BOLD'}}}
        backgroundColor= "eaf8fe"
        rightComponent={<BellIconWithBadge {...props} />       
    }
        />
    )
}

export default myHeader