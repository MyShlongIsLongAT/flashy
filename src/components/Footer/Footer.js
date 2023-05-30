import React from 'react';
import styles from './footer.module.css'
import flashyLogo from '../../vectors/logo192.png';
import {AiFillGithub} from "react-icons/ai";
import {Link} from "react-router-dom";
import linkStyles from "../../styles/main.module.css";

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerGrid}>
                <div className={styles.footerGridFirstItem}>
                    <Link to="/"><img src={flashyLogo} alt="flashy-logo"/></Link>
                </div>
                <div className={styles.footerGridItem}><Link to="/decks" className={linkStyles.linkItem}>Decks</Link></div>
                <div className={styles.footerGridItem}><a href="https://github.com/MyShlongIsLongAT/flashy"
                                                          target="_blank" rel="noreferrer" className={linkStyles.linkItem}>Contribute</a></div>
                <div className={styles.footerGridItem}><Link to="/aboutme" className={linkStyles.linkItem}>About me</Link></div>
            </div>
            <div className={styles.footerLastItem}>
                <a href="https://github.com/MyShlongIsLongAT/" target="_blank" rel="noreferrer" className={linkStyles.linkItem}>
                    <AiFillGithub size={60}/>
                </a>
            </div>
        </div>
    );
};

export default Footer;