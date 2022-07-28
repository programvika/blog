import React, { useCallback, useEffect, useState } from 'react';
import styles from './Blogs.module.scss';
import { setPosts } from '../../redux/slice/postsSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { Triangle } from 'react-loader-spinner';
import { setCurrentPage } from '../../redux/slice/paginateSlice';


const Blogs = () => {
  const [loading, setLoading] = useState(false);

  const currentPage = useSelector(state => state.paginate.currentPage)
  const countriesPerPage = useSelector(state => state.paginate.countriesPerPage)
  const posts = useSelector((state) => state.posts.posts);
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  // const pageNumbers = useSelector((state) => state.paginate.pageNumbers)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lastPostIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastPostIndex - countriesPerPage;
  const currentCountry = posts.slice(firstCountryIndex, lastPostIndex);

  const checkCategory = category !== 'Все' ? `category=${category}` : '';

  const stableDispatch = useCallback(dispatch, []);

  // console.log(pageNumbers);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://62cd5a58a43bf7800856a291.mockapi.io/posts?&${checkCategory}`)
      .then((response) => {
        stableDispatch(setPosts(response.data));
        setLoading(false);
      });
  }, [checkCategory]);

  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  console.log(currentPage)
  console.log(lastPostIndex);
  console.log(currentCountry);

  return (
    <div className={styles.wrapperBlog}>
      {loading ? (
        <div className={styles.loader}>
          <Triangle color="#78B1A4" height={180} width={180} />
        </div>
      ) : (
        <div className={styles.content}>
          {currentCountry
            .filter((obj) => {
              if (
                obj.title.toLowerCase().includes(search.toLowerCase()) ||
                obj.post.toLowerCase().includes(search.toLowerCase())
              ) {
                return true;
              }
              return false;
            })
            .map((post) => (
              <div key={post.id} className={styles.blogs}>
                <div className={styles.blog}>
                  <div className={styles.imgInside}>
                    <img src={post.img} alt="" />
                  </div>
                  <div className={styles.desc}>
                    <div className={styles.title}>{post.title}</div>
                    <p>{post.post}</p>
                    <button
                      onClick={() => navigate('/post' + '/' + post.id)}
                      className={styles.reed}>
                      ...читать дальше
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
      <div className={styles.paginate}>
        {!loading && (
          <Pagination
            paginate={paginate}
            countriesPerPage={countriesPerPage}
            totalCountries={posts.length}
          />
        )}
      </div>
    </div>
  );
};

export default Blogs;
