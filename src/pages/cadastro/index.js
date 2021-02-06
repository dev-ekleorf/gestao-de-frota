import React, {useState} from 'react';
import logo from './logo.png';
import './index.css';
import ButtonLink from '../../componentes/Button';

function Cadastro() {

  return (

      
      <body className="App-body">
      
        <img src={logo} className="App-logo" alt="logo" />
       

        <form>
          <label className="txt"> Nome: </label>
            <input className="Name-form"type="text" name="name" placeholder="Nome Completo"/>
          <label className="txt"> Celular: </label>
            <input className="Name-form"type="text" name="fone" placeholder="Somente números"/>
          <label className="txt"> Siape: </label>
            <input className="Name-form"type="text" name="siape" placeholder=""/>
          <label className="txt"> Email: </label>
            <input className="Name-form"type="text" name="email" placeholder="nome@email.com.br"/>
          <label className="txt"> Selecione o Departamento: </label>
            <select className="select-form1" name="departamento">
              <option value="Selecione Departamento"> ------------------ Departamento ----------------------</option>
              <option value="Departamento 1">Departamento 1</option>
              <option value="Departamento 2">Departamento 2</option>
              <option value="Departamento 3">Departamento 3</option>
              <option value="Departamento 4">Departamento 4</option>
            </select><br />
          <label className="txt">Digite uma Senha: </label>
            <input className="formSenha1" name="password" minlength="8" placeholder="Senha"/><br />

          <label className="txt">Confirme sua Senha: </label>
            <input className="formSenha2" name="password" minlength="8" placeholder="Senha"/>
            

            <div className="termosDeUso">
              <input type="checkbox" id="termos" name="termos"></input>
                <label for="termos" className="labelTermos">Aceito os termos de uso</label>
            </div>
           
        </form><br />     

        <ButtonLink as="Link" className="ButtonLink" href="/tela_login"><input className="Button-menu" type="submit" value="Cadastrar"/></ButtonLink>

        <div className="Sair">
          <ButtonLink as="Link" className="ButtonLinkSAIR" href="/principal"><input className="Button-menu" type="submit" value="Voltar"/></ButtonLink>
          </div> 
        
      </body>

    

  );
}

export default Cadastro;