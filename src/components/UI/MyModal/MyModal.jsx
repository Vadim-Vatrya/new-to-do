import React from 'react';
import styles from './MyModal.module.scss';

const MyModal = () => {
  return (
    <div className={styles.myModal}>
      <div className={styles.myModalContent}></div>
    </div>
  );
};

export default MyModal;
