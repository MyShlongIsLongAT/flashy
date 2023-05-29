import React, {useState} from "react";
import axios from "axios";
import styles from './deckuploader.module.css';
import {AiOutlinePlus} from "react-icons/ai";

const DeckUploader = (props) => {
    const [jsonData, setJsonData] = useState(null);
    const [nameOfDeck, setNameOfDeck] = useState("");

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const csv = e.target.result;
            setJsonData(csvFileToJson(csv));
        };
        reader.readAsText(file);
    };

    const handleDeckNameChange = event => {
        setNameOfDeck(event.target.value);
    };

    const handlePost = () => {
        postToApi(jsonData, nameOfDeck);
    };

    return (
        <div className={styles.popupWrapper}>
            <div>
                <div>deck name:</div>
                <div><input type="text" placeholder="name of the deck" className={styles.nameInput}
                            onChange={handleDeckNameChange}/></div>
                <div>deck file (*.csv):</div>
                <div className={styles.fileSelector}>
                    <label>
                        <input type="file" onChange={handleFileUpload} accept=".csv"/>
                        <AiOutlinePlus/>
                    </label>
                </div>
                <div className={styles.uploadButtonWrapper}>
                    <div className={styles.uploadButton} onClick={ () => { handlePost(); props.handleClose();} }>Upload</div>
                </div>
            </div>
        </div>
    );
};

const csvFileToJson = (file) => {
    const lines = file.split('\n');
    const headers = lines[0].split(',');
    const convertedJSON = [];

    for (let i = 1; i < lines.length; i++) {
        const obj = {};
        const currentLine = lines[i].split(',');
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j];
        }
        convertedJSON.push(obj);
    }
    console.log(convertedJSON);
    let cleanedResult = JSON.stringify(convertedJSON).replace(/\\r/g, '');
    cleanedResult = JSON.parse(cleanedResult)
    console.log(cleanedResult);
    return cleanedResult;
}

const postToApi = (deckInJSON, nameOfDeck) => {
    console.log(deckInJSON)
    const instance = axios.create({
        baseURL: 'https://api.servker.cc/api',
        headers: {'Authorization': 'Bearer ' + process.env.REACT_APP_API_KEY}
    });
    instance.post('/flashcards', {
        "data": {
            "name": nameOfDeck,
            "record": deckInJSON
        }
    })
        .then(function (response) {
            console.log(response);
        });
}
export default DeckUploader;