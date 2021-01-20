import logo from './logo.png';
import './index.css';
import {Redirect} from 'react-router-dom';
import ButtonLink from '../../../componentes/Button';


function menu(){

    return (
        
        <body className="App-body">
        
          <img src={logo} className="App-logo" alt="logo" />

          <div>
           <label className="txt">Veículos Cadastrados: </label>
           <select id="tipo" name="tipo">
                <option value="Selecione">------------------------- Selecione -------------------------</option>
                <option value="1">Veículo 1</option>
                <option value="2">Veículo 2</option>   
                <option value="3">Veículo 3</option> 
                <option value="4">Veículo 4</option> 
                <option value="5">Veículo 5</option> 
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
           <label className="txt">Marca: </label>
              <input className="Name-form" type="text" placeholder="Exemplo: Fiat, Volkswagem, Renault etc"/>
           <label className="txt">Modelo: </label>
              <input className="Name-form" type="text" placeholder="Exemplo: Palio, Gol, Sandero etc"/>
           <label className="txt">Ano de Fabricação: </label>
              <input className="Name-form" type="date" placeholder=""/>
           <label className="txt">Placa do Veículo: </label>
              <input className="Name-form" type="text" placeholder="Somente Letras e Números"/>
           <label className="txt">Km do Veículo: </label>
              <input className="Name-form" type="text" placeholder="Exemplo: 20,000"/>
           <label className="txt">Selecione o tipo de Veículo: </label>
              <select id="tipo" name="tipo">
                <option value="Selecione">------------------------- Selecione -------------------------</option>
                <option value="passageiro">Veículo de Coleta/Entrega</option>
                <option value="leve">Veículo Leve</option>   
                <option value="pesada">Veículo de Carga</option> 
                <option value="coletivo">Coletivo</option> 
                <option value="coletivo">Ambulância</option> 
             </select>
          </form>
   
           <ButtonLink as="Link" className="ButtonLink" href="/principal"><input className="Button-menu" type="submit" value="Cadastrar"/></ButtonLink>
           
          <div className="Sair">
          <ButtonLink as="Link" className="ButtonLinkSAIR" href="/principal"><input className="Button-menu" type="submit" value="Voltar"/></ButtonLink>
          </div>
          
        </body>
  
    );
  }
  
  export default menu;