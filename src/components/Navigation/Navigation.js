import React from 'react';
import styles from './navigation.module.css'
import linkStyles from '../../styles/main.module.css'
import {Link} from "react-router-dom";
import {GiFlashGrenade} from "react-icons/gi";

const Navigation = () => {
    return (
        <div className={styles.navigationWrapper}>
            <div className={styles.navigationGridItems}>
                <div className={styles.navigationGridItem}>
                    <Link to="/" className={linkStyles.linkItem}><GiFlashGrenade size={60} color={"#FFFFFF"} className={linkStyles.linkItem}/></Link>
                </div>
                <div className={styles.navigationGridItem}>
                    <Link to="/decks" className={linkStyles.linkItem}>Decks</Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;