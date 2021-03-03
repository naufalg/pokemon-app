import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Search = styled.input`
  width: 500px;
  height: 50px;
`;

const Button = styled.button`
  height: 50px;
`;

export default function SearchForm() {
  const [inputState, setInputState] = useState("");

  const inputChange = (e) => {
    setInputState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Search
        placeholder="Find Pokemon"
        type="text"
        value={inputState}
        onChange={(e) => inputChange(e)}
      />
      <Button>Search</Button>
    </form>
  );
}
