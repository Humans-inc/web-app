import styles from './Balance.module.css';
import { useSelector } from 'react-redux';

const Balance = () => {

  const balance = useSelector((state) => state.balance);

  return (
    <div className={styles.balance}>
      <span className={styles.subtitle}>Ваш баланс</span>
      <h1 className={styles.count}>
        ₽ {balance.balance}
        {/* <span>.{balance.balanceFraction}</span> */}
      </h1>
      <div className={styles.wrap}>
        <div className={styles.income}>
          <svg
            width='38'
            height='38'
            viewBox='0 0 38 38'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              y='0.105957'
              width='37.788'
              height='37.788'
              rx='18.894'
              fill='#0AD26C'
            />
            <path
              d='M14.9578 14.2765C14.523 14.2765 14.1705 14.629 14.1705 15.0637C14.1705 15.4985 14.523 15.851 14.9578 15.851H20.8725L14.4011 22.3796C14.0936 22.687 14.0936 23.1855 14.4011 23.4929C14.7085 23.8004 15.207 23.8004 15.5144 23.4929L22.043 16.9067V22.9362C22.043 23.371 22.3955 23.7235 22.8303 23.7235C23.265 23.7235 23.6175 23.371 23.6175 22.9362V15.0637C23.6175 14.629 23.265 14.2765 22.8303 14.2765H14.9578Z'
              fill='white'
            />
          </svg>
          <span className={styles.sum}>{balance.income}₽</span>
          <span className={styles.descr}>Доход</span>
        </div>
        <div className={styles.expense}>
          <svg
            width='38'
            height='38'
            viewBox='0 0 38 38'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='38'
              y='37.894'
              width='37.788'
              height='37.788'
              rx='18.894'
              transform='rotate(180 38 37.894)'
              fill='black'
            />
            <path
              d='M23.0423 23.7235C23.4771 23.7235 23.8295 23.371 23.8295 22.9363C23.8295 22.5015 23.4771 22.149 23.0423 22.149H17.1276L23.5989 15.6204C23.9064 15.313 23.9064 14.8145 23.5989 14.5071C23.2915 14.1997 22.793 14.1997 22.4856 14.5071L15.957 21.0934V15.0638C15.957 14.629 15.6046 14.2765 15.1698 14.2765C14.735 14.2765 14.3825 14.629 14.3825 15.0638V22.9363C14.3825 23.371 14.735 23.7235 15.1698 23.7235H23.0423Z'
              fill='white'
            />
          </svg>
          <span className={styles.sum}>{balance.expense}₽</span>
          <span className={styles.descr}>Расход</span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
