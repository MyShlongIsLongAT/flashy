import React from 'react';
import styles from './home.module.css'
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

function HomePage() {

    return (
        <div>
            <Navigation/>
            <div className={styles.contentWrapper}>
                <div>
                    <div className={styles.title}>
                        FLASHY
                    </div>
                    <div className={styles.subtitle}>An open-source flashcard solution</div>
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