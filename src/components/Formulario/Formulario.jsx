import React, { Component } from 'react';
import "./style.css";
 class Formulario extends Component{
  render() {
    return (
      <form className="form-cadastro">

        <input type="text" placeholder="Título" 
        className="form-cadastro_input"/>

        <textarea 
        rows={15}
        placeholder="Escreva sua nota" 
        className="form-cadastro_input"/>

        <button className="form-ccadstro_input form-cadastro_submit">Criar nota</button>
      </form>
    );
  }
}
export default Formulario;