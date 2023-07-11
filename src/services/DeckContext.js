import React, {createContext, useContext, useEffect, useState} from 'react';
import {DataContext} from "./DataContext";

export const DeckContext = createContext([]);

export const DeckProvider = ({children}) => {
    const [deck, setDeck] = useState([]);
    const [selectedDeck, setSelectedDeck] = useState("english");
    const [loading, setLoading] = useState(true);

    const {data} = useContext(DataContext);

    const selectDeck = (data, selectedDeck) => {
        let chosenDeck = data.filter(deck => deck.name === selectedDeck);
        let chosenWords = chosenDeck[0].records;
        sortWords(chosenWords);
    }
    const sortWords = (words) => {
        let sortedDeck = words.sort((a, b) => {
            if (a.term.toLowerCase() < b.term.toLowerCase()) {
                return -1;
            }
            if (a.term.toLowerCase() > b.term.toLowerCase()) {
                return 1;
            }
            return 0;
        });
        setDeck((sortedDeck))
    }

    const updateSelectedDeck = (value) => {
        setSelectedDeck(value);
    };

    useEffect(()=>{
        if (deck && !deck.length) {
            setLoading(true);
        }
        selectDeck(data, selectedDeck);
    }, [selectedDeck])


    return (
        <DeckContext.Provider value={{deck, updateSelectedDeck}}>
            {children}
        </DeckContext.Provider>
    );
};