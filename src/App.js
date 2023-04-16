import './App.css';
import HomePage from "./components/Home/HomePage";
import {DeckProvider} from "./services/DeckContext";

function App() {
    return (
        <div className="App">
            <DeckProvider>
                <HomePage/>
            </DeckProvider>
        </div>
    );
}

export default App;
