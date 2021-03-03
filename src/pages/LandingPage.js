import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { getPokemonByUrl, globalUrl } from "../api/restApi";

import { PokemonList } from "../components";
import { Container } from "../globalStyles";

const Hero = styled(Container)`
  justify-content: center;
`;

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: flex-col;
  justify-content: center;
`;

const PageButton = styled.button`
  margin: 20px 10px;
  padding: 10px;
`;

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [getOptions, setGetOptions] = useState(31);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(`${globalUrl}/?limit=20`);

  const getData = async () => {
    setIsLoading(true);
    setData([]);
    let pokemonsData = await getPokemonByUrl(currentPage);
    setData(pokemonsData);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  const nextPageClick = () => {
    setCurrentPage(data.next);
  };

  const prevPageClick = () => {
    setCurrentPage(data.previous);
  };

  console.log(data);

  const Pagination = () => (
    <PaginationWrapper>
      {data.previous && <PageButton onClick={prevPageClick}>Prev</PageButton>}
      {data.next && <PageButton onClick={nextPageClick}>Next</PageButton>}
    </PaginationWrapper>
  );

  return (
    <Hero>
      <PokemonList listData={data.results} />
      <Pagination />
    </Hero>
  );
}
