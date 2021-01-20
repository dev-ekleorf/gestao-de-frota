import logo from './logo.png';
import './index.css';
import {Redirect} from 'react-router-dom';
import ButtonLink from '../../../componentes/Button';


function menu(){

    return (
        
        <body className="App-body">
        
          <img src={logo} className="App-logo" alt="logo" />

          

          <form>
            <label className="txt"> Departamentos Cadastrados: </label>
             <select id="CategoriaCNH" name="CategoriaCNH">
               <option value="Selecione">-------------------- Departamentos ---------------------</option>
               <option value="c1">Departamento 1</option>   
               <option value="c2">Departamento 2</option> 
               <option value="c3">Departamento 3</option> 
               <option value="c4">Departamento 4</option> 
               <option value="c5">Departamento 5</option> 
             </select>
          </form>

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
           <label className="txt"> Nome do Departamento: </label>
              <input className="Name-form" type="text" placeholder=""/>
           <label className="txt"> Selecione o Campus: </label>
              <select id="CategoriaCNH" name="CategoriaCNH">
                <option value="Selecione">-------------------------- Campus -------------------------</option>
                <option value="c1">Campus 1</option>   
                <option value="c2">Campus 2</option> 
                <option value="c3">Campus 3</option> 
                <option value="c4">Campus 4</option> 
                <option value="c5">Campus 5</option> 
             </select><br />
          </form>
          <ButtonLink as="Link" className="ButtonLink" href="/principal"><input className="Button-menu" type="submit" value="Cadastrar"/></ButtonLink>
         
          <div className="Sair">
          <ButtonLink as="Link" className="ButtonLinkSAIR" href="/principal"><input className="Button-menu" type="submit" value="Voltar"/></ButtonLink>
          </div>
          

        </body>
  
    );
  }
  
  export default menu;