import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { ADD_TRANSACTION } from "./actionTypes";

// InitialState
const initState = {
  transaction: [],
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

  // Return
  return (
    <AppContext.Provider
      value={{
        transaction: state.transaction,
        addTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
