import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const AddTransaction = () => {
  return (
    <View>
      <Text style={styles.newTransaction}>Add New Transaction</Text>
      <Text style={styles.text}>Text :</Text>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="grey"
        placeholder="Enter Text"
      />
      <Text style={styles.text}>Amount :</Text>
      <TextInput
        style={styles.textInput}
        placeholder="expense(-100) or income(+100)"
        placeholderTextColor="grey"
        keyboardType="number-pad"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTransaction;

const styles = StyleSheet.create({
  newTransaction: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
  },
  subject: {
    fontSize: 18,
  },
  textInput: {
    padding: 8,
    height: 45,
    borderColor: "#7a42f4",
    borderWidth: 1,
    fontSize: 19,
    borderRadius: 10,
  },
  text: {
    fontSize: 19,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#3C40C6",
    padding: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
