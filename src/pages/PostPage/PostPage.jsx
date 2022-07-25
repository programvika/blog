import React, { useEffect, useState } from 'react';
import styles from './PostPage.module.scss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { setPosts } from '../../redux/slice/postsSlice';

const PostPage = () => {
  const posts = useSelector((state) => state.posts.posts);
  const { id } = useParams();

  const [device, setDevice] = useState([]);

  useEffect(() => {
    const resp = async () => {
      await axios
        .get('https://62cd5a58a43bf7800856a291.mockapi.io/posts/' + id)
        .then((response) => setDevice(response.data));
    };
    resp()
  }, []);

  console.log(device);
  console.log(id);

  return (
    <div className={styles.postPage}>
      <img src="" alt="" />
      {device.title}
    </div>
  );
};

export default PostPage;