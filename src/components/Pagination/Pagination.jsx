import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pagination.module.scss';

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  return (
    <div>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.page_item}>
            <Link to="/" onClick={() => paginate(number)} className={styles.page_link}>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
