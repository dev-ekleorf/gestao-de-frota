import logo from './logo.png';
import './index.css';
import {Redirect} from 'react-router-dom';
import ButtonLink from '../../../componentes/Button';


function solicitaViagem(){

    return (
        
        <body className="App-body">
        
          <img src={logo} className="App-logo" alt="logo" />

          
          <ButtonLink as="Link" className="ButtonLink" href=""><input className="Button-menu" type="submit" value="Transporte de Passageiro"/></ButtonLink><br />
          <ButtonLink as="Link" className="ButtonLink" href=""><input className="Button-menu" type="submit" value="Transporte de Carga"/></ButtonLink><br />
         
         <div className="Sair">
          <ButtonLink as="Link" className="ButtonLinkSAIR" href="/principal"><input className="Button-menu" type="submit" value="Voltar"/></ButtonLink>
          </div>

        </body>
  
    );
  }

export default solicitaViagem;

