import { createSlice } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: {
    balance: '1220450.00',
    // balanceInteger: this.balance.split('.')[0],
    // balanceFraction: this.balance.split('.')[1],
    income: '220,000',
    expense: '220,000',
  },
});

export default balanceSlice.reducer;
