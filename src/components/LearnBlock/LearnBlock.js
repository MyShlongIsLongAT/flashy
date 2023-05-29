import * as React from 'react';
import {useEffect, useState} from 'react';
import styles from "./learning.module.css";

export const LearnBlock = (props) => {
    const initialHint = "input the wanted term";
    const [curPair, setCurPair] = useState([]);
    const [curTask, setCurTask] = useState("");
    const [curTaskId, setCurTaskId] = useState(0);
    const [guess, setGuess] = useState("");
    const [hint, setHint] = useState(initialHint);

    useEffect(() => {
        try {
            setCurPair(props.words[curTaskId])
            setCurTask(curPair.definition)
        } catch (e) {
            console.log("waiting for data")
        }
    }, [props, curTaskId, curPair]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [curTask, guess]);

    const handleUserInput = (event) =>{
        setGuess(event.target.value);
    }

    const handleHint = () => {
        setGuess("");
        setHint(curPair.term);
    }

    const handleKeyDown = (event) => {
        if (event.code === "Enter") {
            handleCheckInput();
        }
    }
    const handleNextPair = () => {
        setCurTaskId(prevTaskId => prevTaskId + 1);
        if (curTaskId >= props.words.length - 1) {
            setCurTaskId(0);
        }
    };

    const handleCheckInput = () => {
        if (guess === curPair.term){
            setGuess("");
            setHint(initialHint);
            handleNextPair()
        } else {
            alert("wrong")
            setGuess("");
        }
    }

    return (
        <div>
            <div className={styles.learnBlock}>
                <div className={styles.definition}>
                    <p>definition</p>
                    {curTask}
                </div>
                <div className={styles.input}>
                    <input type="text" placeholder={hint} onChange={handleUserInput} value={guess}/>
                    <button onClick={handleHint}>idk</button>
                    <button onClick={handleCheckInput}>Submit</button>
                </div>
            </div>
        </div>
    );
};