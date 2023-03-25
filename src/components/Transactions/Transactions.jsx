import Transaction from '../Transaction/Transaction';
import styles from './Transactions.module.css';

import { useSelector } from 'react-redux';

const Transactions = ({accountPage}) => {

  const transactionsList = useSelector((state) => state.transactions.transactions);

  return (
    <div className={!accountPage ? styles.transactions : styles.transactionsAccount} >
      <h2 className={styles.title}>Транзакции</h2>
      <button
        className={styles.getAll}
        disabled={transactionsList.length < 10}
      >
        См. все
      </button>
      <div className={styles.transactionsList}>
        {transactionsList.length ? (
          transactionsList.map((item) => (
            <Transaction
              key={item.id}
              name={item.name}
              type={item.type}
              date={item.date}
              sum={item.sum}
              account={item.account}
              accountPage={accountPage}
            />
          ))
        ) : (
          <div className={styles.noAccounts}>Нет счетов</div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
