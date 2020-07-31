import React, { Component } from 'react'
import { View, Text, TouchableOpacity,TouchableWithoutFeedback, TextInput, StyleSheet ,Alert,Image} from 'react-native'
import KeyboardShift from '../../components/KeyboardShift';
import ImagePicker from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { CustomHeader} from '../../components/CustomHeader';
import { db } from '../../Firebase';

let addItem = item => {
   db.ref('/items').push({
     name: item
   });
 };


 export class BottomButton extends Component{
   constructor(props){
       super(props)
   }
   handleSubmit = () => {
      addItem(this.props.name);
      Alert.alert('Item saved successfully');
    };
   render(){
       return(
           <View style={styles.footerViewStyle}>
               <View style={styles.footerStyle}>
                   <TouchableOpacity onPress={this.handleSubmit}>
                       <Text style={styles.footerTextStyle}>{'Update'}</Text>
                   </TouchableOpacity>
               </View> 
           </View>  
       );
   }
}

class ManageMyAccount extends Component {

   constructor(props) {
      super(props);
      this.state = {
        filePath: {},
      };
    }
   state = {
      name: '',
      username: '',
      bio:'',
      emailId:'',
      phoneNum:'',
      city:'',
   }

   chooseFile = () => {
   ImagePicker.showImagePicker( response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };


   handleName = (text) => {
      this.setState({ name: text })
   }
   handleUsername = (text) => {
      this.setState({ username: text })
   }
   handleBio = (text) => {
      this.setState({ bio: text })
   }
   handleEmailId = (text) => {
      this.setState({ emailId: text })
   }
   handlePhoneNum = (text) => {
      this.setState({ phoneNum: text })
   }
   handlecity = (text) => {
      this.setState({ city: text })
   }
   render() {
      return (
        <KeyboardShift>
        {() => (

<View>
        <ScrollView>
           <CustomHeader 
               title={'My Profile'}
               cnavigation={()=>this.props.navigation.goBack()} 
            />
           <View style={{alignItems:'center'}}>
            <TouchableWithoutFeedback onPress={this.chooseFile.bind(this)}>
              {   this.state.filePath.uri == null ? 
                     <View style={style1.imageViewStyle}>
                        <Image style={style1.img} source={require('../../assets/images/useri.png')} />
                     </View>:
                     <View style={style1.imageViewStyle}>
                        <Image style={style1.img} source={{ uri: this.state.filePath.uri }} />
                     </View>
               }
            </TouchableWithoutFeedback>
            <View style={{marginTop:-25,}}>
                <Image style={style1.addImageViewStyle} source={require('../../assets/images/add.png')} />
            </View>
            
            <Text style={style1.changeTextStyle}>{"Change Profile"}</Text>
            </View>
            <View style = {styles.container}>
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Name"
                placeholderTextColor = "#a9a9a9"
                autoCapitalize = "none"
                onChangeText = {this.handleName}/>
                
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Username"
                placeholderTextColor = "#a9a9a9"
                autoCapitalize = "none"
                onChangeText = {this.handleUserName}/>

                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Bio"
                placeholderTextColor = "#a9a9a9"
                autoCapitalize = "none"
                onChangeText = {this.handleBio}/>
                
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "City"
                placeholderTextColor = "#a9a9a9"
                autoCapitalize = "none"
                onChangeText = {this.handlecity}/>

                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email Id"
                placeholderTextColor = "#a9a9a9"
                autoCapitalize = "none"
                onChangeText = {this.handleEmailId}/>

                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Phone Number"
                placeholderTextColor = "#a9a9a9"
                autoCapitalize = "none"
                onChangeText = {this.handlePhoneNum}/>
            </View>
            <BottomButton
               name={this.state.name}
            />
         </ScrollView>
         
         </View>
         
         )}
         
         </KeyboardShift>
      )
   }
}
export default ManageMyAccount;

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderBottomWidth:1,
      borderColor:'#a9a9a9'
   },
   footerViewStyle:{
      height:60,
      backgroundColor:'#fff',
  },
  footerStyle:{
      justifyContent:"center",
      backgroundColor:'#DF0000',
      margin:10,
      height:40,
      borderRadius:10,
  },
  footerTextStyle:{
      alignSelf:"center",
      fontSize:20,
      fontWeight:'bold',
      color:'#fff',
      justifyContent:'center'
  },
})

const style1= StyleSheet.create({
   addImageViewStyle:{
      height: 50,
      width: 50,
      resizeMode:'contain',
   },
   changeTextStyle:{
      marginTop:5,
      color:'#000',
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
      fontWeight: "bold",
      fontSize:19,
   },
   img:{
      width: 170,
      height: 170,
      resizeMode:'cover',
      borderRadius:170/2,
      
      alignItems:'center',
   },
   imageViewStyle:{
      justifyContent:'center',
      height: 175,
      width: 175,
      marginTop:20,
      borderRadius:175/2,
      borderTopWidth:2,
      borderBottomWidth:2,
      borderLeftWidth:2,
      borderRightWidth:2,
      borderColor:'#DF0000',
   },
   
})