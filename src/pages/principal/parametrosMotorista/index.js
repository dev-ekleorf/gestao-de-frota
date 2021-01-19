import logo from './logo.png';
import './index.css';
import {Redirect} from 'react-router-dom';
import ButtonLink from '../../../componentes/Button';


function menu(){

    return (
        
        <body className="App-body">
        
          <img src={logo} className="App-logo" alt="logo" />
  
          <form>
          <label className="txt">Nova categoria: </label>
              <input className="Name-form" type="text" placeholder="Adicionar nova ou consultar abaixo"/>
          <label className="txt"> Categoria de Motorista </label>
             <select id="CategoriaMotorista" name="CategoriaMotorista">
                <option value="Selecione">-------------------------- Selecione ------------------------</option>
                <option value="M1">01 - Motorista de Veículos Coletivos</option>   
                <option value="M2">02 - Motoristas de Veículos Leves e Camionetas</option> 
                <option value="M3">03 - Motorista de Veículos de Carga</option> 
                <option value="M4">04 - Motorista de Coleta/Entrega</option> 
                <option value="M5">05 - Motorista de Ambulância</option>
             </select>

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

           <label className="txt">Valor da hora trabalhada: </label>
              <input className="Name-form" type="text" placeholder=""/>
           <label className="txt">Valor do Café: </label>
              <input className="Name-form" type="text" placeholder=""/>
           <label className="txt">Valor de Almoco: </label>
              <input className="Name-form" type="text" placeholder=""/>
           <label className="txt">Valor de Lanche: </label>
              <input className="Name-form" type="text" placeholder=""/>
           <label className="txt">Valor de Janta: </label>
              <input className="Name-form" type="text" placeholder=""/>
           <label className="txt">Valor de Pernoite: </label>
              <input className="Name-form" type="text" placeholder=""/>
          </form>

          <ButtonLink as="Link" className="ButtonLink" href="/principal"><input className="Button-menu" type="submit" value="Cadastrar Categoria"/></ButtonLink>

          <div className="Sair">
          <ButtonLink as="Link" className="ButtonLinkSAIR" href="/principal"><input className="Button-menu" type="submit" value="Voltar"/></ButtonLink>
          </div>


        </body>
  
    );
  }
  
  export default menu;