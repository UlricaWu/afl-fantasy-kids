import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import variables from '../Assets/variables';
import aflLogo from '../Assets/Images/aflLogo.svg';

const Container = styled.div`
  display: flex;
  height: 75px;
  background-color: ${variables.lightNavy}
  padding: 10px 15px;
`

const LogoContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  
  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: 100%;
    }

  }
`;


const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding-left: 50px;
  
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.div`
  margin-right: 20px;
  cursor: pointer;
  > a { 
    font-size: 30px;
    color: white;
    transition: color .2s;
    font-family: ${variables.headerFont}
    :hover {
      color: ${variables.aflRed}
    }
   }
`;

export class Header extends Component {
  render() {
    return (
      <Container>
        <LogoContainer>
          <Link to='/'><img src={aflLogo} /></Link>
        </LogoContainer>
        <ContentContainer>
          <NavBar>
            <NavLink><Link to='/'>Home</Link></NavLink>
            <NavLink><Link to='/team-interest'>Faviorates</Link></NavLink>
            <NavLink><Link to='/team-creation'>Create Team</Link></NavLink>
            <NavLink><Link to='/team-information'>Team info</Link></NavLink>
          </NavBar>
        </ContentContainer>
      </Container>
    )
  }
}

export default Header
