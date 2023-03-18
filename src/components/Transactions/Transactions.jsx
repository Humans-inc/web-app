import Transaction from '../Transaction/Transaction';
import styles from './Transactions.module.css';

const Transactions = ({ transactionsList }) => {
  return (
    <div className={styles.transactions}>
      <h2 className={styles.title}>Транзакции</h2>
      <button className={styles.getAll} disabled={transactionsList.length < 10 ? true : false}>См. все</button>
      <div className={styles.transactionsList}>
        {transactionsList.length &&
          transactionsList.map((item) => (
            <Transaction
              key={item.id}
              name={item.name}
              type={item.type}
              date={item.date}
              sum={item.sum}
              account={item.account}
            />
          ))}
      </div>
    </div>
  );
};

export default Transactions;
