import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import styled from "styled-components";
import { PaginatorContext } from "../context/PaginatorContext";

export default function PokemonList(props) {
  const [pokemons, setPokemon] = useState([]);
  const [allDatas, setAllDatas] = useState(null);
  const [nextPage, setNextPage] = useContext(PaginatorContext);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon${nextPage ? nextPage : ""}`)
      .then((response) => {
        setPokemon(response.data.results);
        setAllDatas(response.data);
      });
  }, [nextPage]);

  const Button = styled.button`
    -webkit-text-stroke: 0.5px black;
    background-color: #ffcb05;
  `;

  const changePageNext = () => {
    setNextPage(allDatas.next.split("pokemon")[1]);
    console.log(nextPage);
  };

  const changePagePrevious = () => {
    allDatas && allDatas.previous !== null
      ? setNextPage(allDatas.previous.split("pokemon")[1])
      : setNextPage(null);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Button onClick={changePagePrevious}>previous</Button>
        <Button onClick={changePageNext}>next</Button>
      </div>
      <div>
        {pokemons
          ? pokemons.map((pokemon) => (
              <Pokemon
                key={pokemon.url.split("pokemon/")[1].replace("/", "")}
                pokemon={pokemon}
                getId={props.getId}
              />
            ))
          : "Loading"}
      </div>
    </div>
  );
}
