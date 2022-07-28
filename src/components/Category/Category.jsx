import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setCategory} from '../../redux/slice/categorySlice'
import styles from './Category.module.scss';
import { setCurrentPage } from '../../redux/slice/paginateSlice';

const Category = () => {
  const categoryName = useSelector(state => state.categoryName.categoryName)
  const category = useSelector(state => state.category.category)

  const clickCategory = (name) => {
    dispatch(setCategory(name));
    dispatch(setCurrentPage(1));
  }

  const dispatch = useDispatch()

  return (
    <div className={styles.category}>
      <div className={styles.wrapper}>
        <div className={styles.ul}>
          <ul>
            {categoryName.map((name, index) => (
              <li
                onClick={() => clickCategory(name)}
                className={category === name ? `${styles.active}` : ''}
                key={index}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
