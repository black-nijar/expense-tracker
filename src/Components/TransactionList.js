import React, { useContext } from "react";
import { AppContext } from "../context/AppState";
import { View, FlatList, Text, StyleSheet } from "react-native";
import Transaction from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(AppContext);
  return (
    <View>
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
    textAlign: 'center',
    fontSize: 20,
  }
})