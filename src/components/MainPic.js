import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

function MainPic() {
  let picNum = getRandomInt(1, 20);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const { value } = useContext(ThemeContext);
  const [darkMode] = value;

  const [PokemonPic, setPokemonPic] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${picNum}/`)
      .then((response) => setPokemonPic(response.data.sprites.front_default));
  }, [picNum]);

  const Div = styled.div`
    width: 100%;
    display: block;
    text-align: center;
    background-color: ${darkMode ? "black" : "#eee"};
    padding-bottom: 1000px;
    padding-top: 50px;
  `;

  const Img = styled.img`
    background-color: ${darkMode ? "black" : "#eee"};
    width: 20%;
  `;

  return (
    <div>
      <Div className="card">
        <Img src={PokemonPic}></Img>
      </Div>
    </div>
  );
}

export default React.memo(MainPic);
