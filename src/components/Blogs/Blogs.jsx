import React, { useEffect, useState } from 'react';
import styles from './Blogs.module.scss';
import { setPosts } from '../../redux/slice/postsSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

const Blogs = () => {
  // const [allPosts, setAllPosts] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(2);

  const posts = useSelector((state) => state.posts.posts);
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lastPostIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastPostIndex - countriesPerPage;
  const currentCountry = posts.slice(firstCountryIndex, lastPostIndex);

  const checkCategory = category !== 'Все' ? `category=${category}` : '';

  useEffect(() => {
    setLoading(true)
    axios
      .get(`https://62cd5a58a43bf7800856a291.mockapi.io/posts?&${checkCategory}`)
      .then((response) => {
        dispatch(setPosts(response.data));
        setLoading(false);
      });
  }, [category]);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className={styles.wrapperBlog}>
      {loading ? (
        <div>Идет загрузка..</div>
      ) : (
        <div>
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
      <Pagination paginate={paginate} countriesPerPage={countriesPerPage} totalCountries={posts.length} />
    </div>
  );
};

export default Blogs;
