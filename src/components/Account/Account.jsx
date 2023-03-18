import styles from './Account.module.css';

const Account = ({ name, money, description }) => {
  return (
    <div className={styles.account}>
      <h4 className={styles.name}>{name}</h4>
      <button className={styles.menu}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z'
            fill='black'
          />
          <path
            d='M17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z'
            fill='black'
          />
          <path
            d='M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12Z'
            fill='black'
          />
        </svg>
      </button>
      <p className={styles.money}>{money}₽</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Account;
