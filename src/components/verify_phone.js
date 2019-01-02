import React, { Component } from 'react';
import '../App.css';



class Verify_phone extends Component{
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
      <div>
        <div className="col-9  verify card ">
          <p className="row">
            Tu número de teléfono nos ayudara a mantener la seguridad de tu cuenta.
          </p>
          <p className="row">
            Introduce el código de verificación que acabamos de enviar al número *** *** *23
          </p>

          <p className="row">
            Código
          </p>
          <div className="row  input-group-append ">
              <div className="col-6 ">
                  <input type="password" name="input-group" onChange={evento=>this.update_input(evento)}  className="form-control"  />
              </div>
              <div className="col  input-group-append ">
                  <button type="button" className="btn btn-primary"  onClick={this.verify_function}>Listo</button>

                  <button type="button" className="btn btn-outline-secondary ml-2"  onClick={this.cancel} >Cancelar</button>
              </div>
          </div>
        </div>

      </div>
    )
  }
}
export default Verify_phone;
