import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit, faCamera, faList} from "@fortawesome/free-solid-svg-icons";

import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import ViewLoans from './Components/ViewLoans';
import ViewItems from './Components/ViewItems';
import ApplyLoan from './Components/ApplyLoan';
import HomePage from './Components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';


// import AuthenticatedRoute from './components/AuthenticatedRoute';


library.add(faTrash, faEdit, faPlus, faCamera, faList);

//npm install react-router-dom@5 to install 
/*
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome
*/

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className='container-all'>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/dashboard' component={Dashboard}></Route>
          <Route exact path='/login' component={Login}></Route>  
          <Route exact path='/register' component={Register}></Route>
          <Route exact path='/dashboard/viewLoans' component={ViewLoans}></Route>  
          <Route exact path='/dashboard/viewItems' component={ViewItems}></Route>  
          <Route exact path='/dashboard/applyLoan' component={ApplyLoan}></Route>  

        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;