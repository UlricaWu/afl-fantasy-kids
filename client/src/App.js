import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom' 
import styled from 'styled-components';
import variables from './Assets/variables';
import Header from './Header/Header';
import LoginRegister from './LoginRegister/LoginRegister';
import TeamCreation from './TeamCreation/TeamCreation';
import TeamInformation from './TeamInformation/TeamInformation';
import TeamInterest from './TeamInterest/TeamInterest';
import Footer from './Footer/Footer';


const PageContainer = styled.div`
  padding-bottom: 400px;
  background-color: ${variables.grayDark};
`

function App() {

  return (
    <Router>
      <PageContainer>
        <Header />
        <Route exact path='/' component={LoginRegister} />
        <Route exact path='/team-creation' component={TeamCreation} />
        <Route exact path='/team-information' component={TeamInformation} />
        <Route exact path='/team-interest' component={TeamInterest} />
      </PageContainer>
      <Footer />
    </Router>
  );

}

export default App
