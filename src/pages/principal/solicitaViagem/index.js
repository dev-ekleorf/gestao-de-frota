import logo from './logo.png';
import './index.css';
import {Redirect} from 'react-router-dom';
import ButtonLink from '../../../componentes/Button';


function solicitaViagem(){

    return (
      <nav className="solicitaViagem">
        
        <body className="App-body">
        
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Gestão de Frota - UFSM
          </p>

          <form>
          <ButtonLink as="Link" className="ButtonLink" href=""><input className="Button-menu" type="submit" value="Transporte de Passageiro"/></ButtonLink><br />
          <ButtonLink as="Link" className="ButtonLink" href=""><input className="Button-menu" type="submit" value="Transporte de Carga"/></ButtonLink><br />
         </form>


        </body>
  
      </nav>
  
    );
  }

export default solicitaViagem;

