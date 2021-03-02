import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 35vw;
  background-color: green;
`;

const Profile = () => {
  return (
    <Wrapper>
      <h1>Profile</h1>
    </Wrapper>
  );
};

export default Profile;