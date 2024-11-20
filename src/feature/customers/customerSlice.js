const initaialStateCustomer = {
  fullName: "",
  nationId: "",
  createdAt: "",
};

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
