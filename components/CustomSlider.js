import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { width } = Dimensions.get('window');
const height = width * 0.8;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class CustomSlider extends Component {
 
   constructor(props){
    super(props)

    this.state={
      eventImgHeight: screenWidth*0.60,
      eventImgWidth: screenWidth,
      imgURL: '',
    }
    
   }
 
 
  render() {
      return (
        <View style={styles.scrollContainer}>
        
          <ScrollView
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            horizontal={true}>


          {this.props.postsData.map(url => (

            // console.log("height:: "+url['imageHeight']),
            // console.log("id:: "+url['Media-Id']),
            // console.log("width:: "+url['imageWidth']),


            url['Media-Type'] == 1  ? 
            
            <Image source={{uri:  url['Media-Data']}} style={ GlobalStylePosts.getCustomStyle(parseInt(url['imageHeight']),parseInt(url['imageWidth'])).eventImgStyle} />
            :

            <Video source={{uri:  url['Media-Data']}}
            onEnd={this.onEnd}
            onLoad={this.onLoad}
            onLoadStart={this.onLoadStart}
            onProgress={this.onProgress}
            ref={(ref) => {
              this.player = ref
            }}
            style={GlobalStyle.getCustomStyle({rwidth: parseInt(url['imageWidth']),rheight: parseInt(url['imageHeight'])}).backgroundVideo}
          /> 


          ))}

          </ScrollView>
        </View>
      );
    }
}



const styles = StyleSheet.create({
  scrollContainer: {
    
  },
 

  backgroundVideo: {
    height: 400,
    width: screenWidth,
    resizeMode: 'contain',
  },


});


//******************************************
    /* Create Class For Custom StyleSheet */
// *****************************************

export class GlobalStylePosts {
  static getCustomStyle(eventImgHeight,eventImgWidth) {
    return StyleSheet.create({
      eventImgStyle: {
          height: eventImgWidth == eventImgHeight ? screenWidth : eventImgHeight,

          width: screenWidth,

          resizeMode:   eventImgWidth < screenWidth ? 'stretch' : 
                        eventImgWidth > screenWidth ? 'stretch' : eventImgWidth == eventImgHeight ? 'stretch' : 'contain',


      },
    })
  }

}






export  class GlobalStyle {
  static getCustomStyle({rwidth,rheight}) {
  return StyleSheet.create({
  
    scrollContainer: {
      height: rheight,
    },


    image: {
      height: (rheight * screenHeight)/(rwidth),
      width: rwidth,
      resizeMode:'contain',
    },
  
    backgroundVideo: {
      height: (rheight * screenHeight)/(rwidth),
      width: rwidth,
      resizeMode: 'contain',
    },
  
    


  });
  }
  }