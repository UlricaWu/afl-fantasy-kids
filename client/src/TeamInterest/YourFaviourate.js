import React from 'react'
import styled from 'styled-components';
import variables from '../Assets/variables';

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
`;

const TeamImage = styled.img`
    display: block; 
    width: 100px;
    height: 100%;
    margin-right: 10px;
    background-color: orange;
`;

const TeamStatus = styled.div`
    display: block;
    flex-grow: 1;
    background-color: pink;
    height: 100%;
`


function YourFaviourate() {
  return  (
    <Container>
        <TeamImage />
        <TeamStatus />
    </Container>
  )
}
export default YourFaviourate
