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
              <input className="Name-form" type="text" placeholder="Marca (ex: Fiat, Volkswagem etc)"/><br />
              <input className="Name-form" type="text" placeholder="Modelo (ex: Palio, Gol, Onix etc)"/><br />
              <input className="Name-form" type="text" placeholder="Ano de Fabricação"/><br />
              <input className="Name-form" type="text" placeholder="Placa do Veículo"/><br />
              <input className="Name-form" type="text" placeholder="Km do Veículo"/><br />
              <select id="tipo" name="tipo">
                <option value="Selecione">------------------------- Selecione -------------------------</option>
                <option value="passageiro">Veículo de Coleta/Entrega</option>
                <option value="leve">Veículo Leve</option>   
                <option value="pesada">Veículo de Carga</option> 
                <option value="coletivo">Coletivo</option> 
                <option value="coletivo">Ambulância</option> 
             </select>
           </form>
   
           <ButtonLink as="Link" className="ButtonLink" href="/principal"><input className="Button-menu" type="submit" value="Cadastrar Veículo"/></ButtonLink>
           
        </body>
  
      </nav>
  
    );
  }
  
  export default menu;