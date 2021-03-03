import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useParams, NavLink, useHistory } from "react-router-dom";

import { getPokemonById } from "../api/restApi";
import { Container } from "../globalStyles";

const Wrapper = styled(Container)``;

const BackButton = styled.button`
  width: 50px;
  height: 30px;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;

const NavButton = styled.button`
  height: 20px;
  width: 50px;
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoWrapper = styled.div`
  display: block;
  margin-right: 30px;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
`;

const Desc = styled.p``;

const CatchButton = styled.button`
  height: 40px;
  width: 60px;
`;

export default function PokemonDetail() {
  const history = useHistory();
  const { id } = useParams();
  const [currentId, setCurrentId] = useState(id);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const requestData = async (dataId) => {
    setIsLoading(true);
    setData([]);
    let pokemonsData = await getPokemonById(dataId);
    setData(pokemonsData);
    setIsLoading(false);
  };

  useEffect(() => {
    requestData(id);
  }, [id]);

  const handleNav = (type, num) => {
    if (type === "prev") {
      if (num === 1 || num === "1") {
        return `/pokemon/898`;
      } else {
        return `/pokemon/${parseInt(num) - 1}`;
      }
    } else {
      if (num === 898 || num === "898") {
        return `/pokemon/1`;
      } else {
        return `/pokemon/${parseInt(num) + 1}`;
      }
    }
  };

  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  console.log(data);

  return (
    <Wrapper>
      <NavLink to="/">
        <BackButton>back</BackButton>
      </NavLink>
      <br />
      {data && (
        <InnerWrapper>
          <DetailWrapper>
            <NavLink to={handleNav("prev", id)}>
              <NavButton>Prev</NavButton>
            </NavLink>
            <InfoWrapper>
              <Image src={`${imageUrl}/${data.id}.png`} alt={`${data.name}`} />
              <Desc>{`height: ${data.height}`}</Desc>
              <Desc>{`weight: ${data.weight}`}</Desc>
              {data.abilities && (
                <Desc>{`abilites: ${data.abilities.map(
                  (item, index) => item.ability.name
                )}`}</Desc>
              )}
              {data.types && (
                <Desc>{`type: ${data.types.map(
                  (type, index) => type.type.name
                )}`}</Desc>
              )}
            </InfoWrapper>
            <>
              <CatchButton>CATCH</CatchButton>
            </>
          </DetailWrapper>
          <NavLink to={handleNav("next", id)}>
            <NavButton>Next</NavButton>
          </NavLink>
        </InnerWrapper>
      )}
    </Wrapper>
  );
}
