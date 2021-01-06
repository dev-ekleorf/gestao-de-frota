import logo from './logo.png';
import './index.css';
import {Redirect} from 'react-router-dom';
import ButtonLink from '../../../componentes/Button';


function menu(){

    return (
      <nav className="menu">
        
        <body className="App-body">
        
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Gestão de Frota - UFSM
          </p>
  
           <form>
              <input className="Name-form" type="text" placeholder="Nome do Motorista"/><br />
              <input className="Name-form" type="text" placeholder="Matrícula"/><br />
              <input className="Name-form" type="text" placeholder="RG"/><br />
              <input className="Name-form" type="text" placeholder="CPF"/><br />
              <input className="Name-form" type="text" placeholder="Celular"/><br />
              <input className="Name-form" type="text" placeholder="Email"/><br />
              <select id="departamento" name="Cdepartamento">
                <option value="Selecione">---------------------- Departamento ----------------------</option>
                <option value="Departamento 1">Departamento 1</option>   
                <option value="Departamento 2">Departamento 2</option> 
                <option value="Departamento 3">Departamento 3</option> 
                <option value="Departamento 4">Departamento 4</option> 
                <option value="Departamento 5">Departamento 5</option>
              </select><br />
              <input className="Name-form" type="text" placeholder="Número da CNH"/><br />
              <input className="Name-form" type="text" placeholder="Vencimento da CNH"/><br />
              <select id="CategoriaCNH" name="CategoriaCNH">
                <option value="Selecione">-------------------- Categoria da CNH -------------------</option>
                <option value="A">A</option>   
                <option value="B">B</option> 
                <option value="C">C</option> 
                <option value="D">D</option> 
                <option value="E">E</option> 
             </select><br />
             <select id="CategoriaMotorista" name="CategoriaMotorista">
                <option value="Selecione">------------------ Categoria de Motorista ---------------</option>
                <option value="M1">01 - Motorista de Veículos Coletivos</option>   
                <option value="M2">02 - Motoristas de Veículos Leves e Camionetas</option> 
                <option value="M3">03 - Motorista de Veículos de Carga</option> 
                <option value="M4">04 - Motorista de Coleta/Entrega</option> 
                <option value="M5">05 - Motorista de Ambulância</option>
             </select>
           </form>
           <ButtonLink as="Link" className="ButtonLink" href="/principal"><input className="Button-menu" type="submit" value="Cadastrar Motorista"/></ButtonLink>

        </body>
  
      </nav>
  
    );
  }
  
  export default menu;