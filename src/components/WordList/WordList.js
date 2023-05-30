import React from 'react';
import WordBlock from "./WordBlock";
import styles from './wordlist.module.css'

function WordList(props) {
    return (
        <div className={styles.wordListWrapper}>
            <div>
                {
                    props.words.map((word) => <WordBlock term={word.term} definition={word.definition}/>)
                }
            </div>

        </div>
    );
}
export default WordList;