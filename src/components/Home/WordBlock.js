import React from 'react';
import styles from './style.module.css';

function WordBlock(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wordBox}>
                <div>{props.term}</div>
                <div>{props.definition}</div>
            </div>
        </div>
    );
}

export default WordBlock;