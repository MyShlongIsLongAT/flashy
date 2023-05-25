import React, {useContext, useState} from 'react';
import {DataContext} from "../../services/DataContext";
import {DeckContext} from "../../services/DeckContext";

function DropdownMenu() {
    const {decks} = useContext(DataContext);

    const {updateSelectedDeck} = useContext(DeckContext);
    const [selectedDeck, setDeck] = useState(decks[0]);

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setDeck(value);
        updateSelectedDeck(value);
    }

    return (
        <div>
            <h2>Select your deck</h2>
            <select value={selectedDeck} onChange={handleOptionChange}>
                {decks.map((deck) => (
                    <option key={deck} value={deck}>
                        {deck}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default DropdownMenu;
