import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,Dimensions,TextInput} from 'react-native';
import { color } from 'react-native-reanimated';


export function CustomRegistrationTextBoxWithImage({ customplaceholder, customDrawableImage, customUnderlineColor, isSecureEntryFlag, textValue, ChangeText, isEditableFlag }){
 return (
   
      <View style = {{flex:1}}>
        <View style={GlobalStyle.getCustomStyle(customUnderlineColor).SectionStyle}>
          <TextInput
              editable = {isEditableFlag}
              autoCorrect= {false}
              placeholder={customplaceholder}
              underlineColorAndroid="transparent"
              placeholderTextColor = '#444'
              style = {{fontSize: 17}}
              onChangeText = {ChangeText}
              value= {textValue}
          />
          <Image 
            source={customDrawableImage}
            style={GlobalStyle.getCustomStyle(null).ImageStyle}
            />
        </View>
      </View>
    );
  }

 
 




export default class GlobalStyle {
    static getCustomStyle(underLineColor) {
        return StyleSheet.create({

            SectionStyle: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: .5,
                borderBottomColor: underLineColor,
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                height: 40,
                marginLeft: 30,
                marginBottom: 30,
                marginEnd: 30,
            },
            
            ImageStyle: {
                marginEnd: 10,
                height: 10,
                width: 10,
                marginStart: 0,
                alignItems: 'center',
                resizeMode: 'contain'
            },
        
        });
    }
}