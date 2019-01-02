import React, { Component } from 'react';
import '../App.css';


class Management_rrss extends Component {

  func(){
    alert("presione");
  }

  render(){
    let rrss = this.props.redes.map((r_s,i)=>{

      return(
        <div className="container"  key={i} >
            <div className="row space_lines " id="rs">


                  <div className="col-1">
                    <img src={r_s.icon } className="icon_rrss" alt="no se pudo cargar"/>
                  </div>
                  <div className="col-5 text-left">
                    <p  className="col text-left" > {r_s.red_social}</p>

                  </div>

                  <div className="col-5"  >

                      <a href="#rs" className="col alert-link" onClick={this.func}>Revocar acceso  </a>

                     </div>


             </div>
        </div>
      )
    })

    return(
      <div className="col"  >
        <div  className="row space_lines ">
          <div className="arrow p-2 flex-shrink-1  "><i className="fas fa-angle-down  " data-toggle="collapse" data-target="#collapserrss" aria-expanded="true" >  </i></div>

          <div className="text-left">
              <h5>Conexiones</h5>
              <h6>Redes sociales conectadas a tu cuenta</h6>
          </div>
        </div>
        <div className="collapse show " id="collapserrss">
              {rrss}
            <hr/>
            <div className="row space_lines ">


                  <div className="col-1">
                    <img src="https://vignette.wikia.nocookie.net/eldarya-en-espanol/images/d/dd/Facebook-icon.png/revision/latest?cb=20160605032114&path-prefix=es"  className="icon_rrss" alt="no se pudo cargar"/>
                  </div>
                  <div className="col-5 text-left">
                    <p  className="col text-left" > Conectarse con Facebook</p>

                  </div>

                  <div className="col-5"  >

                      <button className="btn btn-outline-secondary" >Conectarse con Facebook</button>

                     </div>


             </div>
          </div>
     </div>

    )
  }
}

export default Management_rrss;
