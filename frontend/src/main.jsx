import React from "react";
import ReactDOM from "react-dom/client";
import Pokedex from "./pages/Pokedex";
import Header from "./components/App components/Header";
import Footer from "./components/App components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <Pokedex />
    <Footer />
  </React.StrictMode>
);
