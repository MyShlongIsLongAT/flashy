import React, {createContext, useContext, useEffect, useState} from 'react';
import {DataContext} from "./DataContext";

export const DeckContext = createContext([]);

export const DeckProvider = ({children}) => {
    const [deck, setDeck] = useState([]);
    const [selectedDeck, setSelectedDeck] = useState("english");
    const [loading, setLoading] = useState(true);

    const {data} = useContext(DataContext);

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
        setDeck(chosenWords);
    }

    const updateSelectedDeck = (value) => {
        setSelectedDeck(value);
    };

    useEffect(()=>{
        if (deck && !deck.length) {
            setLoading(true);
        }
        sortWords(data,selectedDeck);
    }, [selectedDeck])


    return (
        <DeckContext.Provider value={{deck, updateSelectedDeck}}>
            {children}
        </DeckContext.Provider>
    );
};