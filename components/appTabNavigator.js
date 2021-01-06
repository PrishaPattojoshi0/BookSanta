import React from 'react';
import {Image}from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookRequestScreen from '../screens/bookRequestScreen';
import BookDonateScreen from '../screens/bookDonateScreen';

export const AppTabNavigator= createBottomTabNavigator({
    DonateBooks: {
        screen: bookDonateScreen,
        navigationOptions: {
            tabBarIcon: <Image source= {require("../assets/request-list.png")}/>,
            tabBarLabel: "Donate Books"
        }
    },
        RequestBooks: {
            screen: bookRequestScreen,
            navigationOptions: {
                tabBarIcon: <Image source= {require("../assets/request-book.png")}/>,
                tabBarLabel: "Request Book"
            }
        }
})