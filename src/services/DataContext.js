import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';
import {Dna} from "react-loader-spinner";

export const DataContext = createContext([]);

export const DataProvider = ({children}) => {
    const [decks, setDecks] = useState([]);
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);

    let instance = axios.create({
        baseURL: 'https://api.servker.cc/api/',
        headers: {'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY}
    });

    const fetchData = async () => {
        instance.get('/flashcards?populate=*')
            .then(response => {
                let result = response.data.data;
                setData(result);
                setDecks(result.map(item => item.attributes.name));
                setLoading(false);
            })
    }

    useEffect(() => {
        if (decks && !decks.length) {
            setLoading(true);
        }
        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{data,decks}}>
            {decks.length ? children : <Dna/>}
        </DataContext.Provider>
    );
};