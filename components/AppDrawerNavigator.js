import React from 'react';
import {createDrawerNavigator, CreateDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './appTabNavigator';
import {CustomSideBarMenu} from './CustomSideBarMenu';
import SettingScreen from '../screens/settingScreen';

export const AppDrawerNavigator= createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    },
    Setting: {
        screen: SettingScreen
    }
},
{
    contentComponent: CustomSideBarMenu
},
{
    initialRouteName:'Home'

})