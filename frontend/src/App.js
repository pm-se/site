import React from 'react';
import Topo from './components/Topo';
import Rodape from './components/Rodape';
import Principal from './components/Principal';
import Historia from './components/Historia';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  // const img1 = process.env.PUBLIC_URL + 'img/01.jpg';
  return (
      <Router>
          <Topo/>
            <Route path="/" exact="/" component={Principal} />
            <Route path="/historia" component={Historia} />
          <Rodape/>
      </Router>
  );
}

export default App;
