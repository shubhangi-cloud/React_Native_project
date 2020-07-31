import React,{Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import myprofileSectionlistData from './myprofileSectionlistData';

const screenWidth = Dimensions.get('window').width;

export class Item extends Component{
  constructor(props){
    super(props)

  }
  
  render(){
    return(
      <TouchableOpacity >
      <View style={styles.sectionContainerInnerStyle}>
         <Image source={this.props.title.titleDataIcon} 
          style={styles.backIconStyle}
          />
        <Text style={styles.title}> {this.props.title.titleDataName} </Text>
        {/* <Text> {this.props.index} </Text>
        <Text> {this.props.section.title} </Text> */}
      </View>
      </TouchableOpacity>
    );
  }
}
 

export default class MyProfile extends Component{
  render(){
    return(
      <View>

        <View>
              <Image style={styles.img} source={require('../../assets/images/useri.png')} />
              <Text style={styles.item}>{"@User Name"}</Text>
              <View style={styles.lineviewstyle}></View>
          </View>
        <SafeAreaView>
          <SectionList
            sections={myprofileSectionlistData}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item ,index,section }) => <Item title={item}
            index={index}
            section={section}
            managenavigation={this.props.navigation.navigate('ManageMyAccount')} 
            />}
            renderSectionHeader={({ section: { title } }) => (
              <View>
                <Text style={styles.header}>{title}  </Text>
                <View style={styles.sectionlineviewstyle}></View>
              </View>
            )}
          />
        </SafeAreaView>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
   
    marginHorizontal: 16
  },
  item:{
    marginTop:15,
    color:'black',
    alignSelf:'center',
    fontWeight: "bold",
    fontSize:18,
    marginBottom:10,
  },
  header: {
    marginTop:10,
    fontSize: 18,
    color: "#a9a9a9",
    marginLeft:10,
  },
  title: {
    marginTop:10,
    fontSize: 18
  },
  lineviewstyle:{
    backgroundColor:'#a9a9a9',
    height:0.8,
    width:screenWidth,
  },
  sectionlineviewstyle:{
    backgroundColor:'#a9a9a9',
    height:0.6,
    marginLeft:10,
    marginRight:10,
    marginTop:5,
  },
  sectionContainerInnerStyle:{
    flexDirection:'row',
    marginLeft:10,

  },
  backIconStyle : {
    height : 20,
    width : 20 ,
    marginRight:10,
    marginTop : 15,
    resizeMode : 'contain',
  },
  item:{
    marginTop:15,
    color:'black',
    alignSelf:'center',
    fontWeight: "bold",
    fontSize:18,
    marginBottom:10,
  },
  image:{
    marginLeft:100,
    marginTop:50,
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius:200,
    justifyContent: "center"
  },
  img:{
    marginTop:15,
    alignSelf:"center",
    borderColor:'black',
    width: 150,
    height: 150,
    }
});
