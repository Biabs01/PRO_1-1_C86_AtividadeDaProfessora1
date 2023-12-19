import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

let customFonts = {'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf')};

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Perfil</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
