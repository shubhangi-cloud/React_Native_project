
import {
    StyleSheet,
    Dimensions,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const numColumns = 3
const styles = StyleSheet.create({
    //5BA829
    //9ACD32
    mainEventDetailsStyle:{
        flex:1,
        backgroundColor:'#fff',
    },
    mapViewStyle:{
        height:200,
        marginLeft:10,
        marginRight:10,
        borderRadius:10,
    },
    ratingViewStyle:{
        height:30,
        width:55,
        backgroundColor:'#5BA829',
        borderRadius:5,
        marginRight:5,
        marginBottom:5
    },
    ratingTextStyle:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        color:'#fff'
    },
    footerViewStyle:{
        position:'absolute',
        height:60,
        backgroundColor:'#fff',
        left:0,
        right:0,
        bottom:0,
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
    profileImgStyle:{
        height: 190,
        resizeMode: 'stretch',
    },
    eventsDetailIcons:{
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    backIconStyle : {
        height : 25,
        marginTop : 15,
        resizeMode : 'contain',
    },
    eventTitleViewStyle:{ 
        //flex:1,
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between',
        
    },
    areaTextStyle:{
        fontWeight:'100',
        fontSize:15,
        marginLeft:10,
        marginTop:3,
        color:'#808080'
    },
    eventTitleTextStyle:{
        fontWeight:'bold',
        fontSize:25,
        marginLeft:10,
    },
    timeTextStyle:{
        fontWeight:'bold',
        fontSize:15,
        color:'#DF0000',
        marginLeft:10,
        marginTop:2,
        fontFamily:' Roboto ',
        marginBottom:10,
    },
    profileIconStyle:{
        height:40,
        width:40,
        resizeMode:'contain',
        margin: 5,
    },
    likeandshearIconStyle:{
        height:25,
        width:25,
        resizeMode:'contain',
        aspectRatio:1/1,
        marginLeft:5,
    },
    facilityIconStyle:{
       height:20,
       width:20,
       resizeMode:'center',
       alignSelf:'center',
       marginRight:10,
       marginLeft:4,
    },
    mapIconStyle:{
        marginTop:10,
        height:20,
        width:20,
        resizeMode:'center',
        marginLeft:10,
     },
    facilityViewStyle:{
        flexDirection:'row',
        width:screenWidth*0.46,
        marginLeft:10,
        marginTop:5,
        borderColor:'#DEE2E4',
        borderWidth:1,
        margin:5,
        borderRadius:10,
        height:35,
    },
    
    flatListContainer: {
        alignItems: "center"
    },
    gallaryTextViewStyle:{
        //width:screenWidth*0.46,
        marginLeft:10,
        marginRight:10,
        marginTop:15,
        borderColor:'#DEE2E4',
        borderWidth:1.3,
        margin:5,
        borderRadius:10,
        height:40,
        justifyContent:'center',
        alignItems:'center'
    },
    gallaryTextStyle:{
        alignSelf:'center',
        fontSize:19,
        fontWeight:"bold",
        color:'#808080'
    },
    galarySpaceLineStyle:{
        height:2,
        backgroundColor:'#DEE2E4',
        marginBottom:5,
    },
    mediaImagestyle: {
        margin: 2,
        height: (screenWidth / numColumns)*0.974,
        width: (screenWidth / numColumns)*0.974,
    },
    mediaTouchableOpacity: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    seeAllPhotosView: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    nextImage: {
        height: 15,
        width: 15
    },
    seeAllTouchable: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    seeAllPhotosText: {
        fontSize: 18
    },
    moneyViewStyle:{
        flexDirection:'row',
        height:30,
        marginRight:10,
        
    },
    moneyIconStyle:{
        height:15,
       width:15,
       resizeMode:'center',
       alignSelf:'center',
    },
    markIconStyle:{
        height:40,
       width:40,
       resizeMode:'contain',
    },
    map: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        borderRadius:10,
      },
    
})

export default styles;