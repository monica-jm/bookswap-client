import React from "react";
import styled from "styled-components";

const MesWrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 35vw;
  background-color: pink;
`;

const Profile = () => {
  return (
    <MesWrapper>
      <h1>Profile</h1>
    </MesWrapper>
  );
};

export default Profile;
