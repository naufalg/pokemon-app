import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPokemonByName } from "../api";

export default function PokemonDetail() {
  const { name } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    getPokemonByName();
  }, []);

  return <div>detail</div>;
}
