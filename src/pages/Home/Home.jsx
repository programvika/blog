import React from 'react';
import Blogs from '../../components/Blogs/Blogs';
import Category from '../../components/Category/Category';
import Pagination from '../../components/Pagination/Pagination';
import styles from './Home.module.scss';

const Home = () => {

  return (
    <div className={styles.home}>
      <div className={styles.navigate}>
        <Category />
      </div>
      <div>
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
