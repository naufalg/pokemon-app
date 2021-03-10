import styled from "@emotion/styled";
import pokeball from "./assets/pokeball.png";

const breakpoints = [576, 768, 992, 1200];

export const mediaQuery = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);

export const Container = styled.div`
  padding: 0 4%;
  margin: auto;
  max-width: 1600px;
  ${mediaQuery[2]} {
    padding: 0 9%;
  }
`;

export const forGlobal = `
a {
  text-decoration: none;
  color: black;
}
ul,
li {
  list-style: none;
}
button:focus {
  outline: none;
}
html {
  scroll-behavior: smooth;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  font-family: 'DotGothic16', sans-serif;
    // font-family: 'Archivo', sans-serif;
}
.hidden {
  visibility:hidden;
}
.react-icons {
  vertical-align: middle;
  font-size:1.2em;
  transition: 150ms;
  &:hover {
    filter: brightness(80%);
    cursor:pointer;
    transform: scale(1.2);
  }
}
.catched {
  &:after {
    content: "";
    background-image: url(${pokeball});
    background-size: 20px 20px;
    background-repeat: no-repeat;
    position: absolute;
    top: 4%;
    right: 0%;
    bottom: 0%;
    left: 3%;
    opacity: 0.3;
  }
}
`;

export const typeColor = {
  grass: "#78c850",
  fire: "#f08030",
  water: "#6890f0",
  bug: "#a8b820",
  normal: "#a8a878",
  poison: "#a040a0",
  electric: "#f8d030",
  ground: "#e0c068",
  fairy: "#ee99ac",
  fighting: "#c03028",
  psychic: "#f85888",
  rock: "#b8a038",
  ghost: "#705898",
  ice: "#98d8d8",
  dragon: "#7038f8",
  flying: "#A98FF3",
  steel: "#B7B7CE",
  dark: "#705746",
};
