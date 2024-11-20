import { combineReducers, createStore } from "redux";
import Accountreducer from "./feature/accounts/accountSlice";
import customerReducer from "./feature/customers/customerSlice";
const rootreducer = combineReducers({
  account: Accountreducer,
  customer: customerReducer,
});

const store = createStore(rootreducer);

export default store;
