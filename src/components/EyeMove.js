import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 6rem;
  position:absolute;
  width: 100%;
  height:100%;
  cursor: pointer;
`
const Eyes = styled.div`
  text-align: center;
  display: flex;
  font-size: 0.65em;
  width: 1em;
  height: 1em;
  position: absolute;
  left: 0.25em;
  top: 0.3em;
`
const EyeLid = styled.div`
  text-align: center;
  display: flex;
  font-size: 0.65em;
  width: 1em;
  height: 1em;
  position: absolute;
  left: 0.25em;
  top: 0.3em;
  background-color: white;
  border-radius: 50%;
  animation: blink forwards infinite 10s ease-in-out;
  border-style:solid; 
  border-color: black;
  border-width: 1px;
`

const Eye = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  width: 75%;
  height: 75%;
  background-color: black;
  border-radius: 50%;
`
const mouseMove = (e) =>{
  let eyes = document.querySelector('.eyes');
  let mouseX = (eyes.getBoundingClientRect().left); 
  let mouseY = (eyes.getBoundingClientRect().top);
  let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
  let rotationDegrees = (radianDegrees * (180/ Math.PI) * -1) + 180;
  eyes.style.transform = `rotate(${rotationDegrees}deg)`

}

function EyeMove() {

  return (
     <Container onMouseMove={mouseMove} className="ufo">
      <EyeLid className="eye-lid">
        <Eyes className="eyes">
          <Eye className="eye"></Eye>
        </Eyes>
      </EyeLid>
    </Container>
  );
}

export default EyeMove; 
