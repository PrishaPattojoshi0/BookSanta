import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import BookDonateScreen from '../screens/bookDonateScreen';
import ReceiverDetailScreen from '../screens/receiverDetailScreen';

export const AppStackNavigator= createStackNavigator({
    BookDonateList: {
        screen: BookDonateScreen,
        navigationOptions: {
            headerShown: false
        }
    }, 
    ReceiverDetails: {
        screen: ReceiverDetailScreen,
        navigationOptions: {
            headerShown: false
        }
    },
},
{initialRouteName: 'BookDonateList'
})