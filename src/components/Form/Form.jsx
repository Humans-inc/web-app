import { useState } from 'react';
import styles from './Form.module.css';

import { useDispatch } from 'react-redux';
import { addAccount } from '../../store/AccountSlice';
import Snackbar from '../Snackbar/Snackbar';

const Form = ({ isVisible, setIsVisible, title, btn, text }) => {
  const [newAcc, setNewAcc] = useState({
    name: '',
    description: '',
  });

  const dispatch = useDispatch();
  const addNewAccount = () => dispatch(addAccount(newAcc));

  const [length, setLength] = useState(0);
  let [snack, setSnack] = useState(false);
  let [formVisibility, setFormVisibility] = useState(true);

  return (
    <div className={styles.overlay}>
      {formVisibility && (
        <form className={styles.form}>
          <button
            className={styles.btnClose}
            type='button'
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          >
            <svg
              width='22'
              height='22'
              viewBox='0 0 22 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 21L21 1'
                stroke='black'
              />
              <path
                d='M1 1L21 21'
                stroke='black'
              />
            </svg>
          </button>
          <p className={styles.title}>{title}</p>
          <input
            type='text'
            onChange={(e) => setNewAcc({ ...newAcc, name: e.target.value })}
            value={newAcc.name}
            className={styles.input}
            placeholder='Название счета'
          />
          <div className={styles.textAreaWrap}>
            <div className={styles.textAreaLength}>{length}/200</div>
            <textarea
              maxLength='200'
              onChange={(e) => {
                setLength(e.target.value.length);
                setNewAcc({ ...newAcc, description: e.target.value });
              }}
              value={newAcc.description}
              className={styles.textarea}
              placeholder='Описание'
            ></textarea>
          </div>
          <button
            disabled={length > 0 ? false : true}
            className={styles.btnSubmit}
            onClick={(e) => {
              e.preventDefault();
              addNewAccount(newAcc);
              console.log(newAcc);
              setFormVisibility(false);
              setSnack(true);
              setTimeout(() => {
                setSnack(false);
                setIsVisible(!isVisible);
                setFormVisibility(true);
              }, 1000);
            }}
          >
            {btn}
          </button>
        </form>
      )}
      {snack && <Snackbar text={text} />}
    </div>
  );
};

export default Form;
