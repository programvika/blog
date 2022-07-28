import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Skeleton.module.scss'

const Skeleton = (props) => (
  <ContentLoader
    className={styles.loader}
    speed={2}
    width={880}
    height={328}
    viewBox="0 0 1880 328"
    backgroundColor="#969696"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="113" y="37" rx="0" ry="0" width="392" height="200" />
    <rect x="427" y="367" rx="0" ry="0" width="0" height="35" />
  </ContentLoader>
);

export default Skeleton;
