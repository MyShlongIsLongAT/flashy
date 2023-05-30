import React from 'react';
import styles from './home.module.css'
import mainStyles from '../../styles/main.module.css'
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import linkStyles from '../../styles/main.module.css'
import {Link} from "react-router-dom";

function Homepage() {

    return (
        <div>
            <Navigation/>
            <div className={styles.contentWrapper}>
                <div>
                    <div className={mainStyles.title}>
                        FLASHY
                    </div>
                    <div className={mainStyles.subtitle}>An open-source flashcard solution</div>
                </div>
                <div className={styles.contentButton}>
                    <button><Link to="/decks" className={linkStyles.linkItem}>Get started</Link></button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Homepage;