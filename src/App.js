import './App.css';
import {DataProvider} from "./services/DataContext";
import {DeckProvider} from "./services/DeckContext";
import DeckSelector from "./Pages/DeckSelector/DeckSelector";

function App() {
    return (
        <div className="App">
            <DataProvider>
                <DeckProvider>
                    {/*<HomePage/>*/}
                    <DeckSelector/>
                </DeckProvider>
            </DataProvider>
        </div>
    );
}

export default App;
