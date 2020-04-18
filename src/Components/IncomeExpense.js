import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "../context/AppState";

const IncomeExpense = () => {
  const { transactions } = useContext(AppContext);

  const amounts = transactions.map((transaction) =>
    parseInt(transaction.amount)
  );
  // Income
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  // Expense
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);
  return (
    <View style={styles.amount}>
      <View>
        <Text style={styles.text}>Income</Text>
        <Text style={styles.income}>Rs.{income}</Text>
      </View>
      <View>
        <Text style={styles.text}>Expense</Text>
        <Text style={styles.expense}> Rs.{expense}</Text>
      </View>
    </View>
  );
};

export default IncomeExpense;

const styles = StyleSheet.create({
  amount: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 0.5,
    marginBottom: 10,
  },
  income: {
    color: "green",
    fontSize: 19,
  },
  expense: {
    color: "red",
    fontSize: 19,
  },
  text: {
    fontSize: 20,
  },
});
