import React, {useContext, useState} from 'react';
import {deckContext} from "../../services/DeckContext";

function DropdownMenu(props) {
    const {decks} = useContext(deckContext);
    const [selectedDeck, setDeck] = useState(decks[0]);

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setDeck(value);
        props.onChange(value);
    }

    return (
        <div>
            <h2>Select your deck</h2>
            <select value={selectedDeck} onChange={handleOptionChange}>
                {props.decks.map((deck) => (
                    <option key={deck} value={deck}>
                        {deck}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropdownMenu;
