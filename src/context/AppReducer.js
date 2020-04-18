import { ADD_TRANSACTION } from "./actionTypes";

export default (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };
    default:
      return state;
  }
};
