import React, { Component } from 'react';
import '../App.css';



class Management_password extends Component {
  constructor(props) {
    super(props);
    this.update_input_pass=this.update_input_pass.bind(this);
    this.save_new_pass=this.save_new_pass.bind(this);
    this.state={
      current_pass:props.password,
      pass:'',
      new_pass:'',
      repeat_new_pass:''
    }
  }

  save_new_pass(){
    if(this.state.pass!=='' && this.state.new_pass!=='' && this.state.repeat_new_pass!==''){

      if(this.state.pass===this.state.current_pass){
          if(this.state.new_pass===this.state.repeat_new_pass){

            this.setState({
              current_pass:this.state.new_pass
            })

              alert("Contraseña cambiada satisfactoriamente")
              console.log("Contraseña cambiada satisfactoriamente a "+this.state.new_pass);
          }
          else {

              alert("Nueva contraseña no coincide")

          }
      }else {

          alert("Contraseña actual incorrecta")

      }
    }
    else{
      alert("Completar todos los campos por favor." )
    }
  }
  update_input_pass(event)
  {
    let {value,name}=event.target;
    this.setState({
      [name]:value

    })


  }

  render(){

      return(
        <div className="container">
          <div className="arrow p-2 flex-shrink-1  "><i className="fas fa-angle-down  " data-toggle="collapse" data-target="#collapsepass" aria-expanded="true" >  </i></div>

          <div className="row space_lines">
              <div className="text-left">
                  <h5>Cambiar contraseña</h5>
                  <h6>Crea una contraseña unica para poder proteger tu cuenta</h6>
              </div>
          </div>
          <div className="collapse show " id="collapsepass">
             <div  className=" space_lines col-7 ">
                <div className="row space_lines">
                   <input  name="pass"     onChange={evento=>this.update_input_pass(evento)}  type="password"  placeholder="Contraseña actual" required="required"   className="form-control" />
                </div>
                <div className=" row space_lines">
                   <input   name="new_pass"   onChange={evento=>this.update_input_pass(evento)}  type="password"   placeholder="Contraseña nueva" required="required"   className="form-control"    />
                </div>
                <div className="row space_lines">
                   <input   name="repeat_new_pass"    onChange={evento=>this.update_input_pass(evento)} type="password" placeholder="Vuelva a escribir su nueva Contraseña" required="required" className="form-control"/>
                </div>
                <button className="space_lines btn btn-primary"  onClick={this.save_new_pass} size="lg" color="success" >
                     Guardar
                </button>
             </div>
        </div>

        </div>
      )

  }
}

export default Management_password;
