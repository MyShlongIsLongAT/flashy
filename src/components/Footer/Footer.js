import React from 'react';
import styles from './footer.module.css'
import flashyLogo from '../../vectors/logo192.png';
import githubLogo from '../../vectors/github.png'

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerGrid}>
                <div className={styles.footerGridFirstItem}>
                    <img src={flashyLogo} alt="flashy-logo"/>
                </div>
                <div className={styles.footerGridItem}>Decks</div>
                <div className={styles.footerGridItem}><a href="https://github.com/MyShlongIsLongAT/flashy"
                                                          target="_blank" rel="noreferrer">Contribute</a></div>
                <div className={styles.footerGridItem}>About me</div>
            </div>
            <div className={styles.footerLastItem}>
                <a href="https://github.com/MyShlongIsLongAT/" target="_blank" rel="noreferrer">
                    <img src={githubLogo} alt=""/>
                </a>
            </div>
        </div>
    );
};

export default Footer;