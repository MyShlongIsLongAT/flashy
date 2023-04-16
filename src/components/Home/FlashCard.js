import React, {useEffect, useState} from 'react';
import styles from './style.module.css';
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
            console.log("flip")
            handleFlipCard()
        } else if (event.code === "ArrowRight") {
            console.log("next");
            handleNextPair();
        } else if (event.code === "ArrowLeft") {
            console.log("previous");
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
            console.log("changed to definition");
        } else {
            setCurTask(curPair.term);
            console.log("changed to term");
        }
    }

    return (
        <div className={styles.wrapper}>
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