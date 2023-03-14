import React from 'react';
import WordBlock from "./WordBlock";

function WordList(props) {
    return (
        <div>
            <h1>Words to learn</h1>
            {
                props.words.map((word) => <WordBlock term={word.term} definition={word.definition}/>)
            }
        </div>
    );
}

export default WordList;