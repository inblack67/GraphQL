import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BookState from './context/book/BookState'
import Home from './components/Home';


import './App.css';

function App() {

  useEffect(() => {
    document.body.classList.add('bg-red-500');
  }, [])

  return (
    <BookState>
      <div className="">
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    </BookState>
  );
}

export default App;
