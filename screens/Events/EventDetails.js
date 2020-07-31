
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image, 
    ImageBackground,
    FlatList,
    Dimensions,
    TouchableOpacity,
    ListView,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';
import CustomButton from './../../components/CustomButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const numColumns = 3
export function GetFacilityData ({items}) {
    return(
        <View style={styles.facilityViewStyle}>
            <Image
                    source={items.facilityIcon}
                    style={styles.facilityIconStyle }
            />
           <Text style={{alignSelf:'center',flex:1}}>{items.facilityName}</Text>
        </View>
    )
}
export  class EventDetailsHeader extends Component{
    constructor(props){
        super(props)
        this.state = {
            eventData : this.props.headerData,
        }
    }
    onRegionChange(region) {
        this.setState({ region });
      }
    render(){
       
        return(
            <View style={styles.mainEventDetailsStyle}>
               <ImageBackground 
                    source={this.state.eventData.profile_img}
                    style={styles.profileImgStyle }
                >
                    <View style={{justifyContent:'space-between',flex:1,}}>
                        <View style={styles.eventsDetailIcons}>
                            <TouchableOpacity onPress={this.props.backNavigation}> 
                                <Image
                                    source={require('../../assets/images/back.png')}
                                    style={styles.backIconStyle }
                                />
                            </TouchableOpacity>
                            <Image
                                source={require('../../assets/images/verified.png')}
                                style={styles.profileIconStyle }
                            />
                        </View>
                        <View style={{flexDirection:'row-reverse'}}>
                        <View style={styles.ratingViewStyle}>
                                <Text style={styles.ratingTextStyle}>{this.state.eventData.rating}</Text>
                        </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.eventTitleViewStyle}>
                    <View style={{flex:1,}}>
                        <Text style={styles.eventTitleTextStyle}>{this.state.eventData.hallName}</Text>
                    </View>
                    <View style={{flex:0.2,flexDirection:'row'}}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/likei.png')}
                                style={styles.likeandshearIconStyle }
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/shear.png')}
                                style={styles.likeandshearIconStyle }
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:0.09}}>
                        <Image
                            source={require('../../assets/images/map.png')}
                            style={styles.mapIconStyle }
                        />
                        </View>
                        <View style={{flex:1}}>
                        <Text style={styles.areaTextStyle}>{this.state.eventData.map_location.address}</Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.timeTextStyle}>Open Now  {this.state.eventData.open_time} - {this.state.eventData.close_time}</Text>
                        <View style={styles.moneyViewStyle}>
                            <Image
                                source={require('../../assets/images/rupee.png')}
                                style={styles.moneyIconStyle }
                            />
                            <Text style={{fontWeight:'bold',alignSelf:'center',fontSize:17}}>{this.state.eventData.price}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={this.state.eventData.special_facilities}
                        renderItem={ ({item})=> (
                                    <GetFacilityData
                                    items={item}
                                    />
                                )}
                        numColumns={2}
                        keyExtractor={(item,index)=>index.toString()}
                    />
                </View>
                <EventLocation
                            title = {this.state.eventData.hallName}
                            lat = {this.state.eventData.map_location.latitude}
                            long = {this.state.eventData.map_location.longitude}
                            address = {this.state.eventData.map_location.address}
                        />
                <View>
                    <View style={styles.gallaryTextViewStyle}>
                        <Text style={styles.gallaryTextStyle}>GALLARY</Text>
                   </View>
                </View>
            </View>
        )
    }
}
export class EventDetailsFooter extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={styles.footerViewStyle}>
                <View style={styles.footerStyle}>
                    <TouchableOpacity>
                        <Text style={styles.footerTextStyle}>{'Book Now'}</Text>
                    </TouchableOpacity>
                </View> 
            </View>  
        );
    }
}

export class EventLocation extends Component{
    constructor(props){
        super(props)
    }
    render(){
        var mapStyle=[{"elementType": "geometry", 
        "stylers": [{"color": "#242f3e"}]},
        {"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},
        {"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},
        {"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},
        {"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},
        {"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},
        {"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},
        {"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},
        {"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},
        {"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},
        {"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},
        {"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},
        {"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},
        {"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},
        {"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},
        {"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},
        {"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},
        {"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}
    ];
        return(
            <View>
                <View style={styles.gallaryTextViewStyle}>
                    <Text style={styles.gallaryTextStyle}>LOCATION</Text>
                </View>
                <View style={styles.mapViewStyle}>  
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: parseFloat(this.props.lat),
                            longitude: parseFloat(this.props.long),
                            latitudeDelta: 0.002,
                            longitudeDelta: 0.002,
                        }}
                        scrollEnabled={false}
                        customMapStyle={mapStyle}
                        >
                        <Marker
                            coordinate={{
                            latitude: parseFloat(this.props.lat),
                            longitude: parseFloat(this.props.long),
                            }}
                            
                            title={this.props.title}
                            description={this.props.address.toString()}
                        >
                            <Image
                                source={require('../../assets/images/mark.png')}
                                style={styles.markIconStyle }
                            />
                        </Marker>
                    </MapView>
                </View>
                
            </View>
               
              
        );
    }
}

export default class EventDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            eventData : this.props.navigation.state.params.eventsData,
        }
    }


    renderItem = ({ item, index }) => {
        return (
            <View style={styles.arrayItem}>
                <TouchableWithoutFeedback style={styles.mediaTouchableOpacity}>
                    <Image source={item.imgName} key={index} style={styles.mediaImagestyle}></Image>
                </TouchableWithoutFeedback>
            </View>
        )
    }
    
    render(){
        return(
            <View style={styles.mainEventDetailsStyle}>
               <View style={styles.flatListContainer}>
                    <FlatList
                        ListHeaderComponent={<EventDetailsHeader
                            headerData={this.state.eventData}
                            backNavigation={()=>this.props.navigation.goBack()}
                        />}
                        ListFooterComponent={<View style={{height: 40,margin:10}} />}
                        bounces={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.eventData.gallary} 
                        renderItem={this.renderItem} 
                        numColumns={numColumns}
                        keyExtractor={(item,index)=>index.toString()}
                   />  
                </View>
                <EventDetailsFooter />
            </View>
        )
    }
}

