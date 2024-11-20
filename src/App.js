import CreateCustomer from "./feature/customers/CreateCustomer";
import Customer from "./feature/customers/Customer";
import AccountOperations from "./feature/accounts/AccountOperations";
import BalanceDisplay from "./feature/accounts/BalanceDisplay";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
