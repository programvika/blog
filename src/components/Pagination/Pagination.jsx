import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import styles from './Pagination.module.scss';
import {setPageNumbers} from '../../redux/slice/paginateSlice'

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];
  const dispatch = useDispatch()

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  dispatch(setPageNumbers(pageNumbers))



  return (
    <div>
      {pageNumbers.length > 1 && (
        <ul className={styles.pagination}>
          {pageNumbers.map((number) => (
            <li key={number} className={styles.page_item}>
              <div onClick={() => paginate(number)} className={styles.page_link}>
                {number}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Pagination;
