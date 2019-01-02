import React, { Component } from 'react';
import logo from '../images/logo.png'

class Header extends Component {

  render(){
    return(
      <div className="container">

        <nav className=" nav d-flex logo_principal" id="header">
          <img src={logo } className="mr-auto p2"  alt="no se pudo cargar"/>
          <div className="hv"></div>
          <div className="dropdown ">
              <a className="btn btn-light dropdown-toggle" href="#header" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Mario Fishman
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#header">Cerrar sesión</a>

              </div>
           </div>
        </nav>

      </div>
    )
  }
}
export default Header;
