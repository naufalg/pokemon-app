import styled from "@emotion/styled";

const breakpoints = [576, 768, 992, 1200];

export const mediaQuery = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);

export const Container = styled.div`
  padding: 0 6.4%;
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
  font-family: 'Barlow Semi Condensed', sans-serif;
  // font-family: 'Archivo', sans-serif;
}
.hidden {
  visibility:hidden;
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
  flying: "#A98FF3"
};
