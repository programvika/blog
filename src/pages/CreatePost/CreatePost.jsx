import axios from 'axios';
import React, {useState } from 'react';
import styles from './CreatePost.module.scss';
import { useSelector } from 'react-redux';


const CreatePost = () => {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const [select, setSelect] = useState('Домашние животные');

  const categoryName = useSelector((state) => state.categoryName.categoryName);

     function chengeSelect(event) {
       setSelect(event.target.value);
     }

//   const date = new Date();
//   const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

const postGoods = async () => {
  return await axios
    .post(`https://62cd5a58a43bf7800856a291.mockapi.io/posts`, {
      title: title,
      img: img,
      post: post,
      category: select
    })

    .catch((err) => console.log(err))
    .finally(setTitle(''), setPost(''), setImg(''));
};

    const postClick = () => {
        postGoods()
    }

  return (
    <div className={styles.create}>
      <div className={styles.wrapper}>
        <div className={styles.title}>О чем вы хотите рассказать?</div>
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          <div className={styles.inpts}>
            <div className={styles.inputImg}>
              <textarea
                onChange={(e) => setImg(e.target.value)}
                value={img}
                placeholder="Поместите сюда ссылку на изображение"
              />
            </div>
            <div className={styles.post}>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Напишите сюда тему своего поста"
              />
              <select defaultValue={'default'} value={select} onChange={chengeSelect}>
                {categoryName.map((name, index) => (
                  <option key={index}>{name}</option>
                ))}
              </select>
              <textarea
                className={styles.postTextArea}
                onChange={(e) => setPost(e.target.value)}
                value={post}
                placeholder="Ваш пост..."
              />
              <button type="submit" onClick={() => postClick()}>
                Отправить пост
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
