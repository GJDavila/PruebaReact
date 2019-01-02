import React, { Component } from 'react';
import '../App.css';

import Management_mail from './management_mail'
import Management_phone from './management_phone'
import Management_password from './management_password'
import Management_rrss from './management_rrss'

class Tabs extends Component    {
 
  render() {
    return(
        <div className="container card-body">

              <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" role="tab" href="#contenidos">Cuenta</a>

                  </li>

                  <li className="nav-item">
                    <a className="nav-link " data-toggle="tab" role="tab" href="#it">Item</a>
                  </li>

             </ul>



             <div className="tab-content">
                   <div className="row tab-pane fade show active" role="tabpanel" id="contenidos">
                       <div className="row">
                            <div className="col-3">

                                       <nav className="nav nav-pills flex-column">
                                            <a  className=" space_lines" href=" #item-1">Inicio de sesión y seguridad</a>
                                            <a className=" space_lines " href=" #item-2">Número de celular</a>
                                            <a className=" space_lines" href=" #item-3">Cambiar contraseña</a>
                                            <a className=" space_lines" href=" #item-4">Conexiones</a>
                                       </nav>

                             </div>
                             <div className=" col-8" >
                                       <div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
                                           <div id="item-1">
                                            <Management_mail mails={this.props.user.mails} password={this.props.user.password} />
                                          </div>
                                          <hr/>
                                          <div id="item-2">
                                             <Management_phone cellphones={this.props.user.cellphones}  password={this.props.user.password} />
                                          </div>
                                          <hr/>
                                          <div id="item-3">
                                              <Management_password password={this.props.user.password}  />
                                          </div>
                                          <hr/>
                                          <div id="item-4">
                                               <Management_rrss redes={this.props.user.rrss}/>
                                           </div>

                                       </div>
                               </div>
                        </div>
                   </div>

                    <div className="row tab-pane fade show active" role="tabpanel"  id="it">

                   </div>

             </div>

        </div>


    )
  }
}





export default Tabs;
