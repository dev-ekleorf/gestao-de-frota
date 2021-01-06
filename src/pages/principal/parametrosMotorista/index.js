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
              <input className="Name-form" type="text" placeholder="Valor de Hora Trabalhada"/><br />
              <input className="Name-form" type="text" placeholder="Valor de Café"/><br />
              <input className="Name-form" type="text" placeholder="Valor de Almoço"/><br />
              <input className="Name-form" type="text" placeholder="Valor de Lanche"/><br />
              <input className="Name-form" type="text" placeholder="Valor de Janta"/><br />
              <input className="Name-form" type="text" placeholder="Valor de Pernoite"/><br />
           </form>
           
           <ButtonLink as="Link" className="ButtonLink" href="/principal"><input className="Button-menu" type="submit" value="Cadastrar Parâmetro de Pagamento"/></ButtonLink>

        </body>
  
      </nav>
  
    );
  }
  
  export default menu;