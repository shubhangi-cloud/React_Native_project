import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image, 
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';
import homeData from './home'
const screenWidth = Dimensions.get('window').width;

export class GetData extends Component {
  constructor(props){
    super(props)
}
  render(){
    return(
      <TouchableOpacity onPress={this.props.navigate}>
        <View style = {styles.itemContainerViewStyle}>
          <ImageBackground blurRadius={0.9} source={this.props.items.bg_img} style={styles.image} imageStyle={{ borderRadius: 10 ,}}>   
            <Text style={styles.item}>{this.props.items.title}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
} 

export default class HomeScreen extends Component 
{

  constructor(props){
    super(props)
  }
  render(){
    return (
      <View style={styles.container}>
      
      <FlatList
      showsVerticalScrollIndicator = {false}
      data={homeData}
      renderItem={ ({item})=> (
        <GetData 
         items = {item}
         navigate = {() =>  this.props.navigation.navigate('Events', {headerTitle:item.title,eventsData:item.eventDetails})}
         />
      )}
      keyExtractor={(item,index)=>index.toString()}
      numColumns= {2}
      />
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
container:{
  backgroundColor: 'rgba(0, 0, 0, 0)',
flex:1,
marginTop :20,
},
item:{
color:'#FFF',
textAlign: 'center',
fontWeight: "bold",
fontSize:23,

},
itemContainerViewStyle: {
backgroundColor:'#ABC',
margin:5,
marginLeft:7,
height:180,
width: screenWidth*0.47,
borderRadius:10,
},
image: {
    resizeMode: "cover",
    height:180,
    width: screenWidth*0.47,
    borderRadius:10,
    justifyContent: "center"
  },
});