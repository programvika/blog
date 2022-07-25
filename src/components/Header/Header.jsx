import React from 'react'
import styles from './Header.module.scss'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const nav = useNavigate()

  return (
    <div className={styles.header}>
      <div className={styles.posts}>
        <button onClick={() => nav('/')}>Все посты</button>
        <button onClick={() => nav('/create')}>Создать свой пост</button>
      </div>
      <div className={styles.auth}>
        <button>Войти</button>
      </div>
    </div>
  );
}

export default Header