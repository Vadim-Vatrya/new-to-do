import React from 'react';
import styles from './MyInput.module.scss';

const MyInput = props => {
  return <input className={styles.myInput} {...props} />;
};

export default MyInput;
