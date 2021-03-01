import React from 'react';
import Home from './components/home'
import Logout from './components/logout'
import ViewAllContributions from './components/admin/viewallcontributions'
import ManageAccount from './components/admin/manageAccount'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>

      <div className="container">
          <div className="Navbar">

            <div className="Navbar-item"><Link to="/Home">Home</Link></div>

            <div className="Navbar-item"><Link to="/ViewAllContributions">View All Contributions</Link></div>

            <div className="Navbar-item"><Link to="/ManageAccount">Manage Account</Link></div>

            <div className="Navbar-item"><Link to="/Logout">LOG OUT</Link></div>

          </div>
        <div className="contents">
          <Switch>
          
            <Route path="/Home">
              <Home />
            </Route>

            <Route path="/ViewAllContributions">
              <ViewAllContributions />
            </Route>

            <Route path="/ManageAccount"> 
              <ManageAccount />
            </Route>

            <Route path="/Logout"> 
              <Logout />
            </Route>

          </Switch>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
