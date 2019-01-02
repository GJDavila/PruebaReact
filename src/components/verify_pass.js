import React, { Component } from 'react';
import '../App.css';

import check from '../images/check.png'

class Verify_pass extends Component {
  constructor(props) {
    super(props)
    this.update_input=this.update_input.bind(this)
    this.verify_function=this.verify_function.bind(this)
    this.cancel=this.cancel.bind(this);
    this.state={
      password:props.password,
      input_pass:'',

    }

  }

  cancel(){
    this.props.show_verify("cancel");
  }
  verify_function(){
      if(this.state.input_pass!=='')
      {
          if(this.state.password===this.state.input_pass){
            this.props.function_();
          }
          else{
            alert("Contraseña incorrecta.")
          }
      }
      else{
        alert("Ingresar contraseña.")
      }
  }

  update_input(event)
  {
    this.setState({
      input_pass:event.target.value

    })
  }

  render(){
    return(
        <div className="row verify_mail ">
          <div className="col-3">
             <img src={check } className="logo_check" alt="no se pudo cargar"/>
          </div>





          <div className="col-9">
            <h5>Verificación</h5>
            <p>Para tu seguridad introduce tu contraseña para realizar este cambio.</p>
            <div className="row  input-group-append ">
                <div className="col-6 ">
                    <input type="password" name="input-group" onChange={evento=>this.update_input(evento)}  className="form-control"  />
                </div>
                <div className="col  input-group-append ">
                    <button type="button" className="btn btn-primary"  onClick={this.verify_function}>Listo</button>

                    <button type="button" className="btn btn-outline-secondary ml-2"  onClick={this.cancel} >Cancelar</button>
                </div>
            </div>
            <a href='#pass' id="pass"> Olvidaste tu contraseña</a>
          </div>



        </div>

    )
  }

}
export default Verify_pass;
