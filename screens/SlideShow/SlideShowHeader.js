import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text,ImageBackground, Dimensions} from 'react-native';
    
//for responsive background image height
    let dimensions = Dimensions.get("window");
    let imageHeight = Math.round((dimensions.width) / 2);

const SlideShowHeader = () => {
   return (
      <View style={styles.imageContainer}>
        <ImageBackground source={{ uri: 'https://i.pinimg.com/236x/03/c8/d9/03c8d93dc23693496dd99c19d7db4297.jpg'}} style={{borderBottomLeftRadius:dimensions.width*0.5,
      borderBottomRightRadius:dimensions.width*0.5,height: dimensions.width*0.5, resizeMode: 'center'}}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/back.png')} 
            style={{alignContent: 'flex-start',marginTop:'15%',marginStart:30,height:'10%',width:'10%'}}/>
          </TouchableOpacity>
        </View>

        </ImageBackground>
      </View>
   )
}
export default SlideShowHeader


const styles = StyleSheet.create({
   imageContainer: {
       width: '100%',
      borderBottomLeftRadius:dimensions.width*0.5,
      borderBottomRightRadius:dimensions.width*0.5,
      }
 });
