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
              <input className="Name-form" type="text" placeholder="Nome do Departamento"/><br />
              <select id="CategoriaCNH" name="CategoriaCNH">
                <option value="Selecione">------------------ Selecione o Campus -----------------</option>
                <option value="c1">Campus 1</option>   
                <option value="c2">Campus 2</option> 
                <option value="c3">Campus 3</option> 
                <option value="c4">Campus 4</option> 
                <option value="c5">Campus 5</option> 
             </select><br />
           </form>
           
           <ButtonLink as="Link" className="ButtonLink" href="/principal"><input className="Button-menu" type="submit" value="Cadastrar Departamento"/></ButtonLink>

        </body>
  
      </nav>
  
    );
  }
  
  export default menu;