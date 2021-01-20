import logo from './logo.png';
import './index.css';
import React,{ useCallback,useContext} from 'react';
import {withRouter,Redirect} from 'react-router-dom';
import ButtonLink from '../../componentes/Button';
import {authConfig} from '../../auth/config';
import {AuthContext} from '../../auth/AuthContext';

export const principal = withRouter(({history}) => {
  const handlerSair = useCallback(
    async (event) => {
      event.preventDefault();
      
      try{
        await authConfig
              .auth().signOut();
            
        history.push('/'); 
      }catch(error){
        console.log(error);
      }
    },
    [history],
  );


  document.title = 'Gestão de Frota - principal'
  document.logo=''
  return(
      
      <body className="App-body">
      
        <img src={logo} className="App-logo" alt="logo" />

         
            <ButtonLink as="Link" className="ButtonLink" href="/solicitaViagem"><input className="Button-menu" type="submit" value="Solicitar Viagem"/></ButtonLink>
            <ButtonLink as="Link" className="ButtonLink" href="/cadastroMotorista"><input className="Button-menu" type="submit" value="Motoristas"/></ButtonLink>
            <ButtonLink as="Link" className="ButtonLink" href="/parametrosMotorista"><input className="Button-menu" type="submit" value="Categoria - Motoristas"/></ButtonLink>
            <ButtonLink as="Link" className="ButtonLink" href="/cadastroVeiculo"><input className="Button-menu" type="submit" value="Veículos"/></ButtonLink>
            <ButtonLink as="Link" className="ButtonLink" href="/cadastroUsuario"><input className="Button-menu" type="submit" value="Cadastrar Usuário"/></ButtonLink>
            <ButtonLink as="Link" className="ButtonLink" href="/cadastroDepartamento"><input className="Button-menu" type="submit" value="Departamentos"/></ButtonLink><br />
            

            <div className="Sair">
          <ButtonLink as="Link" className="ButtonLinkSAIR" href="/principal"><input className="Button-menu" type="submit" onClick={handlerSair} value="Sair"/></ButtonLink>
          </div>

         
         
      </body>

  );
});


