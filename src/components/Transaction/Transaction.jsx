import styles from './Transaction.module.css';

const Transaction = ({ name, date, type, account, sum }) => {
  return (
    <div className={styles.transaction}>
      {type === 'income' ? (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            width='40'
            height='40'
            rx='20'
            fill='#F3F3F3'
          />
          <path
            d='M24.1667 25C24.6269 25 25 24.6269 25 24.1667C25 23.7064 24.6269 23.3333 24.1667 23.3333H17.9057L24.7559 16.4226C25.0814 16.0972 25.0814 15.5695 24.7559 15.2441C24.4305 14.9186 23.9028 14.9186 23.5774 15.2441L16.6667 22.2159V15.8333C16.6667 15.3731 16.2936 15 15.8333 15C15.3731 15 15 15.3731 15 15.8333V24.1667C15 24.6269 15.3731 25 15.8333 25H24.1667Z'
            fill='black'
          />
        </svg>
      ) : (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='40'
            y='40'
            width='40'
            height='40'
            rx='20'
            transform='rotate(180 40 40)'
            fill='#F3F3F3'
          />
          <path
            d='M15.8333 15C15.3731 15 15 15.3731 15 15.8333C15 16.2936 15.3731 16.6667 15.8333 16.6667H22.0943L15.2441 23.5774C14.9186 23.9028 14.9186 24.4305 15.2441 24.7559C15.5695 25.0814 16.0972 25.0814 16.4226 24.7559L23.3333 17.7841V24.1667C23.3333 24.6269 23.7064 25 24.1667 25C24.6269 25 25 24.6269 25 24.1667V15.8333C25 15.3731 24.6269 15 24.1667 15H15.8333Z'
            fill='black'
          />          

        </svg>
      )}
      <div className={styles.nameWrap}>
        <p className={styles.name}>{name}</p>
        <p className={styles.date}>{date}</p>
      </div>
      <div className={styles.dataWrap}>
        <p className={type === 'income' ? styles.sumIncome : styles.sumExpense}>{sum}₽</p>
        <p className={styles.account}>{account}</p>
      </div>
    </div>
  );
};

export default Transaction;
