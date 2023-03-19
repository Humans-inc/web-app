import { createSlice } from '@reduxjs/toolkit';

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [
      {
        name: 'Доход от воркшопа',
        type: 'income',
        date: '15 фев, 14:44',
        sum: '+30000',
        account: 'Точка',
        id: 1,
      },
      {
        name: 'Доход от воркшопа',
        type: 'expense',
        date: '15 фев, 14:44',
        sum: '-30000',
        account: 'Точка',
        id: 2,
      },
      {
        name: 'Доход от воркшопа',
        type: 'income',
        date: '15 фев, 14:44',
        sum: '+30000',
        account: 'Точка',
        id: 3,
      },
      {
        name: 'Доход от воркшопа',
        type: 'expense',
        date: '15 фев, 14:44',
        sum: '-30000',
        account: 'Точка',
        id: 4,
      },
      {
        name: 'Доход от воркшопа',
        type: 'income',
        date: '15 фев, 14:44',
        sum: '+30000',
        account: 'Точка',
        id: 5,
      },
      {
        name: 'Доход от воркшопа',
        type: 'expense',
        date: '15 фев, 14:44',
        sum: '-30000',
        account: 'Точка',
        id: 6,
      },
    ],
  },
});

export default transactionSlice.reducer;