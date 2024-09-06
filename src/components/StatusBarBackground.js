import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

function StatusBarBackground() {
  const styles = StyleSheet.create({
    statusBarBackground: {
      height: (Platform.OS === 'ios') ? 45 : 0,
      backgroundColor: "white",
    }
  });

  return(
  <>
    <View style={[styles.statusBarBackground]}>
    </View>
    </>
  );
}

export default StatusBarBackground;