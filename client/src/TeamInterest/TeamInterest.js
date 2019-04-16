import React, { Component } from 'react';
import styled from 'styled-components';
import variables from '../Assets/variables';
import AflTeamCircle from './AflTeamCircle';
import YourFaviourate from './YourFaviourate';


const Container = styled.div`
  background-color: ${variables.grayDark};
`;

const InnerContainer = styled.div`
  display: flex;
  height: 900px;
`;

const SelectSection = styled.div`
  width: 75%;
  flex-grow: 1;
  padding-top: 30px;
`;
const YourFaviouratesContainer = styled.div`
  background-color: ${variables.darkNavy};
  width: 600px;
  padding 30px 15px;
  > div {
    margin-bottom: 10px;
  }
`;

const Heading = styled.h1`
  font-family: ${variables.headerFont};
  font-size: 26px;
  text-align: center;
`;

const AflTeamCircleContainer = styled.div`
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export class TeamInterest extends Component {
  renderSelections() {
    let teams = [];
     for(let i = 0; i < 12; i++) {
      teams.push(<AflTeamCircle />)
    }
    return teams;
  }

  render() {
    return (
      <Container>
        <InnerContainer>
          <SelectSection>
              <Heading>Select your three faviourate teams</Heading>
              <AflTeamCircleContainer>
                {this.renderSelections()}
              </AflTeamCircleContainer>
          </SelectSection>
          <YourFaviouratesContainer>
            <Heading style={{marginBottom: '20px', color:'white'}}>Your Favourates!</Heading>
            <YourFaviourate />
            <YourFaviourate />
            <YourFaviourate />
          </YourFaviouratesContainer>
        </InnerContainer>
      </Container>
    )
  }
}

export default TeamInterest
