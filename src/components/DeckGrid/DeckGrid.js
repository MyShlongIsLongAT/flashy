import React, {useContext, useState} from 'react';
import styles from './deckgrid.module.css';
import gridBoxStyle from '../DeckBlock/deckblock.module.css'
import {DataContext} from "../../services/DataContext";
import DeckBlock from "../DeckBlock/DeckBlock";
import {DeckContext} from "../../services/DeckContext";
import {AiOutlinePlus} from "react-icons/ai";
import DeckUploader from "../CSVUploader/DeckUploader";

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
            {deckAdded &&
                <div className={styles.deckUploaderPosition}><DeckUploader handleClose={toggleDeckAddPopup}/></div>}
            <div className={styles.gridWrapper}>
                <div className={styles.deckGrid}>
                    {
                        decks.map((deck) => <div onClick={() => handleOptionChange(deck)}><DeckBlock deckName={deck}/>
                        </div>)
                    }
                    <div className={gridBoxStyle.deckWrapper} onClick={toggleDeckAddPopup}><AiOutlinePlus/></div>
                </div>
            </div>

        </div>
    );
};

export default DeckGrid;