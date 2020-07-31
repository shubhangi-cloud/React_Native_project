import React,{Component} from 'react';
import {View,Text, ImageBackground,Dimensions,StyleSheet,Image, Keyboard} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {CustomTextBoxWithoutImage} from '../../components/CustomTextBoxWithoutImage';
import {CustomTextBoxWithImage} from '../../components/CustomTextBoxWithImage';
import {CustomTextBox} from '../../components/CustomTextBox'
import {CustomOTPTextBox} from '../../components/CustomOTPTextBox'
import KeyboardShift from '../../components/KeyboardShift';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
var selectedUserName =''
var selectedEmail = ''
var selectedPassword = ''
// var selectedConformPassword = ''
var selectedOTP = ''
var selectedCountry = ''
var selectedCity = ''
var selectedPlace = ''
var selectedContactNumber = ''
var isSuccessOTP = true
var isKeyboardDismiss=false
var selectedCountryId=''
var selectedCityId=''

//****************************************************
 /* Make Component For Registartion TextBox View */
//**************************************************** 
export class RegistrationTextBoxView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setEmail: '',
            setUserName: '',
            setPassword: '',
            // setConformPassword: '',
            }
    this._onChangeName = this._onChangeName.bind(this)
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
 /* Function For Set UserName Custom Text */
 //**************************************************** 
    _onChangeName(username) {
        console.log(username);
        this.setState({setUserName: username}); 
        selectedUserName = username
    }

 //****************************************************
 /* Function For Set Password Custom Text */
 //**************************************************** 
    _onChangePassword(pass) {
        console.log(pass);
        this.setState({setPassword: pass}); 
        selectedPassword = pass
    }
 //****************************************************
 /* Function For Set Conform Password Custom Text */
 //**************************************************** 
 // _onChangeConformPassword(conformPassword) {
 // console.log(conformPassword);
 // this.setState({setConformPassword: conformPassword}); 
 // selectedConformPassword = conformPassword
 // }

    render(){ 
        return(
            <View>
                <CustomTextBoxWithoutImage
                    customplaceholder = "UserName"
                    customBgColor = "#dedede"
                    isSecureEntryFlag={false}
                    ChangeText={this._onChangeName} 
                    textValue={this.state.setUserName}
                /> 
                <CustomTextBoxWithoutImage
                    customplaceholder = "Email"
                    customBgColor = "#dedede"
                    isSecureEntryFlag={false}
                    ChangeText={this._onChangeEmail} 
                    textValue={this.state.setEmail}
                /> 
                <CustomTextBoxWithoutImage
                    customplaceholder = "Password"
                    customBgColor = "#dedede"
                    isSecureEntryFlag={true}
                    ChangeText={this._onChangePassword} 
                    textValue={this.state.setPassword}
                /> 
                {/* <CustomTextBox
                customplaceholder = "Conform Password"
                customBgColor = "#dedede"
                isSecureEntryFlag={true}
                ChangeText={this._onChangeConformPassword} 
                /> */}
            </View> 
        );
    }
}

//****************************************************
 /* Make Component For Registartion TextBox View */
//**************************************************** 
export class OTPTextBoxView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setOTP1: '',
            setOTP2: '',
            setOTP3: '',
            setOTP4: '',
            setOTP5: '',
    }
 }

 //**********************************************************
 /* Function For Check OTP Correct Or Not And Auto API Call */
 //********************************************************** 
    checkOTP() {
        selectedOTP = this.state.setOTP1+this.state.setOTP2+this.state.setOTP3+this.state.setOTP4+this.state.setOTP5;
        console.log(this.state.setOTP1+this.state.setOTP2+this.state.setOTP3+this.state.setOTP4+this.state.setOTP5)
        if( selectedOTP.length === 5 && isKeyboardDismiss && isSuccessOTP){
        isSuccessOTP = false
        console.log('API call')
        //checkOTP code here
        } 
    }

 //************************************************************
 /* Use componentDidMount() Function For Focus First Text Box*/
 //************************************************************ 
    componentDidMount(){
        this.passcode1.focus();
    }

    render(){ 
        return(
            <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: "row"}}>
                    <CustomOTPTextBox 
                        customUnderlineColor = '#f5a9a8'
                        autoFocus={true}
                        inputRef={(r) => { this.passcode1 = r }}
                        refNext={(event) => { event && this.passcode2.focus(), this.setState({setOTP1: event}), isKeyboardDismiss = false }}
                    />
                    <CustomOTPTextBox
                        customUnderlineColor = '#f5a9a8' 
                        inputRef={(r) => { this.passcode2 = r }}
                        refNext={(event) => { event && this.passcode3.focus() , this.setState({setOTP2: event}), isKeyboardDismiss = false }}
                        refPrev = {(event) => { event && this.passcode1.focus() }}
                    />
                    <CustomOTPTextBox
                        customUnderlineColor = '#f5a9a8' 
                        inputRef={(r) => { this.passcode3 = r }}
                        refNext={(event) => { event && this.passcode4.focus() , this.setState({setOTP3: event}), isKeyboardDismiss = false }}
                        refPrev = {(event) => { event && this.passcode2.focus() }}
                    />
                    <CustomOTPTextBox
                        customUnderlineColor = '#f5a9a8' 
                        inputRef={(r) => { this.passcode4= r }}
                        refNext={(event) => { event && this.passcode5.focus() , this.setState({setOTP4: event}), isKeyboardDismiss = false }}
                        refPrev = {(event) => { event && this.passcode3.focus() }}
                    />
                    <CustomOTPTextBox
                        customUnderlineColor = '#f5a9a8'
                        inputRef={(r) => { this.passcode5 = r }}
                        refNext={(event) => { event && Keyboard.dismiss(), this.setState({setOTP5: event}), isKeyboardDismiss = true }}
                        refPrev = {(event) => {event && this.passcode4.focus() }}
                    />
                    { 
                    this.checkOTP()
                    }

                </View>
                <Text style={{textAlign:'center',fontSize:17}}>
                Enter verification code we send to your email
                </Text>
            </View>
        );
    }
}


//****************************************************
 /* Make Component For Details TextBox View */
//**************************************************** 
export class DetailsTextBoxView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setCountry: '',
            setCity: '',
            setPlace: '',
            setNum: '',
    }
    _onChangeCountry = this._onChangeCountry.bind(this)
    _onChangeCity = this._onChangeCity.bind(this)
    this._onChangePlace = this._onChangePlace.bind(this)
    this._onChangeNumber = this._onChangeNumber.bind(this)
    }

 //****************************************************
 /* Function For Set Country Custom Text */
 //**************************************************** 
    _onChangeCountry(country) {
    console.log(country);
    this.setState({setCountry: country}); 
    selectedCountry = country
    }

 //****************************************************
 /* Function For Set UserName Custom Text */
 //**************************************************** 
    _onChangeCity(city) {
    console.log(city);
    this.setState({setCity: city}); 
    selectedCity = city
    }

 //****************************************************
 /* Function For Set Place Custom Text */
 //**************************************************** 
    _onChangePlace(place) {
    console.log(place);
    this.setState({setPlace: place}); 
    selectedPlace = place
    }
 //****************************************************
 /* Function For Set Contact Number Custom Text */
 //**************************************************** 
    _onChangeNumber(contactNumber) {
    console.log(contactNumber);
    this.setState({setNum: contactNumber}); 
    selectedContactNumber = contactNumber
    }

    render(){ 
    return(
    <View>
    <TouchableOpacity onPress = { this.props.navigateToCountryScreen }>
    <CustomTextBoxWithImage 
    customplaceholder = "Country"
    customDrawableImage={require('../../assets/images/dropdown.png')} 
    customUnderlineColor = "#dedede"
    customBgColor= "#dedede"
    isEditableFlag = {false}
    ChangeText={this._onChangeCountry} 
    textValue = { this.state.setCountry } 
    />
    </TouchableOpacity>
    <TouchableOpacity onPress = { this.props.navigateToCityScreen }>
    <CustomTextBoxWithImage 
    customplaceholder = "City"
    customDrawableImage={require('../../assets/images/dropdown.png')} 
    customUnderlineColor = "#dedede"
    customBgColor= "#dedede"
    isEditableFlag = {false}
    ChangeText={this._onChangeCity} 
    textValue = { this.state.setCity }
    />
    </TouchableOpacity> 
    <CustomTextBoxWithoutImage
    customplaceholder = "Area"
    customBgColor = "#dedede"
    isSecureEntryFlag={false}
    ChangeText={this._onChangePlace} 
    textValue={this.state.setPlace}
    /> 
    <CustomTextBoxWithoutImage
    customplaceholder = "Contact Number"
    customBgColor = "#dedede"
    isSecureEntryFlag={false}
    ChangeText={this._onChangeNumber} 
    textValue={this.state.setNum}
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
            signUpTitle: 'Register',
            barStatus: 0.25,
            nextButtonText: 'Next',
            pushNextViewStatus: 1,
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
        /* Function Get City Data From City Screen */
    //**************************************************** 
    returnCityData(cityId, cityName ) {
        console.log(cityName)
        selectedCityId = cityId
        selectedCity = cityName
        _onChangeCity(cityName)
        console.log(selectedCity)
    }

    //****************************************************
        /* Function Get Country Data From City Screen */
    //****************************************************
    returnCountryData(countryId , countryName) {

        selectedCountryId = countryId
        selectedCountry = countryName
        _onChangeCountry(countryName)
        console.log(selectedCountryId+' and '+selectedCountry)
    }

 //****************************************************
 /* Function For Display Next View To Current Screen */
 //****************************************************
    NextButton = () => {

        if(this.state.pushNextViewStatus <= 3){
            switch (this.state.pushNextViewStatus) {
                case 1:
                    if( selectedEmail === "" ){
                    this.setState(state => ({
                    isEmptyTextBox: true,
                    popUpMsgTitle: 'Sorry',
                    popUpMsgText: 'Please enter Email Address.',
                    showAndHidePopUpView: !this.state.showAndHidePopUpView,
                    }));
                }else if( selectedUserName === "" ){
                    this.setState(state => ({
                    isEmptyTextBox: true,
                    popUpMsgTitle: 'Sorry',
                    popUpMsgText: 'Please enter User Name.',
                    showAndHidePopUpView: !this.state.showAndHidePopUpView,
                    }));
                }else if(selectedPassword === ""){
                    this.setState(state => ({
                    isEmptyTextBox: true,
                    popUpMsgTitle: 'Sorry',
                    popUpMsgText: 'Please enter password.',
                    showAndHidePopUpView: !this.state.showAndHidePopUpView,
                    }));
                }else if(selectedPassword.length < 6){
                    this.setState(state => ({
                    popUpMsgTitle: 'Sorry',
                    popUpMsgText: 'Your password must be at least 6 characters long.',
                    showAndHidePopUpView: !this.state.showAndHidePopUpView,
                    }));
                }else{
                    this.setState(state => ({
                    pushNextViewStatus: (state.pushNextViewStatus + 1),
                    signUpTitle: "Register",
                    nextButtonText: 'Resend OTP',
                    }));
                    // this.preRegistrationAPICall() 
                }
                break;
            case 2:
                this.setState(state => ({
                pushNextViewStatus: (state.pushNextViewStatus + 1),
                signUpTitle: "Personal Info",
                nextButtonText: 'Complete Registration',
                }));
                // this.resendActivationCodeAPICall();
                break;
            case 3:
                if(selectedCountry === ''){
                    this.setState(state => ({
                    isEmptyTextBox: true,
                    popUpMsgTitle: 'Sorry',
                    popUpMsgText: 'Please select country.',
                    showAndHidePopUpView: !this.state.showAndHidePopUpView,
                    }));
                }else if(selectedCity === ''){
                    this.setState(state => ({
                    isEmptyTextBox: true,
                    popUpMsgTitle: 'Sorry',
                    popUpMsgText: 'Please select city.',
                    showAndHidePopUpView: !this.state.showAndHidePopUpView,
                    }));
                }else if(selectedPlace === ''){
                    this.setState(state => ({
                    isEmptyTextBox: true,
                    popUpMsgTitle: 'Sorry',
                    popUpMsgText: 'Please select Area.',
                    showAndHidePopUpView: !this.state.showAndHidePopUpView,
                    }));
                }else if(selectedContactNumber === ''){
                    this.setState(state => ({
                    isEmptyTextBox: true,
                    popUpMsgTitle: 'Sorry',
                    popUpMsgText: 'Please select Area.',
                    showAndHidePopUpView: !this.state.showAndHidePopUpView,
                    }));
                }else{
                    this.setState(state => ({
                    pushNextViewStatus: (state.pushNextViewStatus + 1),
                    signUpTitle: "Sucessfull registration ",
                    nextButtonText: 'Complete Registration',
                    }));
                    // this.registratfionAPICall();
                   this.props.navigation.navigate('Login')
                }
                break;
            default:
            break;
            }
        }
    }


 //***********************************************************
 /* Function For Display Previous View To Current Screen */
 //***********************************************************
    BackButton = () => {
        if(this.state.pushNextViewStatus <= 1){
            this.props.navigation.goBack();
            console.log('Goback');
        }else{
            this.setState(state => ({
            pushNextViewStatus: (state.pushNextViewStatus - 1),
            }));
        }
        if(this.state.pushNextViewStatus <= 3){
            if(this.state.pushNextViewStatus == 2){
                this.setState(state => ({
                signUpTitle: "REGISTER",
                nextButtonText: 'Resend Activation Code',
                }));
                isSuccessOTP = true
            }else{
                this.setState(state => ({
                signUpTitle: "REGISTER",
                nextButtonText: 'Next',   
                }));
            }
        }
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
                            {
                                this.state.pushNextViewStatus==1 ? <RegistrationTextBoxView /> :
                                this.state.pushNextViewStatus==2 ? <OTPTextBoxView /> :
                                this.state.pushNextViewStatus==3 ? <DetailsTextBoxView 
                                navigateToCountryScreen = {() => this.props.navigation.navigate('CountrySelection', {returnCountryData: this.returnCountryData.bind(this)})} 
                                navigateToCityScreen = {() => {
                                if(selectedCountryId === ''){
                                    this.setState(state => ({
                                    isEmptyTextBox: true,
                                    popUpMsgTitle: 'Sorry',
                                    popUpMsgText: 'Please select Country first',
                                    showAndHidePopUpView: !this.state.showAndHidePopUpView,
                                    }));
                                }else{
                                    this.props.navigation.navigate('CityViewComponent', {returnCityData: this.returnCityData.bind(this), countryid: selectedCountryId }) 
                                }
                                }}/> : null
                            } 
                            <View style={[styles.registerViewStyle,{bottom:160}]}>
                                <TouchableOpacity onPress= {() => this.NextButton()}>
                                    <View style={styles.btnViewStyle}>
                                        <Text style={[styles.btnTextStyle,{color:'#fff',}]}> {this.state.nextButtonText} </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.registerViewStyle,{bottom:110}]}>
                                <Text style={styles.registerTextStyle}> Already has an account ? Log in </Text>
                            </View>
                            <View style={styles.bottumViewStyle}>
                                <TouchableOpacity onPress= {() => this.props.navigation.navigate('Login')}>
                                        <View style={styles.bottumBtnViewStyle}>
                                            <Text style={[styles.bottumBtnTextStyle,{color:'#fff',}]}> LOGIN </Text>
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
