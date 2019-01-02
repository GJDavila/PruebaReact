import React, { Component } from 'react';
import '../App.css';
import logo_safe from '../images/logo_safe.png'
import perfil from '../images/perfil.png'

class Welcome extends Component{

  render(){
    return(
      <div className="container">
        <div className="row gray">
            <div className="col">
                <h3>
                  Bienvenido
                </h3>
                <p > Desde aquí y con tu cuenta de krowdy  podras acceder rápidamente a tus herramientas y funciones para proteger tus datos y tu privacidad.</p>
            </div>
            <div className="col">
                  <img src={logo_safe}  alt="no se pudo cargar"/>
            </div>
          </div>
      </div>
    )
  }
}


class User_info extends Component {

  render(){
    return (
      <div className="container">

          <div className="row">

                <div className="col"> {/*div  user image*/}
                  <img src={perfil } className="imagen" alt="no se pudo cargar"/>
                </div>

                <div className="col welcome"> {/*div user information*/}
                    <h6>{ /*user name*/}
                    {this.props.user.name}
                   </h6>

                     {/*user mail*/}
                     <p>
                    {this.props.user.mail}
                    </p>

                    <h6>{/*user date*/}
                    <small>Miembro desde 14 de junio del 2017</small>
                    </h6>
                </div>

          </div>
      </div>
    )
  }
}


class  Perfil extends Component {
     
      render(){
        return(

              <div className="row">
                <div className="col ">
                    <User_info user={this.props.user}/>
                </div>

                <div className=" hr "></div>

                <div className="col">
                    <Welcome/>
                </div>


              </div>

        )
      }

}

export default Perfil;
