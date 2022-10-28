import React, { useState } from "react";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="App">
      <Navbar path={menu} setMenu={setMenu} />
      {menu === "home" ? <Home /> : <Pokedex />}

      <Footer path={menu} />
    </div>
  );
}

export default App;
