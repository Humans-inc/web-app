import Accounts from '../../components/Accounts/Accounts';
import Balance from '../../components/Balance/Balance';
import Transactions from '../../components/Transactions/Transactions';
import styles from './Main.module.css';

const Main = () => {
  // let balance = '1220450.00';
  // let balanceInteger = balance.split('.')[0];
  // let balanceFraction = balance.split('.')[1];

  // let income = '220,000';
  // let expense = '220,000';

  return (
    <div className={styles.main}>
      <Balance />
      <Accounts />

      <Transactions accountPage={false} />
    </div>
  );
};

export default Main;
