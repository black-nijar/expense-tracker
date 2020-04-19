import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppState";
import { View, FlatList, Text, StyleSheet, Button } from "react-native";
import Transaction from "./Transaction";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import Test from "./Test";

export const TransactionList = ({ navigation }) => {
  const { transactions, getTransaction } = useContext(AppContext);
  // useEffect(() => {
  //   fetch('http://localhost:5000/api/transactions')
  //   .then(res => console.log(res))
  //   .catch(err => err)
  //   // Get transaction
  //  // getTransaction()
  // },[])
  return (
    <View>
      <Balance />
      <IncomeExpense />
      <Button
        title="Add transaction"
        onPress={() => navigation.navigate("Home")}
      />
      <Text style={styles.history}>History</Text>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <Transaction key={item.id} transaction={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  history: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
  },
});
