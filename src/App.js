import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Personais from './pages/Personais';
import Alunos from './pages/Alunos';
import Configu from './pages/Configu';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/personais' component={Personais} />
        <Route path='/alunos' component={Alunos} />
        <Route path='/configu' component={Configu} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
