
import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,Dimensions,TextInput} from 'react-native';
export function CustomTextBoxWithImage({ customplaceholder, customDrawableImage,customBgColor, customUnderlineColor, isSecureEntryFlag, textValue, ChangeText, isEditableFlag=true }){
 return (
      <View >
        <View style={GlobalStyle.getCustomStyle(customBgColor, customUnderlineColor).SectionStyle}>
          <TextInput
              editable = {isEditableFlag}
              autoCorrect= {false}
              placeholder={customplaceholder}
              underlineColorAndroid="transparent"
              placeholderTextColor = '#808080'
              style = {{marginLeft:10,fontSize: 16}}
              secureTextEntry={isSecureEntryFlag}
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
    static getCustomStyle(customBgColor,underLineColor) {
        return StyleSheet.create({

            SectionStyle: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: .5,
                borderRadius: 10,
                backgroundColor:customBgColor,
                borderColor: underLineColor == undefined ? 'transparent': underLineColor,
                height: 40,
                marginLeft: 30,
                marginTop: 20,
                marginRight: 30,
            },
            
            ImageStyle: {
                marginEnd: 10,
                height: 20,
                width: 20,
                resizeMode: 'contain'
            },
        
        });
    }
}


	
