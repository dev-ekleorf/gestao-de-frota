import React, {useState} from 'react';
import logo from './logo.png';
import './index.css';
import ButtonLink from '../../../componentes/Button';

import Show from './icons/show.svg';
import Hide from './icons/hide.svg';


function Cadastro() {

  const [icon, setIcon] = useState(Show);
  const [type, setType] = useState('password');
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibility() {
    if(isVisible === false) {
      setIcon(Hide);
      setType('text');
      setIsVisible(true);
    } else {
      setIcon(Show)
      setType('password')
      setIsVisible(false);
    }
  }

  return (

    <div className="App">
      
      <body className="App-body">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div className="textGestao">
          Gestão de Frota - UFSM
          </div>
        </p>

         <form>
         
            <input className="Name-login"type="text" name="name" placeholder="Nome do Usuário"/> <br />
            <input className="Name-login"type="text" name="fone" placeholder="Celular"/> <br />
            <input className="Name-login"type="text" name="siape" placeholder="Siape"/> <br />
            <input className="Name-login"type="text" name="email" placeholder="@email"/> <br />

            <select className="form-departamento" name="departamento">
              <option value="Selecione Departamento"> -------------- Selecione o Departamento --------------</option>
              <option value="Departamento 1">Departamento 1</option>
              <option value="Departamento 2">Departamento 2</option>
              <option value="Departamento 3">Departamento 3</option>
              <option value="Departamento 4">Departamento 4</option>
            </select><br />
            <select className="form-usuario" name="usuario">
              <option value="Selecione Departamento"> ------------------- Selecione o Usuário -------------------</option>
              <option value="user1">Usuário Padrão</option>
              <option value="user2">Chefe de Departamento</option>
              <option value="user3">Chefe de Núcleo ADM</option>
              <option value="user4">Chefe de Núcleo de Transporte</option>
            </select><br />
            <input className="formSenha1" type={type} name="password" minlength="8" placeholder="Senha"/> <br />
            <img src={icon} className="icon1" onClick={handleVisibility} alt="senha"/> <br />
            <input className="formSenha2" type={type} name="password" minlength="8" placeholder="Confirme sua senha"/> <br />
            <img src={icon} className="icon2" onClick={handleVisibility} alt="confirme"/> <br />
         </form><br />           
         <ButtonLink as="Link" className="ButtonLink" href="/principal"><input className="Button-menu" type="submit" value="Cadastrar Usuário"/></ButtonLink>

      </body>

    </div>

  );
}

export default Cadastro;