import React, { Component } from 'react';
import {Text,View,StyleSheet,Dimensions,TouchableOpacity, Alert,Image} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export class CustomSwitch extends Component{

    
    constructor(props){
        super(props);

        this.state={
            buttonToggled: false,
            switchPos: 'flex-start',
            switchoBgColor: '#da7573', //inital bg color to the first switch button disabled.
            switchtBgColor: '#ededed', //initial bg color to the second switch button enabled.
            switchttextColor: '#000000', //inital text color to the second switch button disabled.
            switchotextColor: '#ffffff', //initial text color to the first switch button enabled.
            switchoimage: this.props.optoimg,
            switchtimage: this.props.opttimg,
        }
    }
    

    toggleButton = () => {

        if(this.state.buttonToggled){

            // first option selected..
            this.setState({
                // switchPos: 'flex-end',
                buttonToggled: false,
                switchoBgColor: '#f4a8a6', //lighter red color to the first btn of switch background
                switchtBgColor: '#ededed',
                switchttextColor: '#000000',
                switchotextColor: '#ffffff',
                switchoimage: this.props.optoimg,
                switchtimage: this.props.opttdimg,
            });

                this.props.getSwitchData();

        }else{
             // second option selected..
            this.setState({
                // switchPos: 'flex-start',
                buttonToggled: true,
                switchoBgColor: '#ededed',
                switchtBgColor: '#f4a8a6', //lighter red color to the second btn of switch background
                switchttextColor: '#ffffff',
                switchotextColor: '#000000',
                switchoimage: this.props.optodimg,
                switchtimage: this.props.opttimg,
            });

            this.props.getSwitchData();

        }

        if(this.state.buttonToggled){
            this.setState({selectedSwitch: this.props.optionoText})
        }else{
            this.setState({selectedSwitch: this.props.optiontText})
        }

    
    }
   

    state={
        buttonToggled: Boolean,
        switchPos: null,
        switchoBgColor: String,
        switchtBgColor: String,
        switchttextColor: String,
        switchotextColor: String,
        switchoimage: null,
        switchtimage: null,
        selectedSwitch: String,
    }



    componentDidMount(){
        this.setState({
            buttonToggled: false,
            switchoBgColor: '#f4a8a6', //lighter red color
            switchtBgColor: '#ededed',
            switchttextColor: '#000000', 
            switchotextColor: '#ffffff',  // first option selected..
            switchoimage: this.props.optoimg,
            switchtimage: this.props.opttimg,
            selectedSwitch: this.props.optionoText,
        })
        
    }




    render() {
    return(
    <View>

        <TouchableOpacity onPress={this.toggleButton}>

                <View style={[styles.switchContainer]}>


                {/* first option button of the switch */}
                <View style={[styles.switchoStyle,{backgroundColor: this.state.switchoBgColor}]}>
                    <Image source={this.state.switchoimage} style={styles.switchLogo}></Image>
                     <View style={styles.switchTextStyle}>
                     <Text style={{color: this.state.switchotextColor}}>{this.props.optionoText}</Text>
                    </View>
                </View>


                {/* second option button of the switch */}
                <View style={[styles.switchtStyle,{backgroundColor: this.state.switchtBgColor}]}>
                    <Image source={this.state.switchtimage} style={styles.switchLogo}></Image>
                     <View style={styles.switchTextStyle}>
                     <Text style={{color: this.state.switchttextColor}}>{this.props.optiontText}</Text>
                    </View>
                </View>
               

                </View>
        </TouchableOpacity>

    </View>
    );
    }

}

const styles = StyleSheet.create({
    switchContainer: {
        height: 36,
        backgroundColor: '#f4a8a6',
        marginStart: 22,
        marginEnd: 22,
        borderRadius: 10,
        flexDirection: 'row',
       
    },  

    // style for first switch container.
    switchoStyle:{
        height: 36,
        width: '50%',
        borderRadius: 8,
        flexDirection: 'row',
        
    },

    switchTextStyle:{
        alignSelf: 'center',
        marginStart: 30,
    },


    // style for second switch container.
    switchtStyle:{
        height: 36,
        width: '50%',
         borderRadius: 8,
        flexDirection: 'row',
    },

    switchLogo:{
        height: 24,
        width: 24,
        borderRadius: 12,
        alignSelf: 'center',
        marginStart: 10,
    },

});



export default class GlobalStyle {
    static getCustomStyle(vbottom) {
    return StyleSheet.create({
        switchContainer: {
            height: 36,
            backgroundColor: '#f4a8a6',
            marginStart: 22,
            marginEnd: 22,
            borderRadius: 10,
            flexDirection: 'row',
            bottom: vbottom,
        },  
    
        // style for first switch container.
        switchoStyle:{
            height: 36,
            width: '50%',
            borderRadius: 8,
            flexDirection: 'row',
            
        },
    
        switchTextStyle:{
            alignSelf: 'center',
            marginStart: 30,
        },
    
    
        // style for second switch container.
        switchtStyle:{
            height: 36,
            width: '50%',
             borderRadius: 8,
            flexDirection: 'row',
        },
    
        switchLogo:{
            height: 24,
            width: 24,
            borderRadius: 12,
            alignSelf: 'center',
            marginStart: 10,
        },
    
    });
    }
    }
    