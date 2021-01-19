import logo from './logo.png';
import './index.css';
import {Redirect} from 'react-router-dom';
import ButtonLink from '../../../componentes/Button';


function menu(){

    return (
        
        <body className="App-body">
        
          <img src={logo} className="App-logo" alt="logo" />
           
          <div>
           <label className="txt">Motoristas Cadastrados: </label>
           <select id="departamento" name="Cdepartamento">
                <option value="Selecione">------------------------- Selecione -------------------------</option>
                <option value="1">Motorista 1</option>   
                <option value="2">Motorista  2</option> 
                <option value="3">Motorista  3</option> 
                <option value="4">Motorista  4</option> 
                <option value="5">Motorista  5</option>
              </select>
          </div>

          <table > 
            <tr>
          <th><div className="Save">
          <ButtonLink as="Link" className="ButtonLinkSALVAR" href="/principal"><input className="Button-menu" type="submit" value="Salvar"/></ButtonLink>
          </div></th>
          <th>
          <div  className="Edit">
          <ButtonLink as="Link" className="ButtonLinkEDITAR" href="/principal"><input className="Button-menu" type="submit" value="Editar"/></ButtonLink>
          </div>
          </th>
           </tr>
          </table><br />

           <form>
              <label className="txt"> Nome do Motorista: </label>
                <input className="Name-form" type="text" placeholder="Nome Completo"/>

              <label className="txt"> Matrícula: </label>
                <input className="Name-form" type="text" placeholder=""/>

              <label className="txt"> RG: </label>
               <input className="Name-form" type="text" placeholder="Somente números"/>

              <label className="txt"> CPF: </label>
                <input className="Name-form" type="text" placeholder="Somente números"/>

              <label className="txt"> Celular: </label>
                <input className="Name-form" type="text" placeholder="Somente números"/>

              <label className="txt"> Email: </label>
                <input className="Name-form" type="text" placeholder="nome@email.com.br"/>

              <label className="txt"> Escolha o Departamento: </label>
              <select id="departamento" name="Cdepartamento">
                <option value="Selecione">---------------------- Departamento ----------------------</option>
                <option value="Departamento 1">Departamento 1</option>   
                <option value="Departamento 2">Departamento 2</option> 
                <option value="Departamento 3">Departamento 3</option> 
                <option value="Departamento 4">Departamento 4</option> 
                <option value="Departamento 5">Departamento 5</option>
              </select><br />

              <label className="txt"> Número da CNH: </label>
                <input className="Name-form" type="text" placeholder="Somente números"/>

              <label className="txt"> Vencimento da CNH: </label>
                 <input className="Name-form" type="date" placeholder="Vencimento da CNH"/>

              <label className="txt"> Categoria da CNH: </label>
              <select id="CategoriaCNH" name="CategoriaCNH">
                <option value="Selecione">------------------------- Categoria  -------------------------</option>
                <option value="A">A</option>   
                <option value="B">B</option> 
                <option value="C">C</option> 
                <option value="D">D</option> 
                <option value="E">E</option> 
             </select><br />

             <label className="txt"> Categoria de Motorista </label>
             <select id="CategoriaMotorista" name="CategoriaMotorista">
                <option value="Selecione">-------------------------- Selecione ------------------------</option>
                <option value="M1">01 - Motorista de Veículos Coletivos</option>   
                <option value="M2">02 - Motoristas de Veículos Leves e Camionetas</option> 
                <option value="M3">03 - Motorista de Veículos de Carga</option> 
                <option value="M4">04 - Motorista de Coleta/Entrega</option> 
                <option value="M5">05 - Motorista de Ambulância</option>
             </select>
           </form>
           
           <ButtonLink as="Link" className="ButtonLink" href="/principal"><input className="Button-menu" type="submit" value="Cadastrar Motorista"/></ButtonLink>

          <div className="Sair">
          <ButtonLink as="Link" className="ButtonLinkSAIR" href="/principal"><input className="Button-menu" type="submit" value="Voltar"/></ButtonLink>
          </div>

        </body>
  
    );
  }
  
  export default menu;