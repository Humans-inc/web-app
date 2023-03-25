import Account from '../Account/Account';
import styles from './Accounts.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Form from '../Form/Form';

const Accounts = () => {
  const accountsList = useSelector((state) => state.accounts.accounts);

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
        Добавить
      </button>
      {/* accounts list */}
      {accountsList.length ? (
        <Swiper
          spaceBetween={8}
          slidesPerView={1.5}
          centeredSlides={false}
          className={styles.accountsList}
        >
          {accountsList.map((account) => (
            <SwiperSlide key={account.id}>
              <Account
                name={account.name}
                money={account.money}
                description={account.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles.noAccounts}>Нет счетов</div>
      )}

      {/* form */}
      {isVisible && (
        <Form
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          title='Добавить счет'
          btn='Добавить'
          text='Счет успешно добавлен'
        />
      )}
    </div>
  );
};

export default Accounts;
