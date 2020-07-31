import React from 'react';
import { StyleSheet, View, Text, Image,Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider'
let dimensions = Dimensions.get("window");
export const slides = [
    {
      key: 's1',
      image: require('../../assets/images/FoodDrink.png'),
      title: 'Food & Drink',
      text: 'Make it more than a dine out experience! find a cafe or a restaurant who offer an entertaining experience along with delicious food and nice a drink ',
    },
    {
      key: 's2',
      image: require('../../assets/images/Entertainment.png'),
      title: 'Entertainment',
      text: 'Use your free time to learn and exercise something new! Reveal your hidden title',
    },
    {
      key: 's3',
      image: require('../../assets/images/Tours.png'),
      title: 'Tours & Activities',
      text: 'Make it more than a dine out experience! find a cafe or a restaurant who offer an entertaining experience along with delicious food and nice a drink ',
    },
    {
      key: 's4',
      image:  require('../../assets/images/Events.png'),
      title: 'Events',
      text: 'Use your free time to learn and exercise something new! Reveal your hidden title',
    },
    {
      key: 's5',
      image:  require('../../assets/images/Sports.png'),
      title: 'Sports & Lifestyle',
      text: 'Make it more than a dine out experience! find a cafe or a restaurant who offer an entertaining experience along with delicious food and nice a drink ',
    },
    {
      key: 's6',
      image: require('../../assets/images/Training.png'),
      title: 'Training & Workshops',
      text: 'Use your free time to learn and exercise something new! Reveal your hidden title',
    },
  ];

export default class SlideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
       {/* body container */}
       <View>
          <Image style={styles.imageSlider} source={item.image}/>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
       </View>
      </View>
    );
    };
    _renderNextButton = () =>{
        return(
            <View style={styles.buttonCircle}>
                <Image style={styles.nextButtonIconStyle}  source={require('../../assets/images/right.png')}/>
            </View>
        );
    };
    _renderDoneButton = () =>{
        return(
            <View style={styles.buttonCircle}>
                <Image style={styles.nextButtonIconStyle}  source={require('../../assets/images/icons8-checkmark-384.png')}/>
            </View>
        );
    };
    _renderSkipButton = () =>{
        return(
            <View style={styles.buttonCircle}>
                <Text style={styles.btntext}>Skip</Text>
            </View>
        );
    };
    render() {
    return (
        <AppIntroSlider
        style={styles.dots}
        data={slides}
        renderItem={this._renderItem}
        activeDotStyle = {{backgroundColor:'#DF0700'}}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderSkipButton = {this._renderSkipButton}
        showSkipButton={true}
        onSkip={this.props.nextScreen}
        onDone={this.props.nextScreen} />
    );
    }
}
const styles = StyleSheet.create({
  dots: {
    color: 'red',
  },
  container: {
    flex:1,
    backgroundColor:'#fff',
    marginTop:dimensions.width*0.5,
    borderTopLeftRadius:dimensions.width*0.1,
    borderTopRightRadius:dimensions.width*0.1,
  },
  imageSlider: {
    width: '25%',
    height: '25%', 
    resizeMode: 'contain',
    alignSelf : 'center',
    marginTop: '10%',
    marginBottom: '10%',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: '8%',
    fontFamily:'SFProText-Medium',
  },
  text: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
   fontFamily:'SFProText-Regular',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#DF0000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonIconStyle:{
    height:20,
    width:20,
  },
  btntext: {
    fontSize: 16,
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: '600',
}
});


