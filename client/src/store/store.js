import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { TICKET_SUCCESS, TICKET_ERROR } from "./actions";

export function rootReducer(state = [], action) {
  switch (action.type) {
    case TICKET_SUCCESS:
      return action.payload;
    case TICKET_ERROR:
      return action.error;
    default:
      return state;
  }
}

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
