import React from 'react';
import styles from './home.module.css'
import mainStyles from '../../styles/main.module.css'
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

function HomePage() {

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
                    <button>Get started</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;