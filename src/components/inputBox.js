import React from 'react';
import {View,Text,TextInput} from 'react-native';
let styles = require('../assets/styles/styles');

function InputBox({placeHolderText,feildIcon,dataLength,handleChange,checkUserInput,secureTextEntry,showPassword,valueTxt,keyboardType}) {  
    return(
        <View style={styles.inputBoxView}>
            <Text style={{paddingLeft: 10}}>{feildIcon}</Text>
            <TextInput
                style={styles.inputBoxTxtInput}
                placeholder={placeHolderText}
                placeholderTextColor="#d9d9d9"
                maxLength={dataLength}
                onChangeText={handleChange}
                onEndEditing={checkUserInput}
                secureTextEntry={secureTextEntry}
                value={valueTxt}
                keyboardType={keyboardType}
            />
            <View style={{left: -20}}>{showPassword}</View>
        </View>
    );
}

export default InputBox;