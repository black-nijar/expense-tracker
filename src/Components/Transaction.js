import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Transaction = ({ transaction }) => {
  console.log("TRANSACTION :", transaction);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <View styles={transaction.amount < 0 ? "minus" : "plus"}>
      <View style={styles.transaction}>
        <Text style={styles.text}>{transaction.text}</Text>
        <Text style={styles.text}>
          {sign}
          {Math.abs(transaction.amount)}
        </Text>
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  transaction: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 20,

    padding: 4,
    borderBottomColor: "blue",
    borderBottomWidth: StyleSheet.hairlineWidth

  },
});
