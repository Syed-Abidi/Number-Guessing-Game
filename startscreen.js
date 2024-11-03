import React, { useState } from "react";
import { ImageBackground, TextInput, View, Alert, StyleSheet, Text } from "react-native"; // Correct import
import { LinearGradient } from "expo-linear-gradient";
import StartButton from "./ssbutton.js"; // Assuming this is your custom button component

const StartScreen = ({ onPickNumber }) => { // Corrected prop name
  const [enterednumber, setenterednumber] = useState("");

  const numberstrokes = (input) => {
    setenterednumber(input); // No changes here, works fine
  };

  const resetbuttonhandler = () => {
    setenterednumber("");
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(enterednumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) { // Check for NaN explicitly
      Alert.alert("Enter valid number!", "Number must be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetbuttonhandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber); // Call the handler to pass the chosen number
  };

  return (
    <LinearGradient colors={["blue", "white"]} style={style.ssbody}>
      <ImageBackground
        source={require("./background.jpg")}
        resizeMode="cover"
        imageStyle={style.imagebg}
        style={style.rootscreen}
      >
       <Text style={style.enterheading}>Enter your number</Text>
        <View style={style.inputsection}>
          <TextInput
            style={style.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            onChangeText={numberstrokes}
            value={enterednumber}
          />
          <View style={style.buttoncontainer}>
            <StartButton onSSButtonPress={resetbuttonhandler}>
              Reset
            </StartButton>
            <StartButton onSSButtonPress={confirmHandler}>Confirm</StartButton>
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

export default StartScreen;

const style = StyleSheet.create({
  inputsection: {
    padding: 16,
    marginTop: 20,
    magrinLeft: 23,
    magrinRight: 23,
    borderRadius: 60,
    backgroundColor: "#fffaaa",
    elevation: 4,
    shadowColor: "red",
    // shadowOffset:{width:10, height:10},
    //shadowRadius: 6,
  },

  buttoncontainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  numberInput: {
    padding: 10,
    color: "red",
    fontSize: 25,
    textAlign: "center",
    textDecorationLine: "underline",
    borderBottomColor: "red",
    borderBottomWidth: 3,
  },
  ssbody: {
    backgroundColor: "lightblue",
    flex: 1,
  },
  imagebg: {
    opacity: 0.15,
  },
  rootscreen: {
    flex: 1,
  },
  enterheading:{
    color:'yellow',
    fontSize:20,
    textAlign:'center',
    marginTop:130,
    textDecorationLine: 'underline',
    fontWeight:800,
  },
});