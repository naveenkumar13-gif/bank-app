import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationId) {
        return {
          payload: fullName,
          nationId,
          createdAt: new Date().toISOString,
        };
      },
    },
    reducer(state, action) {
      state.fullName = action.payload.fullName;
      state.nationId = action.payload.nationId;
      state.createdAt = action.payload.createdAt;
    },
  },
  updatedName(state, action) {
    state.fullName = action.payload;
  },
});

export const { createCustomer, updatedName } = customerSlice.actions;
export default customerSlice.reducer;
/*
export default function customerReducer(state = initaialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationId: action.payload.nationId,
        createdAt: action.payload.createdAt,
      };

    case "customer/updatedName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationId, createdAt: new Date().toISOString },
  };
}

export function updatedName(fullName) {
  return {
    type: "customer/updatedName",
    payloan: fullName,
  };
}
*/
