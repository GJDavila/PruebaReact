import React, { Component } from 'react';

import './App.css';


import Tabs from './components/tabs'

import Perfil from './components/perfil'
import Header from './components/header'


import {user1} from './users.json'


class App extends Component {

  constructor(){
    super();
       this.state={
       user1
    }

  }

  render() {




    return (

      <div  >
          <div className="header card">
              <Header/>
          </div>

          <div className="container header card-body mt-1" >
            <div className="mt-3">
              <Perfil user={user1}/>
              <Tabs  user={user1} />
            </div>
          </div>
          <p className="copyright">
            Krowdy Corporation &copy; 2018
          </p>

      </div>

    );


  }
}

export default App;
