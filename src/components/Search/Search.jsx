import React from 'react'
import styles from './Search.module.scss'
import {setSearch} from '../../redux/slice/searchSlice'
import { useDispatch, useSelector } from 'react-redux';


const Search = () => {
    const dispatch = useDispatch()

    const search = useSelector(state => state.search.search)

  return (
    <div className={styles.search}>
      <input
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Введите что вы хотите найти!:)"
      />
    </div>
  );
}

export default Search