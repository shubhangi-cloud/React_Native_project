import React, {Component} from 'react';
import { Image,StyleSheet }  from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator } from 'react-navigation-stack';
import { createAppContainer,StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home/HomeScreen';
import Notification from '../screens/Notification/Notification'; 
import Search from '../screens/Search/Search';
import MyProfile from '../screens/MyProfile/MyProfile';
import EventDetails from '../screens/Events/EventDetails';
import Events from '../screens/Events/Events';
import ManageMyAccount from '../screens/MyProfile/ManageMyAccount';


export const EventStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    }
  },
  EventDetails: {
    screen : EventDetails,
     navigationOptions: {
       headerShown: false,
       gestureEnabled: false,
     }
   },
   Events: {
    screen : Events,
     navigationOptions: {
       headerShown: false,
       gestureEnabled: false,
     }
   },
})

export const MyProfileStack = createStackNavigator({
  MyProfile: {
    screen: ManageMyAccount,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    }
  },
  ManageMyAccount: {
    screen : ManageMyAccount,
     navigationOptions: {
       headerShown: false,
       gestureEnabled: false,
     }
   },
})

EventStack.navigationOptions = ({ navigation }) => {

  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if ( routeName == 'EventDetails' ) {
      tabBarVisible = false
  }

  return {
      tabBarVisible,
  }
}

MyProfileStack.navigationOptions = ({ navigation }) => {

  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if ( routeName == 'MyProfile' ) {
      tabBarVisible = false
  }
  return {
      tabBarVisible,
  }
}

export const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen:EventStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
          ? require('../assets/images/Homea.png')
          : require('../assets/images/Homei.png')
          return(
            <Image 
              source= {image} 
              style={GlobalStyle.getCustomStyle().iconImageStyle}
            />
          )
        }
      },
    },
    

    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
           ? require('../assets/images/searcha.png')
          : require('../assets/images/searchi.png')
          return(
            <Image 
              source= {image} 
              style={GlobalStyle.getCustomStyle().iconImageStyle}
            />
          )
        }
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
       
           ? require('../assets/images/notificationa.png')
          : require('../assets/images/notificationi.png')
          return(
            <Image 
              source= {image} 
              style={GlobalStyle.getCustomStyle().iconImageStyle}
            />
          )
        }
      }
    },
    MyProfile: {
      screen: MyProfileStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const image = focused
          ? require('../assets/images/usera.png')
          : require('../assets/images/useri.png')
          return(
            <Image 
              source= {image} 
              style={GlobalStyle.getCustomStyle().iconImageStyle}
            />
          )
        }
      }
    },
   
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#DF0000',
      inactiveTintColor: '#000',
    }
  }
);

export class GlobalStyle {
  static getCustomStyle() {
      return StyleSheet.create({
        iconImageStyle: {
          height:25,
          width: 25,
          resizeMode:'contain',
        }
    });
  }
}

const HomeStack = createAppContainer(bottomTabNavigator);

export default HomeStack;