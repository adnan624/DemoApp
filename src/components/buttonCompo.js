import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
let styles = require('../assets/styles/styles');

function ButtonCompo({ btnTxt, onClickBtn, style }) {
  return (
    <>
      <TouchableOpacity
        onPress={onClickBtn}
        activeOpacity={0.7}
        style={[styles.btnTouchView, style]}
      >
        <Text style={styles.btnTouchTxt}>{btnTxt}</Text>
      </TouchableOpacity>
    </>
  );
}

export default ButtonCompo;
