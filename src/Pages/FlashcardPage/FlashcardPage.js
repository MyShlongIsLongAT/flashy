import React, {useContext} from 'react';
import FlashCard from "../../components/FlashcardBlock/FlashCard";
import {DeckContext} from "../../services/DeckContext";
import {IoArrowBackCircleSharp} from "react-icons/io5";
import {Link} from "react-router-dom";
import styles from './flashcardpage.module.css'

const FlashcardPage = () => {
    const {deck} = useContext(DeckContext);
    return (
        <div className={styles.contentWrapper}>
            <Link to="/overview"><IoArrowBackCircleSharp color={"#69D1C5"} size={60} className={styles.navigationButton}/></Link>
            <div className={styles.flashcardComponentWrapper}>
                <FlashCard words={deck}/>
            </div>
        </div>
    );
};

export default FlashcardPage;