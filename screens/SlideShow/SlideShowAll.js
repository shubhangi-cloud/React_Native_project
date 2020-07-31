import React, { Component } from 'react'
import {ImageBackground,Dimensions } from 'react-native'
import SlideShow from './SlideShow';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default class SlideShowAll extends Component{
   render(){
    return (
        <ImageBackground
            source = {{ uri: 'https://i.pinimg.com/236x/03/c8/d9/03c8d93dc23693496dd99c19d7db4297.jpg'}}
            style={{ height: screenHeight*0.97,width:screenWidth}}
            resizeMode={'cover'}>
        <SlideShow 
            nextScreen = {() => this.props.navigation.navigate('Welcome')}
        /> 
        </ImageBackground>
        )
    }
}