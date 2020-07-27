import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

export default function NavBar() {
  const { value, value2 } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = value;
  const [buttonTitle, setButtonTitle] = value2;

  const Button = styled.button`
    -webkit-text-stroke: 0.5px black;
    background-color: #ffcb05;
  `;

  const StyledLink1 = styled(Link)`
    -webkit-text-stroke: 2px black;
    font-family: Pokemon;
    text-decoration: none;
    color: #ffcb05;
    &:hover {
      color: #c7a008;
      text-decoration: none;
    }
  `;

  const StyledLink2 = styled(Link)`
    font-family: Pokemon;
    text-decoration: none;
  `;

  const StyledDiv = styled.div`
    text-align: center;
    background-color: ${darkMode ? "#333" : "lightgray"};
    padding-bottom: 20px;
  `;

  const changeTheme = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
    darkMode ? setButtonTitle("Darkmode") : setButtonTitle("Lightmode");
  };

  return (
    <StyledDiv className="card">
      <h1>
        <StyledLink1 to="/">Reactomon</StyledLink1>
      </h1>
      <StyledLink2 to="/pokemons">PokemonList</StyledLink2>{" "}
      <StyledLink2 to="/types">TypeList</StyledLink2>{" "}
      <Button onClick={changeTheme}>{buttonTitle}</Button>
    </StyledDiv>
  );
}
