import React, {useContext} from 'react';
import {IoArrowBackCircleSharp} from "react-icons/io5";
import styles from "./learnpage.module.css";
import {Link} from "react-router-dom";
import {DeckContext} from "../../services/DeckContext";
import {LearnBlock} from "../../components/LearnBlock/LearnBlock";

const LearnPage = () => {
    const {deck} = useContext(DeckContext);
    const hint = "lol"
    return (
        <div className={styles.contentWrapper}>
            <Link to="/overview"><IoArrowBackCircleSharp color={"#69D1C5"} size={60}
                                                         className={styles.navigationButton}/></Link>
            <div className={styles.learnBlockComponentWrapper}><LearnBlock words={deck}/></div>
        </div>
    );
};

export default LearnPage;