import React from 'react';
import styles from '../styles/SkeletonLoader.module.css';

const SkeletonLoader = () => {
    return (
        <div className={styles.hemisphereContainer}>
            <div className={styles.hemisphereSkeleton}></div>
        </div>
    );
};

export default SkeletonLoader;
