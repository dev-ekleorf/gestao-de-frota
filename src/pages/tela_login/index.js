import logo from './logo.png';
import './index.css';
import {Redirect} from 'react-router-dom';
import ButtonLink from '../../componentes/Button';
import api from '../../api';




function tela_login() {
  const handlerLoginEmail = () => {
    let result = api.loginEmail();

    alert("chegou aqui mesmo!")
    if(result){
      alert("chegou aqui!")
      Redirect('/principal')
    }
    else{
      alert("erro!")
    }
  }


  return (
    <nav className="tela_login">
      
      <body className="App-body">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gestão de Frota - UFSM
        </p>

         <form>
            <input className="Name-login"type="text" name="name" placeholder="Usuário"/> <br />
        
            <input className="Senha-login" type="password" name="password" placeholder="Senha"/> <br />
         
            <input className="Button-login" type="submit" value="Entrar" onClick={handlerLoginEmail}/>
         </form>
             <ButtonLink as="Link" className="ButtonLink" href="/cadastro">Cadastre-se</ButtonLink>

      </body>

    </nav>

  );
}

export default tela_login;
