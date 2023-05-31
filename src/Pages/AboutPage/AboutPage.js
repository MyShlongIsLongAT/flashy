import React from 'react';
import Navigation from "../../components/Navigation/Navigation";
import styles from "./aboutpage.module.css";
import mainStyles from "../../styles/main.module.css";
import Footer from "../../components/Footer/Footer";
import aboutShlongImage from './1200px-Johannes_Gutenberg.jpg'

const AboutPage = () => {
    const aboutStory = "Hello, I'm Florian!\n" + "Since 2019, I've been actively engaged in web development, " +
        "driven by my strong interest in economics and computer science during my high school years.\n" + "\n" + "The " +
        "birth of Flashy stemmed from two motivations. Firstly, I wanted to expand my expertise in client-side " +
        "programming, delving deeper into its intricacies. Secondly, I aimed to develop my very own flashcard solution " +
        "as an alternative to Quizlet, which unfortunately became inaccessible due to a paywall."

    return (
        <div>
            <Navigation/>
            <div className={styles.contentWrapper}>
                <div className={styles.contentGrid}>
                    <div className={styles.leftColumn}>
                        <div className={styles.headingWrapper}>
                            <div className={mainStyles.title}>
                                MyShlongIsLongAT
                            </div>
                            <div className={mainStyles.subtitle}>aka Florian</div>
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