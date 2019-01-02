import React, { Component } from 'react';
import '../App.css';
import Verify_pass from './verify_pass'






class Management_mail extends Component{
  constructor(props) {
    super(props);
    this.addMail=this.addMail.bind(this);
    this.func=this.func.bind(this);
    this.update_new_mail=this.update_new_mail.bind(this);
    this.delete_mail=this.delete_mail.bind(this);
    this.update_main_mail=this.update_main_mail.bind(this);
    this.call_verify=this.call_verify.bind(this);
    this.show_verify=this.show_verify.bind(this);

    this.state={
      mails:  props.mails,
      password:props.password,
      new_mail:'',
      verify:false


    };

  }

  addMail(){
            let email= {
               "mail":this.state.new_mail,
               "validate":false,
               "main_mail":false
             }
             this.setState({mails:[...this.state.mails,email]});
             this.setState({verify:false});
             console.log("Agrego nuevo mail "+email.mail);


  }

  show_verify(name_action){
    if(name_action==="add"){

      if(this.state.new_mail!==''){
          this.setState({verify:true})
      }
      else{
        alert("Escribir el nuevo correo electronico.")
      }

    }
    if(name_action==="cancel"){
       this.setState({verify:false})
    }

  }

  call_verify()
  {

             return   this.state.verify===true ?  <Verify_pass password={this.state.password}  function_={this.addMail} show_verify={this.show_verify}/>
                                               :  <div></div>

  }



  update_new_mail(evento){
    this.setState( {new_mail:evento.target.value});
  }

  delete_mail(pos_delete){

    this.setState( {mails :[ ...this.state.mails.filter( (item, index) => index !== pos_delete)]  });
    console.log("Elimino correo "+ this.state.mails[pos_delete].mail);

  }

  update_main_mail(pos_mail){

    let mails_tmp=this.state.mails;
    mails_tmp=mails_tmp.map((email,i)=>{
          if(email.main_mail===true)
          {
            email.main_mail=false;
          }
          return email;
    })
    mails_tmp[pos_mail].main_mail=true;
    this.setState({mails:mails_tmp});
    console.log("Cambio correo principal a"+ mails_tmp[pos_mail].mail);


  }




  func(){
    alert("sin función");
  }

  render(){

    let mails = this.state.mails.map((email,i)=>{

      return(
        <div className="container"  key={i} >
            <div className="row space_lines text-right" >
                  <p  className="col text-left" > {email.mail}</p>
                  {email.validate === false
                    ?<div className="col"  >

                      <a href="#container_mails" className="col alert-link" onClick={this.func}>Reenviar informatión     </a>
                      <a href="#container_mails" className="col alert-link" onClick={this.delete_mail.bind(this,i)}> Eliminar  </a>
                     </div>
                    :   email.main_mail===true
                        ?<div className="col">
                         Correo principal
                        </div>
                        :<div className="col">

                          <a href="#container_mails" className="col alert-link" onClick={this.update_main_mail.bind(this,i)}>Seleccionar como principal     </a>
                          <a href="#container_mails" className="col alert-link" onClick={this.delete_mail.bind(this,i) }> Eliminar  </a>
                         </div> }

             </div>
        </div>
      )
    })

    return(
      <div className="container" id="container_mails">

          {/* header inicio  de sesion y seguridad */}
        <div  className="row space_lines ">
          <div className="arrow p-2 flex-shrink-1  "><i className="fas fa-angle-down  " data-toggle="collapse" data-target="#collapsemails" aria-expanded="true" >  </i></div>

          <div className="text-left ">
              <h5>Inicio de sesión y seguridad</h5>
                <h6>Añade o elimina direcciones de correo electrónico en tu cuenta</h6>
          </div>

        </div>
          {/*  every mails render */}
            <div className="collapse show " id="collapsemails">
                  <div>{mails}</div>
                   {/* form add   new mail */}
                    <div className="input-group">
                       <input type="text" name="mail" onChange={evento=>this.update_new_mail(evento)} className="form-control " placeholder="Ingresa tu correo electrónico"   aria-describedby="button-addon4"/>
                       <div className="input-group-append" id="button-addon4">
                            <button className="btn btn-primary" onClick={this.show_verify.bind(this,"add") }>Enviar verificación</button>
                            <button className="btn btn-link" onClick={this.show_verify.bind(this,"cancel") }>Cancelar</button>
                        </div>
                    </div>

                    {this.call_verify()}
            </div>
      </div>
    )

  }
}

export default Management_mail;
