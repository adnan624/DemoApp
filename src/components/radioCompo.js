import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
let styles = require('../assets/styles/styles');

function RadioCompo() {  
  const [radioOn, setRadioOn] = useState(true);
  return(
    <View style={[styles.radioBtnContainer]}>
      <View style={styles.radioBtnView}>
        { radioOn === false ? 
          <TouchableOpacity 
            onPress={() => { setRadioOn(true); }}
            style={styles.radioBtnTouchContainer}>
          </TouchableOpacity>
          :
          <TouchableOpacity 
            onPress={() => { setRadioOn(false);}}
            style={styles.radioBtnTouchContainer1}>
            <View style={styles.radioBtnTouchView}>
            </View>
          </TouchableOpacity>
        }
        <Text style={styles.radioBtnTxt}>Male</Text>
      </View> 
      <View style={styles.radioBtnView}>
        { radioOn === true ? 
          <TouchableOpacity 
            onPress={() => { setRadioOn(false); }}
            style={styles.radioBtnTouchContainer}>
          </TouchableOpacity>
          :
          <TouchableOpacity 
            onPress={() => { setRadioOn(true);}}
            style={styles.radioBtnTouchContainer1}>
            <View style={styles.radioBtnTouchView}>
            </View>
          </TouchableOpacity>
        }
        <Text style={styles.radioBtnTxt}>Female</Text>
      </View> 
    </View>
  );
}

export default RadioCompo;