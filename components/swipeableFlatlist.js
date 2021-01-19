import React, {Component} from 'react';
import { Dimensions } from 'react-native';
import {View, Text} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {ListIcon} from 'react-native-elements';
import db from '../config.js';

export default class SwipeableFlatlist extends Component{
    constructor(){
        super(props)
        this.state= {allNotifications: this.props.allNotifications}
    }

    onSwipeValueChange= swipeData=>{
        var allNotifications= this.state.allNotifications
        const {key, value}= swipeData
        if(value < -Dimensions.get("window").width){
            const newData= [...allNotifications]
            this.updateMarkAsRead(allNotifications(key)) 
            newData.splice(key,1)
            this.setState({allNotifications: newData})       
        }
    }


    renderHiddenItem=()=>{
        <View style= {styles.rowback}>
            <View style= {[styles.backRightBtn, styles.backRightBtnRight]}>
                <Text style= {styles.backTextWhite}> </Text>
            </View>
        </View>
    }

    renderItem= data=>{
        <ListItem
        leftElement={<Icon name= "book" title= "font-awesome" color='#696969' />}
        title={data.item.book_name}
        titleStyle={{color: 'black', fontweight: 'bold'}}
        subtitle= {data.item.message}
        bottomDivider={}
        />
    }

    updateMarkAsRead= notification=>{
        db.collection("all_notifications")
        .doc(notification.doc_id)
        .update({notification_status: "read"})
    }
    render(){
        return(
            <View style= {styles.container}>
                <SwipeListView 
                disableRightSwipe
                data= {this.state.allNotifications}
                renderItem= {this.renderItem}
                renderHiddenItem={this.renderHiddenItem}
                rightOpenValue={-Dimensions.get('window').width}
                previewRowKey= {'0'}
                previewOpenValue= {-40}
                previewOpenDelay= {3000}
                onSwipeValueChange= {this.onSwipeValueChange}
                />
            </View>
        )
    }
}