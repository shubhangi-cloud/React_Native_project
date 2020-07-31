import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image, 
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';
import HomeStack from './routes/HomeStack';
import HomeScreen from './screens/Home/HomeScreen'
import InitialStack from "./routes/InitialStack";
import SlideShowAll from './screens/SlideShow/SlideShowAll';
export default function App()
{
  return (
    <InitialStack />
  )
}
