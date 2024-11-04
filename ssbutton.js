import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function StartButton({ children, onSSButtonPress }) {
  // Define the onPress function here and pass it to the Pressable component

  return (
    <View style={styles.outerbuttoncontainer}>
      <Pressable
        style={styles.innerbuttoncontainer}
        onPress={onSSButtonPress}
        android_ripple={{ color: "red" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  innerbuttoncontainer: {},
  outerbuttoncontainer: {
    flexDirection: "row",
    justifyContent: "center", // Center content within the button
    alignItems: "center", // Center vertically
    padding: 10,
    paddingHorizontal: "10%",
    backgroundColor: "lightgreen",
    borderRadius: 8, // Optional: Adds rounded corners
    margin: 5,
    borderWidth:4,
    borderRadius:20,
    borderColor:'yellow',
  },
  buttonText: {
    fontSize: 16,
    color: "black",
  },
});
