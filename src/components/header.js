import React from 'react';
import {View,Text} from 'react-native';
let styles = require('../assets/styles/styles');

function Header({touchIcon,headerTxt}) {
    return(
        <>
         <View style={styles.headerMainView}>
          <View style={styles.headerLeftView}>
            {touchIcon}
          </View>
          <View style={styles.headerCenterView}>
            <Text style={styles.headerMainTxt}>{headerTxt}</Text>
          </View>
          <View style={styles.headerRightView} />
        </View>
        </>
    );
}

export default Header;