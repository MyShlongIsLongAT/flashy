import React from 'react';
import styles from './navigation.module.css'
import linkStyles from '../../styles/main.module.css'
import flashyIcon from '../../vectors/logo192.png'
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={styles.navigationWrapper}>
            <div className={styles.navigationGridItems}>
                <div className={styles.navigationGridItem}>
                    <Link to="/" className={linkStyles.linkItem}><img src={flashyIcon} alt=""/></Link>
                </div>
                <div className={styles.navigationGridItem}>
                    <Link to="/decks" className={linkStyles.linkItem}>Decks</Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;