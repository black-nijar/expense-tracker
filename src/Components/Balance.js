import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "../context/AppState";

const Balance = () => {
  const { transactions } = useContext(AppContext);

  const amounts = transactions.map((transaction) =>
    parseInt(transaction.amount)
  );

  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  return (
    <View>
      <Text style={styles.balance}>Your Balance is Rs.{total}</Text>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  balance: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
