import React, {useContext, useState} from 'react';
import WordList from "./WordList";
import FlashCard from "./FlashCard";
import CSVUploader from "../CSVUploader/CSVUploader";
import DropDown from "./DropDown";
import {deckContext} from "../../services/DeckContext";
import {LearnBlock} from "../Learning/LearnBlock";

function HomePage() {
    const {data, decks} = useContext(deckContext);
    const [selectedDeck, setDeck] = useState(decks[0]);

    const handleDeckChange = (value) => {
        setDeck(value);
    }

    return (
        <div>
            <div>
                <h1>Flashy</h1>
                <DropDown onChange={handleDeckChange} decks={decks}/>
                <LearnBlock words={sortWords(data, selectedDeck)}/>
                <FlashCard words={sortWords(data, selectedDeck)}/>
                <WordList words={sortWords(data, selectedDeck)}/>
                <CSVUploader/>
            </div>
        </div>
    )
        ;
}

const sortWords = (data, selectedDeck) => {
    let chosenDeck = data.filter(deck => deck.attributes.name === selectedDeck);
    let chosenWords = chosenDeck[0].attributes.record;
    chosenWords = chosenWords.sort((a, b) => {
        if (a.term.toLowerCase() < b.term.toLowerCase()) {
            return -1;
        }
        if (a.term.toLowerCase() > b.term.toLowerCase()) {
            return 1;
        }
        return 0;
    });
    return (chosenWords); //using cause setting the words wouldn't overwrite the whole thing... just adds an element
}

export default HomePage;