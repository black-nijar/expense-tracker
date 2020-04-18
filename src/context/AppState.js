import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./actionTypes";

// InitialState
const initState = {
  transactions: [],
};

// Create context
export const AppContext = createContext(initState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  // Actions
  const addTransaction = (transaction) => {
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
