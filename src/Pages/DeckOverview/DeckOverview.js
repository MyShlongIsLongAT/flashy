import React, { useContext } from "react";
import { DeckContext } from "../../services/DeckContext";
import WordList from "../../components/WordList/WordList";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import FlashCard from "../../components/FlashcardBlock/FlashCard";
import styles from "./deckoverview.module.css";
import { BiBrain } from "react-icons/bi";
import { IoFlash } from "react-icons/io5";
import { Link } from "react-router-dom";
import linkStyles from "../../styles/main.module.css";

const DeckOverview = () => {
  const { deck } = useContext(DeckContext);

  return (
    <div>
      <Navigation />
      <div className={styles.contentWrapper}>
        <div className={styles.overviewGrid}>
          <div className={styles.deckOverview}>
            <FlashCard words={deck} />
            <WordList words={deck} />
          </div>
          <div className={styles.tabNavigationGrid}>
            <Link to="/flashcard" className={linkStyles.linkItem}>
              <div>
                <div className={styles.tabNavigationItem}>
                  <IoFlash size={100} color={"#424250"} />
                </div>
                {/*<div className={styles.tabNavigationItemText}>Flashcard</div>*/}
              </div>
            </Link>
            <Link to="/learn" className={linkStyles.linkItem}>
              <div>
                <div className={styles.tabNavigationItem}>
                  <BiBrain size={100} color={"#424250"} />
                </div>
                {
                  /*<div className={styles.tabNavigationItemText}>Learn</div>
                  */
                }
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeckOverview;
