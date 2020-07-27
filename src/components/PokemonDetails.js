import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { IdGetterContext } from "../context/IdGetterContext";

function PokemonDetails() {
  const [actualPokemon, setActualPokemon] = useState([]);
  const [actualPokemonPic, setActualPokemonPic] = useState([]);
  const [pokemonId] = useContext(IdGetterContext);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((response) => {
        setActualPokemon(response.data);
        setActualPokemonPic(response.data.sprites);
      });
  }, [pokemonId]);
  return (
    <div
      class="card"
      style={{
        width: "30%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
        border: "black solid",
      }}
    >
      <img
        class="card"
        src={actualPokemonPic.front_default}
        alt=""
        style={{ background: "#eee", marginLeft: "225px" }}
      ></img>
      <div class="card-body">
        <p class="card-text" style={{ textAlign: "center" }}>
          <b>{actualPokemon.name}</b>
          <div>Id: {actualPokemon.id}</div>
          <div>Height: {actualPokemon.height}</div>
          <div>Weight: {actualPokemon.weight}</div>
          <div>Base experience: {actualPokemon.base_experience}</div>
        </p>
      </div>
    </div>
  );
}

export default React.memo(PokemonDetails);
