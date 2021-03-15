[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://pokemon-app-nghifari.vercel.app/">
    <img src="src/assets/pokedex-logo.png" alt="Logo" width="120">
  </a>

  <h3 align="center">Pokedex Web Application</h3>

  <p align="center">
    Pokedex SPA-website-based application with fun catch feature!
    <br />
    <br />
    <a href="https://pokemon-app-nghifari.vercel.app/">View Demo</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
        <a href="#installation">Installation</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#updates">Updates</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Pokemon app Screen Shot][product-screenshot]](https://pokemon-app-nghifari.vercel.app/)

This app consist of two main feature:

1. Explore the Pokemon(s) provided by PokeAPI
2. Collect them as your companion by catching them!

This project more like a javascript front-end web application playground with pokemon data provided by PokeAPI

### Built With

Mainly use React for Single Page Application advantages (migrate to NextJS for further updates) with many others supporting libraries

- [React](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [Emotion.JS](https://emotion.sh/)
- [GraphQL](https://graphql.org/)
- [Apollo Client](https://www.apollographql.com)

### Installation

1. Get the API at [https://pokeapi.co/](https://pokeapi.co/)

```sh
  REACT_APP_POKE_API=https://pokeapi.co/api/v2/pokemon
```

2. Clone the repo
   ```sh
   git clone https://github.com/naufalg/pokemon-app.git
   ```
3. Install NPM packages
   ```sh
   yarn install
   ```
4. Save your API in `.env`
   ```sh
   REACT_APP_POKE_API=https://pokeapi.co/api/v2/pokemon
   ```
5. Start locally

```sh
   yarn start
```

### Updates
I am already decided the planned updates consist of :
- Add catch animation
- Add search feature
- NextJs Migration
- Testing using jest
- TBA

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/naufalg/
[product-screenshot]: src/assets/pokeapp-screenshot-2.png
