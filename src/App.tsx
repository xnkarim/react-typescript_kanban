import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Leftbar from './components/Leftbar';
import Toolbar from './components/Toolbar';
import Routes from './routes';

function App() {
  return (
    <Router>
      <div className="container">
        <Leftbar />
        <div className="main-window">
          <Toolbar />
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
