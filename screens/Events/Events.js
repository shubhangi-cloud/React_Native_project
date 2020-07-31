import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
    Platform,
    TextInput,
    TouchableWithoutFeedback,
    FlatList,
    ImageBackground,
    ScrollView,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import {CustomHeader} from '../../components/CustomHeader'

export function GetData ({items,navigate}) {

    return(
        <View style={styles.mainContainerStyle }>
            <TouchableOpacity onPress={navigate}>
                <ImageBackground 
                    source={items.profile_img}
                    style={styles.profileImgStyle }
                    imageStyle={{ borderTopLeftRadius: 15, 
                    borderTopRightRadius: 15,}}
                >
                    <Image
                        source={require('../../assets/images/verified.png')}
                        style={styles.profileIconStyle }
                    />
                </ImageBackground>
            </TouchableOpacity>
            <View style={styles.eventTitleViewStyle}>
                    <View style={{flex:1,}}>
                        <Text style={styles.eventTitleTextStyle}>{items.hallName}</Text>
                    </View>
                    <View style={{flex:0.2,flexDirection:'row'}}>
                        <Image
                            source={require('../../assets/images/likei.png')}
                            style={styles.likeandshearIconStyle }
                        />
                        <Image
                            source={require('../../assets/images/shear.png')}
                            style={styles.likeandshearIconStyle }
                        />
                    </View>
            </View>
            <View>
                    <Text style={styles.timeTextStyle}>Open Now  {items.open_time} - {items.close_time}</Text>
                    <Text style={styles.areaTextStyle}>{items.area}</Text>
            </View>
        </View>
    )
    
}

export default class Events extends Component {

    constructor(props){
        super(props)
    }
    render(){
        return(
            <View> 
                <View style={{ backgroundColor:'#DEE2E4',}}>
                    <FlatList
                     showsVerticalScrollIndicator = {false}
                        ListHeaderComponent={<CustomHeader 
                                                title={this.props.navigation.state.params.headerTitle} 
                                                cnavigation={()=>this.props.navigation.goBack()} 
                                            />}
                        data = {this.props.navigation.state.params.eventsData}
                        renderItem={ ({item}) => (
                        <GetData
                            items={item}
                            navigate = {() =>  this.props.navigation.navigate('EventDetails', {eventsData:item})}
                        />
                        )}
                        keyExtractor={(item,index)=>index.toString()} 
                    />
                </View>
            </View>
        );
    }
} 
//******************************************
    /* Create Class For Custom StyleSheet */
// *****************************************

const styles = StyleSheet.create({
    profileImgStyle:{
        height: 190,
        resizeMode: 'stretch' ,
    },
    mainContainerStyle:{
        /*marginLeft:10,
        marginRight:10,  
        marginTop:10,*/
        margin:10,
        backgroundColor:'#fff',
        borderRadius:10,
    },
    profileIconStyle:{
        height:40,
        alignSelf: 'flex-end',
        marginTop: 5,
        aspectRatio:1/1,
    },
    likeandshearIconStyle:{
        height:25,
        width:25,
        resizeMode:'contain',
        aspectRatio:1/1,
        marginLeft:5,
    },
    eventTitleViewStyle:{ 
        flex:1,
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between',
    },
    areaTextStyle:{
        fontWeight:'100',
        fontSize:18,
        marginLeft:10,
        marginTop:5,
        marginBottom:10,
    },
    eventTitleTextStyle:{
        fontWeight:'bold',
        fontSize:25,
        marginLeft:10,
    },
    timeTextStyle:{
        fontWeight:'100',
        fontSize:16,
        color:'#DF0000',
        marginLeft:10,
        marginTop:5,
        fontFamily:' Roboto ',
    }
})
export class GlobalStyle {
    static getCustomStyle(eventImgHeight,eventImgWidth) {
      return StyleSheet.create({
        eventImgStyle: {
            height: eventImgHeight,
            width: screenWidth,
            resizeMode:    'stretch' ,
        },
      })
    }
  
  }
  
