import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './AccountSlice';
import transactionReducer from './TransactionSlice';
import balanceReducer from './BalanceSlice';

export default configureStore({
  reducer: {
    accounts: accountReducer,
    transactions: transactionReducer,
    balance: balanceReducer,
  },
});
