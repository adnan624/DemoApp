import React,{useState} from 'react';
import {View,Text} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
let styles = require('../assets/styles/styles');

function DropDownBox({dropTxt,drop_data,placeTxt}) {  
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState('');
    
    return(
        <View>
          <Text style={styles.dropdownBoxTxt}>{dropTxt}</Text>
          <Dropdown
            style={styles.dropdownBox}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={drop_data}
            //search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={placeTxt}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
        </View>
    );
}

export default DropDownBox;