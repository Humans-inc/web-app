import styles from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <button className={styles.buttonAdd} onClick={() => alert('Something was added')}>
        <svg
          width='36'
          height='35'
          viewBox='0 0 36 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.9046 6.03201C18.6963 6.03201 19.3381 6.67383 19.3381 7.46555V27.5351C19.3381 28.3268 18.6963 28.9686 17.9046 28.9686C17.1129 28.9686 16.4711 28.3268 16.4711 27.5351V7.46555C16.4711 6.67383 17.1129 6.03201 17.9046 6.03201Z'
            fill='white'
          />
          <path
            d='M6.43631 17.5003C6.43631 16.7086 7.07813 16.0668 7.86985 16.0668H27.9394C28.7311 16.0668 29.3729 16.7086 29.3729 17.5003C29.3729 18.292 28.7311 18.9339 27.9394 18.9339H7.86985C7.07813 18.9339 6.43631 18.292 6.43631 17.5003Z'
            fill='white'
          />
        </svg>
      </button>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <NavLink
              to='/'
              className={styles.navLink}
            >
              Главная
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to='/analitics'
              className={styles.navLink}
            >
              Аналитика
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to='/table'
              className={styles.navLink}
            >
              Таблица
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to='/settings'
              className={styles.navLink}
            >
              Настройки
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
