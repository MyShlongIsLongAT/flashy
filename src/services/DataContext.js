import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import {Dna} from "react-loader-spinner";

export const DataContext = createContext([]);

export const DataProvider = ({children}) => {
    const [decks, setDecks] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    let instance = axios.create({
        baseURL: 'https://api.servker.cc/items/',
        headers: {'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY}
    });

    const sortDecks = (decks) => {
        decks.sort((a, b) => a.localeCompare(b))
        return decks;
    }

    const fetchData = async () => {
        instance.get('/flashy')
            .then(response => {
                let result = response.data.data;
                console.log(result)
                setData(result);
                setDecks(sortDecks(result.map(item => item.name)));
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
        <DataContext.Provider value={{data, decks}}>
            {decks.length ? children : <Dna/>}
        </DataContext.Provider>
    );
};