import "./App.css";
import { Footer } from "./layouts/footer/Footer";
import { Header } from "./layouts/header/Header";
import { Landing } from "./layouts/landing-page/Landing";

function App() {
    return (
        <>
            <Header />
            <main className="App">
                <Landing />
            </main>
            <Footer />
        </>
    );
}

export default App;
