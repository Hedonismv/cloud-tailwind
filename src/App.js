import './App.css';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";
import Support from "./Components/Support";

function App() {
    return (
        <>
            <Header/>
            <Hero/>
            <About/>
            <Support />
            <Pricing />
            <Footer />
        </>
    );
}

export default App;
