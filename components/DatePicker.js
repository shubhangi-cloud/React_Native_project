import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet,Platform,Text,View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      date: new Date(this.props.date),
    };
  }
  
  render() {
    const { onClose, onChange } = this.props;
    const { date } = this.state;
    return (
      <TouchableOpacity style= {styles.ContainerStyle} onPress={onClose}>
        {Platform.OS === 'ios' && (
          <View style = {styles.HeaderStyle}>
            <TouchableOpacity onPress={onClose}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
        )}
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(e, d) => {
            if (Platform.OS === 'ios') {
              this.setState({ date: d });
              onChange(d);
            } else {
              onClose(d);
            }
         }}
         style={{ backgroundColor: 'white' }}
       />
     </TouchableOpacity>
   );
  }
}


const styles = StyleSheet.create({
    ContainerStyle: {
        backgroundColor: Platform.OS === 'ios' ? '#00000066' : 'transparent',
        position: 'absolute',
        // justifyContent: 'flex-end',
        width: '100%',
    },
    HeaderStyle: {
        width: '100%',
        padding: 20,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: 'white',
        borderColor: 'gray',
    },
});