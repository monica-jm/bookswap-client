import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 2.5rem;
  position:absolute;
  left:112px;
  top:13px;
  width: 100vw;
  height:100vh;
  cursor: pointer;
  padding:50px;
  
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
  background-color: none;
  border-radius: 50%;
  animation: blink forwards infinite 10s ease-in-out;
`

const Eye = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  width: 50%;
  height: 50%;
  background-color: #2f54eb;
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
