import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import firebase from 'firebase';
import myHeader from '../components/myHeader';
import SwipeableFlatList from '../components/swipeableFlatlist';

export default class NotificationScreen extends Component{
    constructor(props){
    super(props)
    this.state={
        userId: firebase.auth().currentUser.email,
        allNotifications:[] 
    }
    this.notificationRef= null
}

componentDidMount(){
    this.getNotifications()
}

componentWillUnmount(){
    this.notificationRef()
}

keyExtractor= (item, index)=>index.toString();
renderItem= ({ item, index})=>{
    return( 
        <ListItem
        key={index}
        leftElement={<Icon name= "book" type= "font-awesome" color='#696969' />}
        title={item.book_name}
        titleStyle={    {color:'black', fontweight:'bold'}  }
        subtitle={item.message}
        bottomDivider
        />
    )
}

getNotifications= ()=>{
    this.notificationRef= db.collection("all_notifications")
    .where("notification_status", "==", "unread")
    .where("targetted_userId", "==", this.state.userId)
.onSnapshot(snapshot=>{
    var allNotifications= [];
    snapshot.docs.map(doc=>{
        var notification= doc.data()
        notification["doc_id"]= doc.id
        allNotifications.push(notification)
    })
    this.setState({
        allNotifications: allNotifications
    })
})
}
}