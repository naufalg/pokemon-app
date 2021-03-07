const addPokemon = (pokemonData) => {
  const myPokemonData = JSON.parse(localStorage.getItem("myPokemon"));
  if (myPokemonData) {
    localStorage.setItem(
      "myPokemon",
      JSON.stringify([...myPokemonData, { ...pokemonData }])
    );
  } else {
    localStorage.setItem("myPokemon", JSON.stringify([{ ...pokemonData }]));
  }
};

export const catchPokemon = (pokemonData) => {
  const probabilty = Math.random();
  console.log(probabilty);
  if (probabilty < 0.5) {
    alert(`${probabilty}  failed`);
  } else {
    alert(`${probabilty},  you catch it!`);
    const pokemonNickname = prompt(`add nickname to your pokemon!`);
    if (pokemonNickname) {
      addPokemon({
        nickname: pokemonNickname,
        name: pokemonData.name,
        id: pokemonData.id,
        url: `${process.env.REACT_APP_POKE_API}/${pokemonData.id}`,
      });
    } else if (pokemonNickname === null || pokemonNickname.length === 0) {
      addPokemon({
        nickname: null,
        name: pokemonData.name,
        id: pokemonData.id,
        url: `${process.env.REACT_APP_POKE_API}/${pokemonData.id}`,
      });
    }
  }
};

export const removePokemon = (removePokemonData, index, nickname, history) => {
  const confirmRemove = window.confirm(
    `Are you sure to delete ${nickname || removePokemonData.name}?`
  );
  let myPokemonData = JSON.parse(localStorage.getItem("myPokemon"));
  console.log("myPokemonData.length", myPokemonData.length);
  console.log("confirmRemove", confirmRemove);
  console.log("removePokemonData", removePokemonData);
  if (confirmRemove === true && myPokemonData.length > 1) {
    myPokemonData.splice(index, 1);
    localStorage.setItem("myPokemon", JSON.stringify([...myPokemonData]));
    history.push("/my-pokemon");
  } else if (confirmRemove === true && myPokemonData.length === 1) {
    localStorage.removeItem("myPokemon");
    history.push("/my-pokemon");
  } else if (confirmRemove === false) {
    localStorage.setItem("myPokemon", JSON.stringify(myPokemonData));
  }
};

export const capitalize = (string) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return null;
  }
};
