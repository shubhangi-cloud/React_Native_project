import React from 'react';
import {Text,View,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function CustomButton({buttonText,customBackColor,textcolor,
    pressHandler,startMargin,
    endMargin,cornerRadius,height,vbottom}) {
    return(
        <View style={GlobalStyle.getCustomStyle(
          null,
          null,
          null,
          null,
          startMargin,
          endMargin,
          null,
          vbottom).BtnView}>
            <View style={GlobalStyle.getCustomStyle(null,null,null,customBackColor,startMargin,endMargin,cornerRadius,height,null).BtnStyle}>
                <TouchableOpacity onPress={pressHandler}>
                   <Text style={GlobalStyle.getCustomStyle(null,textcolor,null,null).BtnTextStyle}>{buttonText}</Text>
                </TouchableOpacity>
            </View>    
        </View>
    );
}




export default class GlobalStyle {
static getCustomStyle(size,fntcolor,fntstyle,bckcolor,startMargin,endMargin,cornerRadius,height,vbottom) {
return StyleSheet.create({
 BtnView: {
        alignItems: 'center',
       // marginStart: startMargin,
       // marginEnd: endMargin,
       // position: 'absolute',
        // bottom: vbottom,
        //marginLeft: '20%',
        //marginRight: '20%',
        bottom: 0,
    },

    BtnStyle: {
        backgroundColor: bckcolor,
        height: height,
        marginStart: startMargin,
        marginEnd: endMargin,
        justifyContent: 'center',
        width: screenWidth/1.5,
        borderRadius: cornerRadius,
    },
    
    BtnTextStyle: {
        color: fntcolor,
        fontSize: 17,
        borderRadius: cornerRadius,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontFamily:'SFProText-Regular',
    },
});
}
}
