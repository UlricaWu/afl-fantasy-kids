import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom' 

import Header from './Header/Header';
import LoginRegister from './LoginRegister/LoginRegister';
import TeamCreation from './TeamCreation/TeamCreation';
import TeamInformation from './TeamInformation/TeamInformation';
import TeamInterest from './TeamInterest/TeamInterest';
import Footer from './Footer/Footer';


function App() {

  return (
    <Router>
      <Header />
      <Route exact path='/' component={LoginRegister} />
      <Route exact path='/team-creation' component={TeamCreation} />
      <Route exact path='/team-information' component={TeamInformation} />
      <Route exact path='/team-interest' component={TeamInterest} />
      <Footer />
    </Router>
  );

}

export default App
