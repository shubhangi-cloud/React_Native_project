import 'react-native-gesture-handler';
import React,{Component} from 'react';
import {View,SafeAreaView,StyleSheet,Image,FlatList,Button,Platform,Text,ImageBackground,Dimensions
  ,TouchableHighlight,ScrollView,TextInput,TouchableOpacity, Alert, TouchableHighlightBase, ActivityIndicator} from 'react-native';
import {CustomHeaderWithoutBackBtn} from '../../components/CustomHeaderWithoutBackBtn';
import CustomLikeButton from '../../components/CustomLikeButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

  





  export default class MyActivities extends Component{


    constructor(props){
      super(props);

      this.state = {
        loaderRunning: true,
        serverData: [],
        imageLiked: false,
      }
  }


   Item = ({userName,mediaURL,likeCnt,captionText,cmntCnt,datePosted,profilePic}) => {
    return(
        <View style={styles.item}>

        <View style={styles.itemUsernameProfStyle}>
        <Image style={styles.itemUserProfPic} source={{uri: profilePic}}/>
        <Text style={styles.textItemStyle}>{userName}</Text>
        </View>

        <TouchableWithoutFeedback onPress={() => this.sendLike()}>
          <Image style={styles.imageItemStyle} source={{uri:mediaURL}}/>
        </TouchableWithoutFeedback>

        <View style={styles.itemCommentLikeStyle}>
        
        </View>
 
        {console.log("in item::"+this.state.imageLiked)}

        <View style={styles.itemLikeCommentMore}>
          <View style={styles.likecmtStyle}>
          <CustomLikeButton btnLikePressed={this.state.imageLiked}/>
          <Image style={styles.itemComment} source={require('../../assets/images/comment.png')}/>
          </View>

          <Image style={styles.itemMore} source={require('../../assets/images/more.png')}/>
        </View>


        <Text style={styles.likeCntStyle}>{likeCnt} Likes</Text>

        <Text style={styles.captionStyle}>{captionText}</Text>

        <Text style={styles.commentStyle}>View all {cmntCnt} comments</Text>

        <Text style={styles.dateStyle}>{datePosted}</Text>


        </View>
    )
}


 sendLike = () => {
  if(!this.state.imageLiked){
    this.setState({imageLiked: true})
  }else{
    this.setState({imageLiked: false})
  }

  console.log("like state::"+this.state.imageLiked)
}




    componentDidMount = () => {
      try{

        fetch('http://103.129.98.170/event_ticket_new/Ticket/public/index.php/api/v1/event-getUserProfileTimeLine',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
       
       
        body: JSON.stringify({
          langId : 'en',
          loginUserId: 7,
          page: 1,
          userId: 7,
      })
   
         }).then((response) => response.json())
         .then((responseJson) => {
          //check the status of api call by verifying the flag.

            if(responseJson.Status==200){
              console.log(responseJson);
              this.setState({loaderRunning: false,
              serverData: responseJson['TimeLine-Data']});

            }
           
           
         return responseJson;
    
   }).catch(function (error) {
    this.setState({loaderRunning: false});
   console.log("-------- error ------- "+error);
  //  alert("result:"+error)
   });


      }catch(Error){
        console.log(Error);
      }
    }




   



      render(){
          return(
            <View style={styles.container}>

           
            <CustomHeaderWithoutBackBtn title="My Activities" textLen={"My Activities".length.toString()}/>

            <View style={styles.userpostareaContainer}>
                <Image source={require('../../assets/images/profileuser.jpg')} style={styles.userProfilePic}/>
                <Text style={styles.addPost}>Add Post</Text>
            </View>

           
            { 
              this.state.loaderRunning ? <ActivityIndicator size="large" color="#DF0700" animating={this.state.loaderRunning}/> : 
                <FlatList
                    data={this.state.serverData}
                    renderItem={({ item }) => <this.Item userName={item['User-Name']} 
                    mediaURL={item['Place-Media'][0]['Media-Data']}
                    likeCnt={item['Like-Count']}
                    cmntCnt={item['Comments-Count']}
                    captionText={item['Post-Title']}
                    datePosted={item['Date']}
                    profilePic={item['User-Profile-Image']}
                    />}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            }


            </View>
          )
      }
  }



  const styles = StyleSheet.create({
    userpostareaContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:10,
    },

    
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },

    userProfilePic:{
        height: 50,
        width: 50,
        borderRadius: 25,
        marginStart: 20,
        marginTop: 10,
    },

    captionStyle:{
      fontSize:14,
      marginStart:20,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom:10,
    },

    commentStyle:{
      fontSize:14,
      marginStart:20,
    },

    dateStyle:{
      fontSize:14,
      marginStart:20,
      color: '#bfbfbf',
      marginTop:10,
      marginBottom: 20,
    },

    likecmtStyle:{
      flexDirection: 'row',

    },

    itemLikeCommentMore:{
      flexDirection: 'row',
      marginTop:10,
      marginBottom:10,
      justifyContent: 'space-between',
    },

    likeCntStyle:{
      marginStart: 20,
      fontSize:16,
      color: '#e52c4b',
      fontWeight: "bold",
    },

    itemComment:{
      height:25,
      width: 25,
      marginStart: 20,
      resizeMode: 'contain',
    },


    itemMore:{
      height:30,
      width: 30,
      resizeMode: 'contain',
      alignSelf: 'flex-end',
      marginEnd: 20,
    },

    addPost:{
        marginStart: 20,
        marginTop: 10,
        fontSize: 24,
        color: '#c4c2bc',
    },

    itemUserProfPic:{
        height: 30,
        width: 30,
        borderRadius: 15,
        marginStart:20,
        resizeMode: 'contain',
    },  

    item:{
        marginVertical: 8,
    },


    textItemStyle:{
        paddingStart: 10,
        fontSize: 20,
        
    },

    imageItemStyle:{
        height: 400,
        width: '100%',
        resizeMode: 'stretch',
    },

    itemUsernameProfStyle:{
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom:20,
    },

    itemCommentLikeStyle:{
        flexDirection: 'row',
    },

  })