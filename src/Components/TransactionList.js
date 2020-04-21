import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppState";
import { View, FlatList, Text, StyleSheet, Button } from "react-native";
import Transaction from "./Transaction";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import Axios from "axios";

export const TransactionList = ({ navigation }) => {
  const { transactions, getTransaction } = useContext(AppContext);

  useEffect(() => {
    // Get transaction
    getTransaction();
    //eslint-disable-next-line 
  }, []);
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
          <Transaction key={item._id} transaction={item} />
        )}
        keyExtractor={(item) => item._id}
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
