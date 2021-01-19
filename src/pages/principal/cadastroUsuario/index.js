import React, {useState} from 'react';
import logo from './logo.png';
import './index.css';
import ButtonLink from '../../../componentes/Button';


function Cadastro() {


  return (
      
      <body className="App-body">
      
        <img src={logo} className="App-logo" alt="logo" />
         <form>
         <label className="txt"> Lista de Usuários: </label>
             <select id="CategoriaMotorista" name="CategoriaMotorista">
                <option value="Selecione">-------------------------- Selecione ------------------------</option>
                <option value="M1">Usuário 01</option>   
                <option value="M2">Usuário 02</option> 
                <option value="M3">Usuário 03</option> 
                <option value="M4">Usuário 04</option> 
                <option value="M5">Usuário 05</option>
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
         <label className="txt"> Nome do Usuário: </label>
            <input className="Name-form"type="text" name="name" placeholder="Nome Completo"/>
         <label className="txt">Celular: </label>
            <input className="Name-form"type="text" name="fone" placeholder="Somente números"/>
         <label className="txt">Siape </label>
            <input className="Name-form"type="text" name="siape" placeholder=""/>
         <label className="txt">Email: </label>
            <input className="Name-form"type="text" name="email" placeholder="nome@email.com.br"/>
         <label className="txt"> Selecione o Departamento: </label>
            <select className="form-departamento" name="departamento">
              <option value="Selecione Departamento"> ---------------------- Departamento ----------------------</option>
              <option value="Departamento 1">Departamento 1</option>
              <option value="Departamento 2">Departamento 2</option>
              <option value="Departamento 3">Departamento 3</option>
              <option value="Departamento 4">Departamento 4</option>
            </select>
         <label className="txt"> Selecione o Usuário: </label>
            <select className="form-usuario" name="usuario">
              <option value="Selecione Departamento"> ------------------------- Selecione -------------------------</option>
              <option value="user1">Usuário Padrão</option>
              <option value="user2">Chefe de Departamento</option>
              <option value="user3">Chefe de Núcleo ADM</option>
              <option value="user4">Chefe de Núcleo de Transporte</option>
            </select><br />
         <label className="txt"> Cadastre uma senha: </label>
            <input className="formSenha1" name="password" minlength="8" placeholder="Senha"/>
        <label className="txt"> Confirme a senha: </label>
            <input className="formSenha2" name="password" minlength="8" placeholder="Senha"/>
            
        </form>

         <ButtonLink as="Link" className="ButtonLink" href="/principal">Cadastrar Usuário</ButtonLink>

         <div className="Sair">
          <ButtonLink as="Link" className="ButtonLinkSAIR" href="/principal"><input className="Button-menu" type="submit" value="Voltar"/></ButtonLink>
          </div>
         
      </body>

  );
}

export default Cadastro;