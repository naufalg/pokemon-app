import styled from "@emotion/styled";

const breakpoints = [576, 768, 992, 1200];

export const mediaQuery = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const Container = styled.div`
  padding: 0 6.4%;
  margin: auto;
  max-width: 1600px;
  ${mediaQuery[2]} {
    padding: 0 11%;
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
  font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;
