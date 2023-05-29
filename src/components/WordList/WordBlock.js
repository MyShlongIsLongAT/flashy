import React from 'react';
import styles from '../../Pages/Home/home.module.css';

function WordBlock(props) {
    return (
        <div className={styles.flashcardWrapper}>
            <div className={styles.wordBox}>
                <div>{props.term}</div>
                <div>{props.definition}</div>
            </div>
        </div>
    );
}

export default WordBlock;