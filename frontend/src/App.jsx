import { useState } from "react";
import Index from "./pages/Index";
import Pokefight from "./pages/Pokefight";
import Pokefeed from "./pages/Pokefeed";
import Pokecatch from "./pages/Pokecatch";
import Pokedex from "./pages/Pokedex";
import Header from "./components/App components/Header";
import Footer from "./components/App components/Footer";

import "./App.css";

function App() {
  const [pageNumb, setpageNumb] = useState(0);
  const [page, setPage] = useState(<Index />);
  const goToPokefight = () => {
    setpageNumb(1);
    setPage(<Pokefight />);
  };
  const goToPokecatch = () => {
    setpageNumb(2);
    setPage(<Pokecatch />);
  };
  const goToPokefeed = () => {
    setpageNumb(3);
    setPage(<Pokefeed />);
  };
  const goToPokedex = () => {
    setpageNumb(4);
    setPage(<Pokedex />);
  };
  const goToIndex = () => {
    setpageNumb(0);
    setPage(<Index />);
  };

  return (
    <div className="App">
      <Header
        goTo0={goToIndex}
        goTo1={goToPokefight}
        goTo2={goToPokefeed}
        goTo3={goToPokecatch}
        goTo4={goToPokedex}
        onPage={pageNumb}
      />
      {page}
      <Footer onPage={pageNumb} />
    </div>
  );
}

export default App;
