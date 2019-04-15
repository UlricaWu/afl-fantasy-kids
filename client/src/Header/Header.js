import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import aflLogo from '../Assets/Images/aflLogo.svg';

const Container = styled.div`
  display: flex;
  height: 50px;
`

const LogoContainer = styled.div`
  width: 100px;

  > a {

  }
`;

const LogoConstrainer = styled.div``;

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
    text-decoration: none;
    text-color: black;
    transition: color .2s;
    :hover {
      color: white;
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
