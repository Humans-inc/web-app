import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'accounts',
  initialState: {
    accounts: [
      // {
      //   name: 'Тинькофф - 1',
      //   money: '40 000',
      //   id: 1,
      //   description: 'Деньги от продажи обучения',
      // },
      // {
      //   name: 'Тинькофф - 2',
      //   money: '50 000',
      //   id: 2,
      //   description: 'Деньги от продажи обучения',
      // },
      // {
      //   name: 'Тинькофф - 3',
      //   money: '60 000',
      //   id: 3,
      //   description: 'Деньги от продажи обучения',
      // },
    ],
  },
  reducers: {
    addAccount(state, action) {
      state.accounts.unshift({
        name: action.payload.name,
        money: 0,
        id: new Date().toISOString(),
        description: action.payload.description,
      });
    },
  },
});

export const { addAccount } = accountSlice.actions;
export default accountSlice.reducer;