import React, {useContext, useState} from 'react';
import styles from './deckgrid.module.css';
import gridBoxStyle from './deckblock.module.css'
import linkStyles from '../../styles/main.module.css'
import {DataContext} from "../../services/DataContext";
import DeckBlock from "./DeckBlock";
import {DeckContext} from "../../services/DeckContext";
import {AiOutlinePlus} from "react-icons/ai";
import DeckUploader from "../DeckUploader/DeckUploader";
import {Link} from "react-router-dom";

const DeckGrid = () => {
    const {decks} = useContext(DataContext);
    const {updateSelectedDeck} = useContext(DeckContext);

    const [deckAdded, setDeckAdded] = useState(false);

    const toggleDeckAddPopup = () => {
        setDeckAdded(!deckAdded);
    }
    const handleOptionChange = (wantedDeck) => {
        updateSelectedDeck(wantedDeck);
    }

    return (
        <div>
            <div className={styles.wrapper}></div>
            {deckAdded &&
                <div className={styles.deckUploaderPosition}><DeckUploader handleClose={toggleDeckAddPopup}/></div>}
            {!deckAdded && <div className={styles.gridWrapper}>
                <div className={styles.deckGrid}>
                    {
                        decks.map((deck) => <div onClick={() => handleOptionChange(deck)}><Link
                            to="/overview" className={linkStyles.linkItem}><DeckBlock deckName={deck}/></Link>
                        </div>)
                    }
                    <div className={gridBoxStyle.deckWrapper} onClick={toggleDeckAddPopup}><AiOutlinePlus/></div>
                </div>
            </div>}
        </div>
    );
};

export default DeckGrid;
