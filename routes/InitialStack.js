import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Welcome from '../screens/Welcome/Welcome';
import Register from '../screens/Register/Register';
import Login from '../screens/Login/Login';
import SlideShowAll from '../screens/SlideShow/SlideShowAll';
import CityViewComponent from '../screens/CityViewComponent';
import CountrySelection from '../screens/CountrySelection';
import HomeStack from '../routes/HomeStack';
const WelcomStack =createStackNavigator({
    
    SlideShow:{
        screen:SlideShowAll,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false,
            },  
        },
        Welcome : {
            screen:Welcome,
            navigationOptions: {
                headerShown: false,
                gestureEnabled: false,
            },      
        },
        Register :{
        screen:Register,
        navigationOptions: {
            headerShown: false,
            gestureEnabled: false,
        },  
        },
        Login :{
            screen:Login,
            navigationOptions: {
                headerShown: false,
                gestureEnabled: false,
            }, 
        },
        CityViewComponent:{
            screen:CityViewComponent,
            navigationOptions: {
                headerShown: false,
                gestureEnabled: false,
            }, 
        },
        CountrySelection:{
            screen:CountrySelection,
            navigationOptions: {
                headerShown: false,
                gestureEnabled: false,
            }, 
        },
        HomeStack:{
            screen:HomeStack,
            navigationOptions: {
                headerShown: false,
                gestureEnabled: false,
            }, 
        },

    },
    {
        initialRouteName: 'SlideShow',

    },
);

const welcomscreenStack = createAppContainer(WelcomStack);
export default welcomscreenStack;