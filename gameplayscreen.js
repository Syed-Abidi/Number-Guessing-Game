import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import PlusMinus from './components/controls';

const numberGenerator = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

function GameScreen({ usernumber, onGameOver }) {
  // Declare minBoundary and maxBoundary using 'let'
  let minBoundary = 1;
  let maxBoundary = 100;

  const initialGuess = numberGenerator(1, 100);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === usernumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, usernumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === 'lower' && currentGuess < usernumber) ||
      (direction === 'greater' && currentGuess > usernumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess-1;
    } else {
      minBoundary = currentGuess + 1;
    }

    // Use numberGenerator instead of generateRandomBetween
    const newRndNumber = numberGenerator(minBoundary, maxBoundary);
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleandnum}>
        <Text style={styles.title}>Mobile's Guess</Text>
        <Text style={styles.guess}>Current Guess: {currentGuess}</Text>
        <View style={styles.controlButton}>
          <PlusMinus
            children="higher"
            onPress={nextGuessHandler.bind(this, 'greater')}
            style={styles.gbb}
          />
          <PlusMinus
            children="lower"
            onPress={nextGuessHandler.bind(this, 'lower')}
            style={styles.gbb}
          />
        </View>
      </View>
    </View>
  );
}


export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleandnum: {
    padding: 10,
    marginTop: 30,
  },
  title: {
    color: "white",
    fontSize: 40,
    borderWidth: 4,
    borderColor: "yellow",
    padding: 5,
    backgroundColor: "lightgreen",
  },
  guess: {
    fontSize: 30,
    color: "red",
    marginTop: 40,
    backgroundColor:'blue',
    borderWidth:3,
    borderRadius:10,
    textAlign:'center'
  },
  controlButton:{
  flexDirection: "row", // Align items horizontally
    justifyContent: "space-around", // Space items evenly
  
  },
  gbb:{

  }
});

