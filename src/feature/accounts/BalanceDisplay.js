import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ Balance }) {
  return <div className="balance">{formatCurrency(Balance)}</div>;
}
// from store => state
function mapStateToProps(state) {
  return {
    Balance: state.account.balance,
  };
}
export default connect(mapStateToProps)(BalanceDisplay);
