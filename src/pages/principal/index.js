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

    <nav className="principal">
      
      <body className="App-body">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gestão de Frota - UFSM
        </p>

         
            <ButtonLink as="Link" className="ButtonLink" href="/solicitaViagem"><input className="Button-menu" type="submit" value="Solicitar Viagem"/></ButtonLink>
        
        
            <ButtonLink as="Link" className="ButtonLink" href="/cadastroMotorista"><input className="Button-menu" type="submit" value="Cadastrar Motorista"/></ButtonLink>
            <ButtonLink as="Link" className="ButtonLink" href="/parametrosMotorista"><input className="Button-menu" type="submit" value="Parâmetros - Motorista"/></ButtonLink>
            <ButtonLink as="Link" className="ButtonLink" href="/cadastroVeiculo"><input className="Button-menu" type="submit" value="Cadastrar Veículo"/></ButtonLink>
            <ButtonLink as="Link" className="ButtonLink" href="/cadastroUsuario"><input className="Button-menu" type="submit" value="Cadastrar Usuário"/></ButtonLink>
            <ButtonLink as="Link" className="ButtonLink" href="/cadastroDepartamento"><input className="Button-menu" type="submit" value="Cadastrar Departamento"/></ButtonLink><br />
            <button type="submit" className="ButtonLink" value="Entrar" onClick={handlerSair}>Sair</button>
         
         
         
      </body>
    </nav>

  );
});


