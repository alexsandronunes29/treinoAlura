import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import Formulario from "./components/Formulario";
import "./assets/App.css";


 class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <Formulario />
        <ListaDeNotas />
      </section>
    );
  }
}
export default App;
