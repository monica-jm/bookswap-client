import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100vw;
  height: 150px;
  padding: 20px;
  border: 0.5px solid lightgray;
`;

const SearchForm = styled.form`
  color: gray;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: relative;

  .searchIcon {
    position: absolute;
    top: 15%;
    left: 10px;
    transform: translate/margin(-50%);
    z-index: 9;
  }

  .settings-icon {
    top: 15%;
  }
`;

const SearchInput = styled.input`
  background-color: #e6e6e6;
  border-radius: 100px;
  border-style: none;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 40px;
  width: 100%;
`;

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchForm>
        <SearchInput type="text" placeholder="Find a book" />
      </SearchForm>
    </Wrapper>
  );
};

export default SearchBar;
