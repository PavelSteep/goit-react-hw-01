import React from "react";
import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.transactionHistoryTr}>
          <th className={`${css.transactionHistoryTh} ${css.transactionHistoryThFirst}`}>Type</th>
          <th className={`${css.transactionHistoryTh} ${css.transactionHistoryThSecond}`}>Amount</th>
          <th className={`${css.transactionHistoryTh} ${css.transactionHistoryThThird}`}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.transactionHistoryTr}>
            <td className={`${css.transactionHistoryTd} ${css.transactionHistoryTdFirst}`}>{type}</td>
            <td className={`${css.transactionHistoryTd} ${css.transactionHistoryTdSecond}`}>{amount}</td>
            <td className={`${css.transactionHistoryTd} ${css.transactionHistoryTdThird}`}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
