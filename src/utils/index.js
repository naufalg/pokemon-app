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
  if (probabilty < 0.5) {
    alert(`Aw, ${pokemonData.name} got away! try again`);
  } else {
    alert(`Congratulations! you catch ${pokemonData.name}!`);
    const pokemonNickname = prompt(`add nickname to your pokemon!`);
    if (pokemonNickname) {
      addPokemon({
        nickname: pokemonNickname,
        name: pokemonData.name,
        id: pokemonData.id,
        url: `${process.env.REACT_APP_POKE_API}/${pokemonData.id}`,
      });
    } else if (pokemonNickname === null || pokemonNickname === "") {
      addPokemon({
        nickname: "",
        name: pokemonData.name,
        id: pokemonData.id,
        url: `${process.env.REACT_APP_POKE_API}/${pokemonData.id}`,
      });
    }
  }
};

export const catchPokemonModal = (
  pokemonData,
  setIsPokeballDrop,
  setShowCatchedInput,
  setShowFailCatch
) => {
  const probabilty = Math.random();
  if (probabilty < 0.5) {
    return setShowFailCatch(true);
  } else {
    return setShowCatchedInput(true);
  }
};

export const removePokemon = (removePokemonData, index, nickname, history) => {
  const confirmRemove = window.confirm(
    `Are you sure to release "${nickname || removePokemonData.name}"?`
  );
  let myPokemonData = JSON.parse(localStorage.getItem("myPokemon"));
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

export const clearPokemon = (history) => {
  const myPokemonData = JSON.parse(localStorage.getItem("myPokemon"));
  const confirmClear = window.confirm(
    `Are you sure to release all (${myPokemonData.length}) pokemon?`
  );
  if (confirmClear === true) {
    localStorage.removeItem("myPokemon");
    history.push("/");
  }
};

export const capitalize = (string) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return null;
  }
};
