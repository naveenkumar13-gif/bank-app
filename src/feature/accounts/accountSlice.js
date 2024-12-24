import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

// const accountSlice = createSlice({
//   name: "Account",
//   initialState,
//   reducers: {
// deposit actioncreator
//     deposit(state, action) {
//       state.balance = state.balance + action.payload;
//       state.isLoading = false;
//     },
//     withdraw(state, action) {
//       state.balance -= action.payload;
//     },
//     requestLoan: {
//       prepare(loan, loanPurpose) {
//         return {
//           payload: { loan, loanPurpose },
//         };
//       },

//       reducer(state, action) {
//         if (state.loan > 0) return;
//         state.loan = action.payload.loan;
//         state.loanPurpose = action.payload.loanPurpose;
//         state.balance = state.balance + action.payload.loan;
//       },
//     },
//     payloan(state, action) {
//       state.balance -= state.loan;
//       state.loan = 0;
//       state.loanPurpose = "";
//     },
//     convertedCurrency(state) {
//       state.isLoading = true;
//     },
//   },
// });

// export const { withdraw, requestLoan, payloan } = accountSlice.actions;
// export default accountSlice.reducer;

// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "acc/deposit", payload: amount };

//   return async function (dispatch, getState) {
//     dispatch({ type: "acc/convertedCurrency" });
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     console.log(data);

//     const converted = data.rates.USD;
//     dispatch({ type: "acc/deposit", payload: converted });
//   };
// }

export default function Accountreducer(state = initialState, action) {
  switch (action.type) {
    case "acc/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: true,
      };
    case "acc/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "acc/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.loan,
        loanPurpose: action.payload.loanPurpose,
        balance: state.balance + action.payload.loan,
      };
    case "acc/payloan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case "acc/convertedCurrency":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "acc/deposit", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "acc/convertedCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    console.log(data);

    const converted = data.rates.USD;
    dispatch({ type: "acc/deposit", payload: converted });
  };
}
export function withdraw(amount) {
  return { type: "acc/withdraw", payload: amount };
}
export function requestLoan(loan, loanPurpose) {
  return { type: "acc/requestLoan", payload: { loan, loanPurpose } };
}

export function payloan() {
  return { type: "acc/payloan" };
}
