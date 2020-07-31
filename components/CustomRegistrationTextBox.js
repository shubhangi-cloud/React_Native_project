import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,Dimensions,TextInput} from 'react-native';


export function CustomRegistrationTextBox({customplaceholder,customUnderlineColor,isSecureEntryFlag,ChangeText,textValue}){
 return (
   
      <View style = {{flex:1}}>
        <View style={GlobalStyle.getCustomStyle(customUnderlineColor).SectionStyle}>
        <TextInput
              autoCorrect= {false}
              placeholder={customplaceholder}
              underlineColorAndroid="transparent"
              secureTextEntry={isSecureEntryFlag}
              placeholderTextColor = '#444'
              style = {{fontSize: 17}}
              onChangeText = {ChangeText}
              value={textValue}
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
        });
    }
}