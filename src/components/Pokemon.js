import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IdGetterContext } from "../context/IdGetterContext";
import styled from "styled-components";

export default function Pokemon(props) {
  //   const [actualPokemon, setActualPokemon] = useState([]);
  const [actualPokemonPic, setActualPokemonPic] = useState([]);
  const [pokemonId, setPokemonId] = useContext(IdGetterContext);

  useEffect(() => {
    axios.get(`${props.pokemon.url}`).then((response) => {
      //   setActualPokemon(response.data);
      setActualPokemonPic(response.data.sprites);
    });
  }, [props.pokemon.url, props]);

  const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: Pokemon;
    font-size: 1.5rem;
  `;

  return (
    <div
      className="card"
      style={{
        border: "solid black",
        marginLeft: "10px",
        marginTop: "10px",
        marginRight: "auto",
        width: "19%",
        display: "inline-block",
        textAlign: "center",
        borderRadius: "15px",
      }}
    >
      <div class="container">
        <StyledLink
          to={`pokemon/${props.pokemon.url
            .split("pokemon/")[1]
            .replace("/", "")}`}
          //   onClick={props.getId.bind(
          //     this,
          //     props.pokemon.url.split("pokemon/")[1].replace("/", "")
          //   )}
          onClick={() =>
            setPokemonId(
              props.pokemon.url.split("pokemon/")[1].replace("/", "")
            )
          }
        >
          {props.pokemon.name}
        </StyledLink>
      </div>
      <div class="pic">
        <img
          src={actualPokemonPic.front_default}
          alt=""
          style={{ width: "100%", background: "#eee" }}
        ></img>
      </div>
    </div>
  );
}
