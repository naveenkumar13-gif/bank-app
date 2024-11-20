const initaialStateAcc = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function Accountreducer(state = initaialStateAcc, action) {
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
    case "acc/payloan":
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

export function deposit(amount) {
  return { type: "acc/deposit", payload: amount };
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
