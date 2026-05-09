import './App.css'
import logMenuButtonText from "./assets/Helpers/logMenuButtonText.js";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <button type="button" onClick={() => logMenuButtonText("to the collection")}>to the collection</button>
                <button type="button" onClick={() => logMenuButtonText("shop all bags")}>shop all bags</button>
                <button type="button" onClick={() => logMenuButtonText("pre-orders")} disabled>pre-orders</button>
            </nav>
        </>
    )
}

export default App

// props: alleen in React components, niet in helpers
// parameters: overal in JavaScript