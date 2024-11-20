import { combineReducers, createStore } from "redux";

const initialStateAcc = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
function accountReducer(state = initialStateAcc, action) {
  switch (action.type) {
    case "acc/deposit":
      return { ...state, balance: state.balance + action.payload };
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
    case "acc/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}
const rootreducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootreducer);

function deposit(amount) {
  return { type: "acc/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "acc/withdraw", payload: amount };
}

function requestLoan(loan, loanPurpose) {
  return {
    type: "acc/requestLoan",
    payload: { loan, loanPurpose },
  };
}

function payLoan() {
  return { type: "acc/payLoan" };
}

// store.dispatch({ type: "acc/deposit", payload: 1000 });
// store.dispatch({ type: "acc/withdraw", payload: 200 });
// store.dispatch({
//   type: "acc/requestLoan",
//   payload: { loan: 1000, loanPurpose: "car" },
// });

// store.dispatch({ type: "acc/payloan" });
// console.log(store.getState());

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(1000, "car"));
store.dispatch(payLoan());

console.log(store.getState());

function createCustome(fullName, nationalID) {
  return {
    type: "customer/createCustome",
    payload: { fullName, nationalID, createdAt: new Date().toISOString },
  };
}

function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustome":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return { ...state, fullName: action.payload.fullName };
    default:
      return state;
  }
}

store.dispatch(createCustome("naveen", "dhfjshf"));
console.log(store.getState());
