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
            console.log("error")
        }
    }, [props, curTaskId, curPair]);

    return (
        <div className={styles.wrapper}>
            <BsArrowLeftSquareFill size={70} color={"#96ADC8"} className={styles.flashCardArrows} onClick={() => {
                setCurTaskId(prevTaskId => prevTaskId - 1);
                if (curTaskId === 0) {
                    setCurTaskId(0);
                }
            }
            }/>
            <div className={styles.flashCard} onClick={() => {
                if (curTask === curPair.term) {
                    setCurTask(curPair.definition);
                } else {
                    setCurTask(curPair.term);
                }
            }}>
                {curTask}
            </div>
            <BsArrowRightSquareFill size={70} color={"#96ADC8"} className={styles.flashCardArrows} onClick={() => {
                setCurTaskId(prevTaskId => prevTaskId + 1);
                if (curTaskId >= props.words.length - 1) {
                    setCurTaskId(0);
                }
            }
            }/>
        </div>
    );
}

export default FlashCard;