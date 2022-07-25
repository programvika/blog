import React, { useEffect } from 'react';
import styles from './Blogs.module.scss';
import { setPosts } from '../../redux/slice/postsSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const posts = useSelector(state => state.posts.posts);
  const categoryName = useSelector(state => state.categoryName.categoryName)
  const category = useSelector(state => state.category.category)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://62cd5a58a43bf7800856a291.mockapi.io/posts?category=${category}`)
      .then((response) => {
        dispatch(setPosts(response.data));
      });
  }, [category]);

  console.log(posts)

  return (
    <>
      {posts.map((post) => (
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
                className={styles.reed}>...читать дальше</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blogs;
