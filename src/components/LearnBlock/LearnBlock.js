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
        }
    }, [props, curTaskId, curPair]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [curTask, guess]);

    const handleUserInput = (event) => {
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
        if (guess === curPair.term) {
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
                <div>
                    <p>definition</p>
                    <div className={styles.definition}>{curTask}</div>
                </div>
                <div className={styles.input}>
                    <div><input type="text" placeholder={hint} onChange={handleUserInput} value={guess}/></div>
                    <div className={styles.interactionButtons}>
                        <div>
                            <button onClick={handleHint}>idk</button>
                        </div>
                        <div>
                            <button onClick={handleCheckInput}>Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};