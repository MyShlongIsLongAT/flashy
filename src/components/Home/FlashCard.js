import React, {useEffect, useState} from 'react';
import styles from './style.module.css';

function FlashCard(props) {
    const [words] = useState(props.words);
    const [curWord, setCurWord] = useState([]);

    useEffect(() => {
        setCurWord(words[0]);
    }, []);

    console.log(curWord);

    return (
        <div className={styles.wrapper} onClick={flipCard}>
            <div className={styles.flashCard}>
                <div>{curWord.term}</div>
            </div>
        </div>
    );
}

let flipCard = () => {
    console.log("lol")
};

export default FlashCard;