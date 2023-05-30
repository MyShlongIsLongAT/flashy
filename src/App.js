import './App.css';
import {DataProvider} from "./services/DataContext";
import {DeckProvider} from "./services/DeckContext";
import DeckSelector from "./Pages/DeckSelector/DeckSelector";
import {Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Home/Homepage";
import React from "react";
import DeckOverview from "./Pages/DeckOverview/DeckOverview";

function App() {
    return (
        <div className="App">
            <DataProvider>
                <DeckProvider>
                    <Routes>
                        <Route exact path="*" element={<Homepage/>}/>
                        <Route exact path="/decks" element={<DeckSelector/>}/>
                        <Route exact path="/deck-overview" element={<DeckOverview/>}/>
                    </Routes>
                </DeckProvider>
            </DataProvider>
        </div>
    );
}

export default App;
