import './App.css';
import HomePage from "./components/Home/HomePage";
import {DataProvider} from "./services/DataContext";
import {DeckProvider} from "./services/DeckContext";

function App() {
    return (
        <div className="App">
            <DataProvider>
                <DeckProvider>
                    <HomePage/>
                </DeckProvider>
            </DataProvider>
        </div>
    );
}

export default App;
