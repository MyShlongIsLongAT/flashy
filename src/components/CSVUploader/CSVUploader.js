import React, {useState} from "react";
import axios from "axios";

const FileUploader = () => {
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
        <div>
            <h1>Upload your own deck</h1>
            <input type="text" onChange={handleDeckNameChange}/>
            <input type="file" accept=".csv" onChange={handleFileUpload}/>
            <button onClick={handlePost}>Upload</button>
        </div>
    );
};

const csvFileToJson = (file) => {
    let lines = file.split("\n");
    let result = [];
    let headers = lines[0].split(",");

    for (let i = 1; i < lines.length - 2; i++) {
        let obj = {};
        let currentLine = lines[i].split(",");
        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentLine[j];
        }
        result.push(obj);
    }
    // console.log(JSON.stringify(result));
    // return result;
    const cleanedResult = result.map((obj) => {
        const cleanedDef = obj["definition\r"].replace(/\r/g, "");
        delete obj["definition\r"];
        obj["definition"] = cleanedDef;
        return obj;
    });
    console.log(JSON.stringify(cleanedResult));
    return cleanedResult; //JSON
}

const postToApi = (deckInJSON, nameOfDeck) => {
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
export default FileUploader;