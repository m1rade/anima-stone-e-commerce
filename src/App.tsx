import "./App.css";
import { Header } from "./layouts/header/Header";
import { Landing } from "./layouts/landing-page/Landing";

function App() {
    return (
        <>
            <Header />
            <main className="App">
                <Landing />
            </main>
        </>
    );
}

export default App;
