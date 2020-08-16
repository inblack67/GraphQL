import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';


import './App.css';

function App() {

  useEffect(() => {
    document.body.classList.add('bg-red-500');
  }, [])

  return (
    <div className="">
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
