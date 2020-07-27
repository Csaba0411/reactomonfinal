import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Types from "./components/Types";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import { IdProvider } from "./context/IdGetterContext";
import MainPic from "./components/MainPic";
import { ThemeProvider } from "./context/ThemeContext";
import { PageProvider } from "./context/PaginatorContext";

function App() {
  return (
    <ThemeProvider>
      <PageProvider>
        <BrowserRouter>
          <div className="app">
            <NavBar />
            <IdProvider>
              <div className="container">
                <Route exact path="/" component={MainPic} />
                <Route path="/pokemon/:id" component={PokemonDetails} />
                <Route path="/types" component={Types} />
                <Route path="/pokemons" component={PokemonList} />
              </div>
            </IdProvider>
          </div>
        </BrowserRouter>
      </PageProvider>
    </ThemeProvider>
  );
}

export default App;
