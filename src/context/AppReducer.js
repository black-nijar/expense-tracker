import { ADD_TRANSACTION, DELETE_TRANSACTION, GET_TRANSACTIONS } from "./actionTypes";

export default (state, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      console.log(action.payload)
      return {
        ...state,
        transactions: action.payload
      }
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
