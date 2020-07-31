import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,Dimensions,TextInput} from 'react-native';



  export class CustomTextBox extends Component{

    

    render(){
      return (
   
        <View>
         
          <View style={GlobalStyle.getCustomStyle(this.props.customUnderlineColor,this.props.vmarginBottom).SectionStyle}>
   
          <Image source={this.props.customDrawableImage} style={GlobalStyle.getCustomStyle(
            null).ImageStyle} />
   
            <TextInput
                autoCorrect= {false}
                style={{flex:1,fontSize:17}}
                placeholder={this.props.customplaceholder}
                underlineColorAndroid="transparent"
                secureTextEntry={this.props.isSecureEntryFlag}
                placeholderTextColor={this.props.placeholderColor}
                onChangeText = {this.props.onChangeText}
                value={this.props.textValue} 
                
            />
   
          </View>
   
        </View>
      );
    }
  }
 
 




export default class GlobalStyle {
static getCustomStyle(underLineColor,vmarginBottom) {
return StyleSheet.create({

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: .5,
    borderBottomColor: underLineColor,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    height: 40,
    marginStart: 30,
    marginEnd: 30,
    marginBottom:vmarginBottom,
},
 
ImageStyle: {
    marginEnd: 10,
    height: 19,
    width: 25,
    marginStart: 0,
    resizeMode:'contain',
    alignItems: 'center'
},
 
});
}
}
