import React,{
    Component
} from 'react';

import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Platform,
    TextInput,
    ActivityIndicator,
    TouchableWithoutFeedback,
    FlatList,
} from 'react-native';

import {CustomHeader} from '../components/CustomHeader'


//const screenWidth = Dimensions.get('window').width;
//const screenHeight = Dimensions.get('window').height;

export default class CountrySelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            cityArray: [], // contain data to show in list
            error: null,
        };
    
        this.arrayholder = []; // contain json data
    }
    
    componentDidMount() {
        this.makeRequest(); 
    }
    
    //****************************************************
        /* MakeRequst Function for featch data from server */
    //**************************************************** 
    makeRequest = () => {
        const url = `http://103.129.98.170/event_ticket_new/User/public/index.php/api/v1/country-list?`;
        this.setState({ isLoading: true });

        fetch(url,{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                lang : 'en',

            })
        })
            .then(response => response.json())
            .then(responsejson => {
                console.log(responsejson["country-list"].details);
            this.setState({
                cityArray: responsejson["country-list"].details,
                error: responsejson.error || null,
                isLoading: false,
            });
            this.arrayholder = responsejson["country-list"].details;
            })
            .catch(error => {
            this.setState({ error, isLoading: false });
        });
    };

    //****************************************************
    /* searchFilterFunction Function for filter data  */
    //**************************************************** 
    searchCityFromList = text => {
        this.setState({
            value: text,
        });

        // filter data
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.country_name.toUpperCase()} ${item.country_phonecode}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        // store filter data in temp arr
        this.setState({
            cityArray: newData,
        });
    };
    
    /*goBack(name) {
        const { navigation } = this.props;
        navigation.goBack();
        navigation.state.params.onSelect({cityName: name});
      }*/
    
    
    render(){


            if(this.state.isLoading){
                
                <ActivityIndicator size="large" color="#DF0700" animating={this.state.isLoading} hidesWhenStopped={true}/>
            }
            
        return(
            <View  style = {styles.mainContainer}>
            
                <CustomHeader title="Country" cnavigation={()=>this.props.navigation.goBack()} textLen={"Country".length.toString()}/>

                <View style = {styles.searchBarView}>
                    <Image 
                        source = {require('../assets/images/search.png')}
                        style= {styles.serachIcon}
                    />
                    <TextInput 
                        placeholder="Search"
                        style= {styles.textInputStyle}
                        onChangeText= {text => this.searchCityFromList(text)}
                    />

                </View>
                
                <View style = {{flex:1}}>
                { 
                this.state.isLoading ? <ActivityIndicator size="large" color="#DF0700" animating={this.state.isLoading}/> : 
                     <FlatList 
                         data = {this.state.cityArray}
                         renderItem = {({item}) =>
                             <View>
                                 <TouchableOpacity onPress = {() => {
                                     this.props.navigation.state.params.returnCountryData(item.country_id, item.country_name);
                                     this.props.navigation.goBack();
                                 }}>
                                     <View style = { styles.itemContainer}>
                                         <Text style= {{fontWeight:'bold'}}>{item.country_name}</Text>
                                         <Text style = {{marginTop:5}}>{item.country_phonecode}</Text> 
                                     </View>
                                 </TouchableOpacity>
                                 <View style = {styles.dividerLine}></View>
                             </View>
                         }
                         keyExtractor = {(item) => (item.country_id).toString()}
                         bounces = {false}
                         showsVerticalScrollIndicator = {false}
                     />
                }  
               </View>
            </View>
        );
    }
}


//****************************************************
        /* styles for UI design  */
//**************************************************** 
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    headerConatiner: {
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#DF0700',
    },
    backBtn: {
        width: 20,
        height:20,
        marginTop:40
    },
    headerTitle: {
        flex:1 ,
        marginLeft: -20,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 40,
    },
    headerTitleView: {
        flex:1,
        flexDirection: 'row',
    },
    searchBarView: {
        flexDirection: 'row',
        backgroundColor: '#dedede',
        margin: 20,
        marginBottom: 10,
        marginTop: 10,
        height: 35,
        borderRadius: 10,
    },
    serachIcon: {
        height: 20,
        width: 20,
        alignSelf: 'center',
        margin: 5,
    },
    textInputStyle: {
        flex: 1,
        textAlign:'left',
    },
    itemContainer: {
        margin: 15,
        marginLeft: 20,
    },
    dividerLine: {
        height: 1,
        backgroundColor: '#dedede'
    },
});