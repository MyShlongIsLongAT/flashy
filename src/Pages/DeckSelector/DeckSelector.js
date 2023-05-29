import React, {useContext} from 'react';
import {DataContext} from "../../services/DataContext";
import {DeckContext} from "../../services/DeckContext";
import Navigation from "../../components/Navigation/Navigation";
import mainStyles from '../../styles/main.module.css';
import styles from './deckselector.module.css';
import Footer from "../../components/Footer/Footer";
import DeckGrid from "../../components/DeckGrid/DeckGrid";
import DeckUploader from "../../components/CSVUploader/DeckUploader";

function DeckSelector() {
    return (
        <div>
            <Navigation/>
            <div className={styles.contentWrapper}>
                <div>
                    <div className={mainStyles.subtitle}>Select your deck</div>
                </div>
                <DeckGrid/>
            </div>
            <Footer/>
        </div>
    );
}

export default DeckSelector;
