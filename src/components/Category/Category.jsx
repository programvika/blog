import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setCategory} from '../../redux/slice/categorySlice'
import styles from './Category.module.scss';

const Category = () => {
  const categoryName = useSelector(state => state.categoryName.categoryName)
  const category = useSelector(state => state.category.category)

  const clickCategory = (name) => {
    dispacth(setCategory(name));
  }

  const dispacth = useDispatch()

  console.log(category);

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
