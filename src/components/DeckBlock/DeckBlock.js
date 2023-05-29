import React from 'react';
import styles from './deckblock.module.css';

const DeckBlock = (props) => {
    return (
        <div>
            <div className={styles.deckWrapper}>
                {props.deckName}
            </div>
        </div>
    );
};

export default DeckBlock;