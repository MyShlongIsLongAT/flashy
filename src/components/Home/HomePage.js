import React, {useContext} from 'react';
import WordList from "../WordList/WordList";
import FlashCard from "../Flashcard/FlashCard";
import CSVUploader from "../CSVUploader/CSVUploader";
import {LearnBlock} from "../Learn/LearnBlock";
import {DeckContext} from "../../services/DeckContext";
import DropDown from "../DeckSelector/DropDown";

function HomePage() {
    const {deck} = useContext(DeckContext);

    return (
        <div>
            <div>
                <h1>Flashy</h1>
                <DropDown/>
                <LearnBlock words={deck}/>
                <FlashCard words={deck}/>
                <WordList words={deck}/>
                <CSVUploader/>
            </div>
        </div>
    );
}

export default HomePage;