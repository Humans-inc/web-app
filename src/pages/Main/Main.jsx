import styles from './Main.module.css';

const Main = () => {
  return (
    <div class={styles.main}>
      <span>Ваш баланс</span>
      <h1>₽1 220,450.00</h1>
      <div>
        <div className={styles.income}>
          220,000₽
          <span>Доход</span>
        </div>
        <div className={styles.expense}>
          220,000₽
          <span>Расход</span>
        </div>
      </div>
      <div className=''>
        <h2>Мои счета</h2>
        <button>Добавить</button>
        <div className=''>
          <div className=''>
            <h4>Тинькофф</h4>
            <button>...</button>
            <p>40 000 ₽</p>
            <p>Деньги от продажи обучения</p>
          </div>
          <div className=''>
            <h4>Тинькофф</h4>
            <button>...</button>
            <p>40 000 ₽</p>
            <p>Деньги от продажи обучения</p>
          </div>
        </div>
      </div>
      <div className=''>
        <h2>Транзакции</h2>
        <button>См. все</button>
        <div className=''>
          <div className=''>
            <div className=''>
              <p>Доход от воркшопа</p>
              <p>15 фев, 14:44</p>
            </div>
            <div className=''>
              <p>+30 000₽</p>
              <p>Точка</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
