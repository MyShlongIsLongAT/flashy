import React, {useEffect, useState} from 'react';
import axios from "axios";
import WordList from "./WordList";
import FlashCard from "./FlashCard";
import {Dna} from "react-loader-spinner";

function HomePage(props) {
    const [words, setWords] = useState([]);
    const [loadingInProgress, setLoading] = useState(true);


    const instance = axios.create({
        baseURL: 'https://api.servker.cc/api/',
        headers: {'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY}
    });

    useEffect(() => {
        instance.get('/flashcards?populate=*')
            .then(response => {
                let result = response.data.data;
                setWords(sortWords(result));
            })
        setLoading(false);
    }, []);

    return (

        <div>
            {loadingInProgress ? (
                <div>
                    <Dna
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                </div>

            ) : (
                <div>
                    <h1>Flash Card</h1>
                    <FlashCard words={words}/>
                    <WordList words={words}/>
                </div>

            )}
        </div>
    )
        ;
}

let sortWords = (data) => {
    let chosenDeck = data.filter(deck => deck.attributes.name === "test");
    let chosenWords = chosenDeck[0].attributes.record;
    chosenWords = chosenWords.sort((a, b) => {
        if (a.term < b.term) {
            return -1;
        }
        if (a.term > b.term) {
            return 1;
        }
        return 0;
    });
    return (chosenWords); //using cause setting the words wouldn't overwrite the whole thing... just adds an element
}

export default HomePage;