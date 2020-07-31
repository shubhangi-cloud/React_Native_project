import React, { Component } from 'react';
import {Text,View,StyleSheet,Dimensions,TouchableOpacity, Alert,Image} from 'react-native';
import Timeline from '../screens/Timeline/Timeline';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



export default class CustomLikeButton extends Component{



    constructor(props){
        super(props);

        
        this.state={
            imageLiked: false,
            currentImage: require('../assets/images/like.png'),
            likeStat: 0,
            statefromAct: this.props.imgLiked,
        }

    }



    //call from custom like btn
    likePressed = () => {


        if(!this.state.imageLiked){
            this.setState({
                imageLiked: true,
                currentImage: require('../assets/images/like.png'),
                likeStat:1,
            })
            console.log("post disliked")
        }
        else{
            this.setState({
                imageLiked: false,
                currentImage: require('../assets/images/liked.png'),
                likeStat:0,
            })
            console.log("post liked")
        }


        this.sendLikeToServer({alikeStatus: this.state.likeStat,apostID: this.props.apostID});
    }







    fetchTimelineData = async() => {
        try{
          // http://103.129.98.170/event_ticket_new/Ticket/public/index.php/api/v1/event-getUserProfileTimeLine
    //https://api.myjson.com/bins/18bems
           fetch('http://103.129.98.170/event_ticket_new/Ticket/public/index.php/api/v1/event-getUserProfileTimeLine',{
           method: 'POST',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
           },
          
          
           body: JSON.stringify({
             langId : 'en',
             loginUserId: '2',
             page: '1',
             userId: '2',
         })
      
            }).then((response) => response.json())
            .then((responseJson) => {
             //check the status of api call by verifying the flag.
    
               if(responseJson.Status==200){
                 console.log(responseJson);
    
                 
    
                 this.setState({
                   loaderRunning: false,
                   serverData: responseJson['TimeLine-Data'],
                   serverAllData: responseJson,
                 });
                 
                 console.log("Like status:");
                 console.log(responseJson['TimeLine-Data']['likeFlag'])
               }
              
              
            return this.state;
            
            }).catch(function (error) {
            this.setState({loaderRunning: false});
            console.log("-------- error ------- "+error);
          //  alert("result:"+error)
            });
    
    
         }catch(Error){
           console.log(Error);
         }
      }







        componentDidMount(){

            if(this.state.statefromAct){
                console.log("state of post liked::");
                console.log(this.state.statefromAct);
            }

        
            if(this.state.statefromAct == 1){
                this.setState({
                    imageLiked: false,
                    currentImage: require('../assets/images/liked.png'),
                    likeStat:0,
                })
            }


            if(this.state.statefromAct == 0){
                this.setState({
                    imageLiked: true,
                    currentImage: require('../assets/images/like.png'),
                    likeStat:1,
                })
            }
        }
    



        componentDidUpdate(prevProp,prevState) {
            console.log("comp did update:"+prevProp)

           // this.render();

            // if(this.state.imageLiked === false){
            //     this.setState({
            //         imageLiked: true,
            //         currentImage: require('../assets/images/liked.png'),
            //     })
            // }

        //    if (this.state.imageLiked !== prevProp.btnLikePressed) {
        //         console.log("comp did update: "+this.state.imageLiked)


        //          this.setState({
        //             imageLiked: this.props.btnLikePressed,
        //             currentImage: require('../assets/images/liked.png'),
        //         })
                
        //     }
        }


        shouldComponentUpdate(nextProps, nextState){
            
            console.log("comp should update");

            console.log("next state::");
            console.log(nextState)


            console.log("this props in should update::");
            console.log(this.props.apostID);


            console.log("this.imageLiked: "+ this.state.imageLiked)


            if(this.state.imageLiked != nextState.imageLiked){
                this.setState({currentImage:  require('../assets/images/liked.png')})
                
                return true
            }
            
            return false;
            
        }




        likefromTimeLine = () =>{
            try{
                console.log("LIKE FROM TIMELINEE");

                this.setState({
                    imageLiked: false,
                    currentImage: require('../assets/images/like.png'),
                    likeStat:0,
                    })


                 this.render();
            }
            catch(Error){
                console.log("--ERROR--")
                console.log(Error)
            }
        }
       
    

        //function called from the timeline
        likeFromDoubleTap = () =>{

                // this.setState({imageLiked: doubleTapped})

                // console.log("dbl tapppp::::!!")
                // console.log("tapped:::::"+doubleTapped)



                this.setState({
                    imageLiked: false,
                    likeStat:0,
                    })

                
                console.log("current states");
                console.log(this.state);
                console.log("current image::"+this.state.currentImage);

                //  this.render();
                
                // if(this.state.imageLiked){
                //     this.setState({
                //         imageLiked: true,
                //         currentImage: require('../assets/images/like.png'),
                //         likeStat:1,
                //     })
                //     console.log("dbl tap: post disliked")
                // }
                // else{
                //     this.setState({
                //         imageLiked: false,
                //         currentImage: require('../assets/images/liked.png'),
                //         likeStat:0,
                //     })
                //     console.log("dbl tap: post liked")
                // }
            }
        



    //    static getDerivedStateFromProps(props, state){
    //         console.log("getDerivedStateFromProps:")
    //         console.log(props);
    //     }



     sendLikeToServer = ({alikeStatus,apostID}) => {
        try{


                console.log("from custom like button");
                console.log("a like status: "+alikeStatus);
                console.log("a postID: "+apostID);

            fetch('http://103.129.98.170/event_ticket_new/Ticket/public/index.php/api/v1/event-saveUserTimelineLike',{
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
            
            
                body: JSON.stringify({
                likeStatus: alikeStatus.toString(),
                postId: apostID.toString(),
                userId: '2',
            })
        
         }).then((response) => response.json())
         .then((responseJson) => {
          //check the status of api call by verifying the flag.

            
              console.log(responseJson);

              if(responseJson.Status == 200){
                  console.log("update to timeline from custom like button");
                  this.fetchTimelineData();
              }
         return responseJson;
    
   }).catch(function (error) {
    
   console.log("-------- error ------- "+error);
  //  alert("result:"+error)
   });


    }
    catch(Error){
      console.log(Error);
    }
  }






    

    render(){
        return(
            <View>
                <TouchableOpacity onPress={()=> this.likePressed()}>
                    <Image source={this.props.imageObj == 0 ? require('../assets/images/liked.png') : require('../assets/images/like.png')} style={styles.itemLike}></Image>
                </TouchableOpacity>
            </View>
        );
    }

}





const styles = StyleSheet.create({


    itemLike:{
      height:25,
      width: 25,
      marginStart: 20,
      resizeMode: 'contain',
    },



  })
