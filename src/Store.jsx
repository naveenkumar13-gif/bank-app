import { configureStore } from "@reduxjs/toolkit";
import Accountreducer from "./feature/accounts/accountSlice";
import customerReducer from "./feature/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: Accountreducer,
    customer: customerReducer,
  },
});

export default store;
