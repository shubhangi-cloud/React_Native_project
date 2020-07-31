import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,Dimensions,TextInput} from 'react-native';


export function CustomTextBoxWithoutImage({customplaceholder,customBgColor,customUnderlineColor,isSecureEntryFlag,ChangeText,textValue}){
 return (
        <View style={GlobalStyle.getCustomStyle(customBgColor,customUnderlineColor).SectionStyle}>
        <TextInput
              autoCorrect= {false}
              placeholder={customplaceholder}
              underlineColorAndroid="transparent"
              secureTextEntry={isSecureEntryFlag}
              placeholderTextColor = '#808080'
              style = {{marginLeft:10,fontSize: 16}}
              onChangeText = {ChangeText}
              value={textValue}
          />
        </View>
    );
  }


export default class GlobalStyle {
    static getCustomStyle(customBgColor,underLineColor) {
        return StyleSheet.create({
            SectionStyle: {
              justifyContent:'center',
              borderWidth: .5,
              backgroundColor: customBgColor,
              borderRadius: 10,
              borderColor: underLineColor == undefined ? 'transparent': underLineColor,
              height: 40,
              marginLeft: 30,
              marginTop:20,
              marginRight: 30,
            },
        });
    }
}