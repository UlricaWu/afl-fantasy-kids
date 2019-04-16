import React from 'react';
import styled from 'styled-components';
import variables from '../Assets/variables';

const Circle = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background-color: black;
  margin: 15px 25px;
  border: 5px solid white;
`;


function AflTeamCircle({image = null, teamname = null, color = null}) {
  return (
    <Circle src={image} tooltip={teamname}  />
  )
}

export default AflTeamCircle
