import './App.css';
import {DataProvider} from "./services/DataContext";
import {DeckProvider} from "./services/DeckContext";
import DeckSelector from "./Pages/DeckSelector/DeckSelector";
import {Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import React from "react";
import DeckOverview from "./Pages/DeckOverview/DeckOverview";
import FlashcardPage from "./Pages/FlashcardPage/FlashcardPage";
import LearnPage from "./Pages/LearnPage/LearnPage";
import AboutPage from "./Pages/AboutPage/AboutPage";

function App() {
    return (
        <div className="App">
            <DataProvider>
                <DeckProvider>
                    <Routes>
                        <Route exact path="*" element={<Homepage/>}/>
                        <Route exact path="/decks" element={<DeckSelector/>}/>
                        <Route exact path="/overview" element={<DeckOverview/>}/>
                        <Route exact path="/flashcard" element={<FlashcardPage/>}/>
                        <Route exact path="/learn" element={<LearnPage/>}/>
                        <Route exact path="/about" element={<AboutPage/>}/>
                    </Routes>
                </DeckProvider>
            </DataProvider>
        </div>
    );
}

export default App;
