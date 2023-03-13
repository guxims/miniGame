//allows us to pick a number and then start the game
//we wanna display the inputfield where users can enter a number, 2 buttons to confirm and reset that number,titles..
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onConfirmNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }      

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);


    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert..
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text:'Okay', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    }
    onConfirmNumber(chosenNumber);
  }

  return (
    <View style={styles.screen}>  
      <Title>Guess My number</Title>
    <Card> 
      <InstructionText>Enter a number</InstructionText>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  // inputContainer: {
  //   marginTop: 100,
  //   padding: 16,
  //   backgroundColor: Colors.primary800,
  //   marginHorizontal: 24,
  //   borderRadius: 8,
  //   elevation: 4, //PER ANDROID
  //   //per ios:
  //   shadowColor: "black",
  //   shadowOffset: { width: 0, height: 5 },
  //   shadowRadius: 6,
  //   shadowOpacity: 0.3,
  //   alignItems: "center",
  // },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 24,
    alignItems:'center'
  },
  // instructionText:{
  //   color:Colors.accent500,
  //   fontSize:24,
  // }
});
