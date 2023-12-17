import React from 'react';
import Navigation from "../../components/Navigation/Navigation";
import styles from "./aboutpage.module.css";
import mainStyles from "../../styles/main.module.css";
import Footer from "../../components/Footer/Footer";
import aboutShlongImage from './1200px-Johannes_Gutenberg.jpg'

const AboutPage = () => {
    const aboutStory = "just having fun doing web development.\n\npaywalls suck :("

    return (
        <div>
            <Navigation/>
            <div className={styles.contentWrapper}>
                <div className={styles.contentGrid}>
                    <div className={styles.leftColumn}>
                        <div className={styles.headingWrapper}>
                            <div className={styles.title}>
                                MyShlongIsLongAT
                            </div>
                            <div className={styles.subtitle}>aka Florian</div>
                        </div>
                        <div className={styles.aboutContent}>
                            {aboutStory.split('\n').map((line, index) => (<React.Fragment key={index}>
                                {line}
                                <br/>
                            </React.Fragment>))}
                        </div>
                    </div>
                    <div className={styles.rightColumn}>
                        <img className={styles.aboutShlongImage} src={aboutShlongImage} alt=""/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutPage;
