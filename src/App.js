import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import CardList from "./components/cardList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardList />
    </div>
  );
}

export default App;
