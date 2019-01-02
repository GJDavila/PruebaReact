import React, { Component } from 'react';
import Verify_phone from './verify_phone'
import '../App.css';



class Management_phone extends Component{
  constructor(props) {
    super(props);
    this.addPhone=this.addPhone.bind(this);
    this.func=this.func.bind(this);
    this.update_new_phone=this.update_new_phone.bind(this);
    this.delete_phone=this.delete_phone.bind(this);
    this.update_main_phone=this.update_main_phone.bind(this);
    this.update_region=this.update_region.bind(this);
    this.call_verify=this.call_verify.bind(this);
    this.show_verify=this.show_verify.bind(this);
    this.state={
      cellphones:props.cellphones,
      new_cellphone:'',
      region:"PE+ 51",
      password:props.password,
      verify:false
    }

  }

  addPhone(){

      let phone= {
        "number":this.state.new_cellphone,
        "validate":false,
        "main_phone":false,
        "region":this.state.region
      }
       this.setState({cellphones:[...this.state.cellphones,phone]});
       this.setState({verify:false});
       console.log("Agrego nuevo cellphone "+phone.number);
  }



  show_verify(name_action){
    if(name_action==="add"){

      if(this.state.new_cellphone!==''){
          this.setState({verify:true})
      }
      else{
        alert("Escribir el nuevo número telefonico.")
      }

    }
    if(name_action==="cancel"){
       this.setState({verify:false})
    }

  }

  call_verify()
  {

             return   this.state.verify===true ?  <Verify_phone password={this.state.password}  function_={this.addPhone} show_verify={this.show_verify}/>
                                               :  <div></div>

  }






  update_new_phone(evento){
    this.setState({new_cellphone:evento.target.value});
  }

  update_region(evento){

    this.setState({region:evento.target.value});

  }

  delete_phone(pos_delete){

    this.setState( {cellphones :[ ...this.state.cellphones.filter( (item, index) => index !== pos_delete)]  });
    console.log("Elimino cellphone "+this.state.cellphones[pos_delete].number);

  }

  update_main_phone(pos_phone){


    let phones_tmp=this.state.cellphones;
    phones_tmp=phones_tmp.map((phone,i)=>{
          if(phone.main_phone===true)
          {
            phone.main_phone=false;
          }
          return phone;
    })
    phones_tmp[pos_phone].main_phone=true;
    this.setState({cellphones:phones_tmp});
    console.log("Cambio mail principal a"+ phones_tmp[pos_phone].number);
  }

  func(){
    alert("sin función");
  }

  render(){

    let phones = this.state.cellphones.map((phone,i)=>{
      return(

        <div className="container"  key={i} >
              <div className="row space_lines text-right ">
                   <p  className="col text-left" >{phone.region} {phone.number}</p>
                   {phone.validate === false
                    ?<div className="col "  >

                        <a href="#container_phone" className="col alert-link" onClick={this.func}>Reenviar informatión  </a>
                        <a href="#container_phone" className="col alert-link" onClick={this.delete_phone.bind(this,i)}>Eliminar  </a>
                       </div>
                    :   phone.main_phone===true
                          ?<div className="col">
                           Número principal
                          </div>
                          :<div className="col">

                            <a href="#container_phone" className="col alert-link" onClick={this.update_main_phone.bind(this,i)}>Establecer como principal  </a>
                            <a href="#container_phone" className="col alert-link" onClick={this.delete_phone.bind(this,i)}>Eliminar  </a>
                           </div> }


              </div>
          </div>


      )
    })

    return(
      <div className="container" id="container_phone">
        <div  className="row space_lines">
          <div className="arrow p-2 flex-shrink-1  "><i className="fas fa-angle-down  " data-toggle="collapse" data-target="#collapsephone" aria-expanded="true" >  </i></div>

          <div className="text-left ">
              <h5>Números de celular</h5>
              <h6>Añade un número de celular para hacer mas segura tu cuenta</h6>
          </div>
        </div>
        <div className="collapse show " id="collapsephone">
            <div>{phones }</div>



            <div className="row">
               <div className="col">
                 <select className="custom-select" onChange={evento=>this.update_region(evento)} >
                   <option value="PE+ 51">Perú</option>
                   <option value="CH+ 55">Chile</option>
                   <option value="BR+ 56">Brasil</option>
                 </select>
               </div>
               <div className="col-5">
                   <input type="number" name="phone" onChange={evento=>this.update_new_phone(evento)}  className="form-control"    aria-describedby="button-addon4"/>
               </div>
               <div className="col" id="button-addon4">
                    <button className="btn btn-primary"  onClick={this.show_verify.bind(this,"add") }>Enviar verificación</button>
                </div>
               <div className="col" id="button-addon4">
                    <button className="btn btn-link" onClick={this.show_verify.bind(this,"cancel") }>Cancelar</button>
                </div>
            </div>
            {this.call_verify()}

        </div>
      </div>
    )

  }
}

export default Management_phone;
