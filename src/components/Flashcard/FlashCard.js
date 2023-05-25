import React, {useEffect, useState} from 'react';
import styles from '../Home/home.module.css';
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from "react-icons/bs";

function FlashCard(props) {
    const [curPair, setCurPair] = useState([]);
    const [curTask, setCurTask] = useState("");
    const [curTaskId, setCurTaskId] = useState(0);

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
    }, [curTask]);

    const handleKeyDown = (event) => {
        if (event.code === "Enter") {
            handleFlipCard();
        } else if (event.code === "ArrowRight") {
            handleNextPair();
        } else if (event.code === "ArrowLeft") {
            handlePrevPair();
        }
    }
    const handleNextPair = () => {
        setCurTaskId(prevTaskId => prevTaskId + 1);
        if (curTaskId >= props.words.length - 1) {
            setCurTaskId(0);
        }
    };
    const handlePrevPair = () => {
        setCurTaskId(prevTaskId => prevTaskId - 1);
        if (curTaskId === 0) {
            setCurTaskId(0);
        }
    }
    const handleFlipCard = () => {
        if (curTask === curPair.term) {
            setCurTask(curPair.definition);
        } else {
            setCurTask(curPair.term);
        }
    }

    return (
        <div className={styles.flashcardWrapper}>
            <BsArrowLeftSquareFill size={70} color={"#96ADC8"} className={styles.flashCardArrows}
                                   onClick={handlePrevPair}/>
            <div className={styles.flashCard} onClick={handleFlipCard}>
                {curTask}
            </div>
            <BsArrowRightSquareFill size={70} color={"#96ADC8"} className={styles.flashCardArrows}
                                    onClick={handleNextPair}/>
        </div>
    );
}

export default FlashCard;