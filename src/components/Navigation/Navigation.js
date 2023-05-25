import React from 'react';
import styles from './navigation.module.css'
import flashyIcon from '../../vectors/logo192.png'

const Navigation = () => {
    return (
        <div className={styles.navigationWrapper}>
            <div className={styles.navigationGridItems}>
                <div className={styles.navigationGridItem}>
                    <img src={flashyIcon} alt=""/>
                </div>
                <div className={styles.navigationGridItem}>Decks</div>
            </div>
        </div>
    );
};

export default Navigation;