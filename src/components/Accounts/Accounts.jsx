import Account from '../Account/Account';
import styles from './Accounts.module.css';
import { useState } from 'react';

const Accounts = ({ accountsList }) => {
  let [isVisible, setIsVisible] = useState(false);
  return (
    <div className={styles.accounts}>
      <h2 className={styles.title}>Мои счета</h2>
      <button
        className={styles.buttonAdd}
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {isVisible ? 'Закрыть' : 'Добавить'}
      </button>
      <div className={styles.accountsList}>
        {accountsList.length &&
          accountsList.map((account) => (
            <Account
              key={account.id}
              name={account.name}
              money={account.money}
              description={account.description}
            />
          ))}
      </div>
      {isVisible && (
        <form action=''>
        <input type='text' />
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          Submit
        </button>
      </form>
      )}

    </div>
  );
};

export default Accounts;
