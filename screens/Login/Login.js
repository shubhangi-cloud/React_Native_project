
import React,{Component} from 'react';
import {View,Text, ImageBackground,Dimensions,StyleSheet,Image, Keyboard} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {CustomTextBoxWithImage} from '../../components/CustomTextBoxWithImage';
import KeyboardShift from '../../components/KeyboardShift';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
var selectedEmail = ''
var selectedPassword = ''



//****************************************************
 /* Make Component For Registartion TextBox View */
//**************************************************** 
export class RegistrationTextBoxView extends Component {
    constructor(props) {
    super(props);
    this.state = {
    setEmail: '',
    setPassword: '',
    // setConformPassword: '',
    }

  this._onChangeEmail = this._onChangeEmail.bind(this)
  this._onChangePassword = this._onChangePassword.bind(this)
 // this._onChangeConformPassword = this._onChangeConformPassword.bind(this)
  }

 //****************************************************
 /* Function For Set Email Custom Text */
 //**************************************************** 
      _onChangeEmail(email) {
      console.log(email);
      this.setState({setEmail: email}); 
      selectedEmail = email
      }

 //****************************************************
 /* Function For Set Password Custom Text */
 //**************************************************** 
      _onChangePassword(pass) {
      console.log(pass);
      this.setState({setPassword: pass}); 
      selectedPassword = pass
      }

 render(){ 
 return(
 <View>
      <CustomTextBoxWithImage 
        customplaceholder = "Email"
        customDrawableImage={require('../../assets/images/password.png')} 
        customUnderlineColor = "#dedede"
        customBgColor= "#FFF"
        // isEditableFlag = {true}
        isSecureEntryFlag={false}
        ChangeText={this._onChangeEmail} 
        textValue = { this.state.setEmail } 
      /> 
      <CustomTextBoxWithImage 
        customplaceholder = "Password"
        customDrawableImage={require('../../assets/images/password.png')} 
        customUnderlineColor = "#dedede"
        customBgColor= "#FFF"
        //isEditableFlag = {true}
        isSecureEntryFlag={true}
        ChangeText={this._onChangePassword} 
        textValue = { this.state.setPassword } 
      /> 
 </View> 
 );
 }
}


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
          signUpTitle: 'Login',
          barStatus: 0.25,
          nextButtonText: 'Next',
          popUpMsgText: '',
          popUpMsgTitle: '',
          showAndHideNextButton: true,
          showAndHidePopUpView: false,
          isEmptyTextBox : false,
          ifFailure: false,
          countryId: '',
        }
        showAndHidePopUp = this.showAndHidePopUp.bind(this)
}

 //****************************************************
 /* Function Show/Hide Pop Up View */
 //****************************************************
 showAndHidePopUp(){
    if(this.state.isEmptyTextBox){
        this.setState(state => ({
          isEmptyTextBox: false,
          showAndHidePopUpView: !this.state.showAndHidePopUpView,
          popUpMsgText: '',
        })); 
        }else {
          this.setState(state => ({
          showAndHidePopUpView: !this.state.showAndHidePopUpView,
          popUpMsgText: '',
          popUpMsgTitle: '',
        }));
    }
 }

 //****************************************************
 /* Function For Display Next View To Current Screen */
 //****************************************************
 NextButton = () => {
    if( selectedEmail === "" ){
    this.setState(state => ({
    isEmptyTextBox: true,
    popUpMsgTitle: 'Sorry',
    popUpMsgText: 'Please enter Email Address.',
    showAndHidePopUpView: !this.state.showAndHidePopUpView,
    }));
    }else if(selectedPassword === ""){
    this.setState(state => ({
    isEmptyTextBox: true,
    popUpMsgTitle: 'Sorry',
    popUpMsgText: 'Please enter password.',
    showAndHidePopUpView: !this.state.showAndHidePopUpView,
    }));
    }else{
    this.props.navigation.navigate('HomeStack')
    }
 }


 //***********************************************************
 /* Function For Display Previous View To Current Screen */
 //***********************************************************
  BackButton = () => {
      this.props.navigation.goBack();
      console.log('Goback');
  }

 render() {
    return(
      <KeyboardShift>
        {() => (
          <View style={{flex: 1,backgroundColor: '#FFFFFF'}}>
            <ImageBackground source = {{ uri: 'https://images.unsplash.com/photo-1536928994169-e339332d0b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'}}
            style={{ height: screenHeight}}
            resizeMode={'cover'}>
              <View style = {styles.backBtnViewStyle}>
                <TouchableOpacity style = {{ width: 40, height: 40}} onPress= {() => this.BackButton()}>
                <Image source = { require('../../assets/images/back.png')} style = {styles.backBtn} />
                </TouchableOpacity>
              </View>
              <View style={styles.containerViewStyle}>
                <View style={styles.LoginViewStyle}>
                  <Text style={styles.LoginTextStyle}>{this.state.signUpTitle}</Text>
                </View> 
                <RegistrationTextBoxView />
                <View style={[styles.registerViewStyle,{bottom:160}]}>
                  <TouchableOpacity onPress= {() => this.NextButton()}>
                    <View style={styles.btnViewStyle}>
                      <Text style={[styles.btnTextStyle,{color:'#fff',}]}> {this.state.nextButtonText} </Text>
                    </View>
                  </TouchableOpacity >
                </View>
                <View style={[styles.registerViewStyle,{bottom:110}]}>
                  <Text style={styles.registerTextStyle}>  Has no account ? Register Now</Text>
                </View>
                <View style={styles.bottumViewStyle}>
                  <TouchableOpacity  onPress= {() => this.props.navigation.navigate('Register')}>
                    <View style={styles.bottumBtnViewStyle}>
                      <Text style={[styles.bottumBtnTextStyle,{color:'#fff',}]}> Register </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
            { 
            this.state.showAndHidePopUpView ?
            <View style = { styles.popUpBackgroundViewStyle}>
              <View style = {styles.popUpViewStyle}>
                <View style = {styles.msgTextViewStyle}>
                  <Text style = {{fontSize: 22,fontWeight:'bold',marginBottom:10}}>{this.state.popUpMsgTitle}</Text>
                  <Text style = {{fontSize: 17}}>{this.state.popUpMsgText}</Text>
                </View>
                <View style ={styles.okBtnView} >
                    <View style = {styles.okBtnStyle}>
                      <TouchableOpacity onPress= {() => showAndHidePopUp()}>
                        <Text style = {styles.nextBtnTextStyle}>OK</Text>
                      </TouchableOpacity>
                    </View> 
                  </View> 
              </View>
            </View> : null
            }
          </View>
        )}
      </KeyboardShift>
    );
    }
}


const styles=StyleSheet.create(
 {
  backgroundViewStyle:{
  height: screenHeight/2,
  borderBottomLeftRadius:screenWidth*0.5,
  backgroundColor:'#fff',
 },
 containerViewStyle:{
  flex:1,
  marginTop:screenHeight*0.15,
  borderTopStartRadius:screenWidth*0.1,
  borderTopEndRadius:screenWidth*0.1,
  backgroundColor:'#fff',
 },
  LoginTextStyle: {
  fontSize:25,
  fontWeight:'bold',
  color:'#DF0000',
  marginBottom:20,
 },
  LoginViewStyle: {
  margin:10,
  alignItems:'center',
  borderColor: '#DF0000',
  borderBottomWidth:3,
 },
  btnViewStyle: {
  alignSelf:'center',
  justifyContent:"center",
  alignItems:'center',
  marginTop: 20,
  width: screenWidth*0.55,
  borderRadius: 10,
  height: 50,
  backgroundColor:'#DF0000',
  borderColor: '#808080',
  borderWidth:1,
 },
  btnTextStyle: {
  fontSize:16,
  fontWeight:'bold',
 },
  socialMediaViewStyle: {
  flexDirection:'row',
  width: screenWidth*0.30,
  height:50,
  alignItems:'center',
  borderColor: '#FFF',
  borderWidth:1,
 },
  socialMediaIconStyle:{
  height:30,
  width:30,
  resizeMode:'contain',
  marginRight:5,
  marginLeft:5,
 },
  bottumViewStyle: {
  justifyContent:'center',
  alignItems:'center',
  position:'absolute',
  left:0,
  right:0,
  bottom:0,
  height:100,
  backgroundColor:'#DF0000',
  borderTopStartRadius:screenWidth*0.15,
  borderTopEndRadius:screenWidth*0.15,
 },
  registerViewStyle:{
  alignItems:'center',
  position:'absolute',
  left:0,
  right:0,
  backgroundColor:'transparent',
  },
  registerTextStyle:{
  color:'#DF0000',
  fontSize:18,
 },
  bottumBtnViewStyle: {
  alignItems:'center',
  width: screenWidth*0.80,
  borderRadius: 10,
  height:40,
  borderBottomWidth:2,
  borderColor:'#fff'
 },
  bottumBtnTextStyle: {
  fontSize:20,
  fontWeight:'bold',
 },
  backBtnViewStyle: {
  margin: 20,
  marginTop: 10,
 },
 backBtn: {
 width: 20,
 height:20,
 },
  popUpBackgroundViewStyle: {
  width: screenWidth,
  height: screenHeight,
  backgroundColor: 'rgba(0,0,0, 0.4)',
  justifyContent: 'center',
  position: 'absolute',
 },
  popUpViewStyle:{
  backgroundColor: 'rgba(255, 255, 255, 1)',
  justifyContent: 'center',
  marginLeft: 30,
  marginRight:30,
  borderRadius: 10,
  },
  msgTextViewStyle: {
  margin:30,
  marginBottom: 10,
  alignItems: 'center'
  },
  okBtnView: {
  margin: 20,
  height:30,
  },
  okBtnStyle: {
  backgroundColor: '#DF0700',
  height: 30,
  justifyContent: 'center',
  width: '100%',
  borderRadius: 5,
  },
  nextBtnTextStyle: {
  color: '#fff',
  fontSize: 17,
  borderRadius: 10,
  justifyContent: 'center',
  alignContent: 'center',
  textAlign: 'center',
  // fontFamily:'SFProText-Regular',
  },
 })
