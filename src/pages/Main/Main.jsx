import Accounts from '../../components/Accounts/Accounts';
import Balance from '../../components/Balance/Balance';
import Transactions from '../../components/Transactions/Transactions';
import styles from './Main.module.css';

const Main = () => {
  let balance = '1220450.00';
  let balanceInteger = balance.split('.')[0];
  let balanceFraction = balance.split('.')[1];

  let income = '220,000';
  let expense = '220,000';

  const accountsList = [
    {
      name: 'Тинькофф - 1',
      money: '40 000',
      id: 1,
      description: 'Деньги от продажи обучения',
    },
    {
      name: 'Тинькофф - 2',
      money: '50 000',
      id: 2,
      description: 'Деньги от продажи обучения',
    },
    {
      name: 'Тинькофф - 3',
      money: '60 000',
      id: 3,
      description: 'Деньги от продажи обучения',
    },
  ]

  const transactionsList = [
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
  ];

  return (
    <div className={styles.main}>
      <Balance
        balanceInteger={balanceInteger}
        balanceFraction={balanceFraction}
        income={income}
        expense={expense}
      />
      <Accounts accountsList={accountsList}/>

      <Transactions transactionsList={transactionsList}/>
    </div>
  );
};

export default Main;
