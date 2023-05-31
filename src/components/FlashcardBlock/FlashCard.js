import React, {useEffect, useState} from 'react';
import styles from './flashcard.module.css';
import {
    BsCaretRightSquareFill,
    BsFillCaretLeftSquareFill
} from "react-icons/bs";

function FlashCard(props) {
    const [curPair, setCurPair] = useState([]);
    const [curTask, setCurTask] = useState("");
    const [curTaskId, setCurTaskId] = useState(0);

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
    }, [curTask]);

    const handleKeyDown = (event) => {
        if (event.code === "Space") {
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
        <div>
            <div className={styles.flashcardWrapper}>
                <BsFillCaretLeftSquareFill size={60} color={"#69D1C5"} className={styles.flashCardArrows}
                                       onClick={handlePrevPair}/>
                <div className={styles.flashCard} onClick={handleFlipCard}>
                    {curTask}
                </div>
                <BsCaretRightSquareFill size={60} color={"#69D1C5"} className={styles.flashCardArrows}
                                        onClick={handleNextPair}/>
            </div>
        </div>

    );
}

export default FlashCard;