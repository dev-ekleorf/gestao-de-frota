import logo from './logo.png';
import './index.css';
import React,{ useCallback,useContext} from 'react';
import {withRouter,Redirect} from 'react-router-dom';
import ButtonLink from '../../componentes/Button';
import {authConfig} from '../../auth/config';
import {AuthContext} from '../../auth/AuthContext';

export const tela_login = withRouter(({history}) => {
  const handlerLoginEmail = useCallback(
    async (event) => {
      event.preventDefault();
      //console.log(event.target.email);
      //const { email, senha } = event.target.elements;
      //console.log(email);
      var email = document.getElementById('email').value;
      var senha = document.getElementById('senha').value;
      console.log(email,senha);
      try{
        await authConfig
              .auth()
              .signInWithEmailAndPassword(email,senha);
        history.push('/principal'); 
      }catch(error){
        console.log(error);
        alert("Email Errado.");
      }
    },
    [history],
  );

  const {usuario} = useContext(AuthContext);
 
  if(usuario){
    return <Redirect to="/principal" />;
  }
  

  document.title = 'Gestão de Frota - Login'
  document.logo=''
  return(
    <nav className="tela_login">
     
      <body className="App-body">
      
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gestão de Frota - UFSM
        </p>

        
         <form onSubmit={handlerLoginEmail}>
            <input className="Name-login"type="email" id="email" name="email" placeholder="Usuário" /> <br />
          
            <input className="Senha-login" type="password" id="senha" name="senha" placeholder="Senha" /> <br />
         
            <button type="submit" className="Button-login" value="Entrar" onClick={handlerLoginEmail}>Entrar</button>
         </form>
         
          <ButtonLink as="Link" className="ButtonLink" href="/cadastro">Cadastre-se</ButtonLink>

      </body>

    </nav>

  );
});

