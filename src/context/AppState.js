import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  GET_TRANSACTIONS,
} from "./actionTypes";
import axios from "axios";

// InitialState
const initState = {
  transactions: [],
};

// Create context
export const AppContext = createContext(initState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  // Actions

  // GET Contacts
  const getTransaction = async () => {
    try {
      await fetch("http://localhost:5000/api/transactions").then((res) => {
        dispatch({
          type: GET_TRANSACTIONS,
          payload: res.data,
        });
      });
    } catch (error) {
      console.log("Err", error);
    }
  };
  const addTransaction = (transaction) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("http://localhost:5000/api/transactions", transaction, config)
      .then((res) => res.data)
      .catch((err) => err);
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction,
    });
  };

  // Delete
  const deleteTransaction = (id) => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  };
  // Return
  return (
    <AppContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        getTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
