import React, { useState } from 'react';
import logo from './logo.png';
import './index.css';
import ButtonLink from '../../../componentes/Button';
import Select from 'react-select';
import firebase from 'firebase';

const motoristasCadastrados = [];

    firebase.firestore().collection("motoristas")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            motoristasCadastrados.push({value: doc.id, label: doc.data().nome});
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    console.log('[motoristas]',motoristasCadastrados);


  const departamentosCadastrados = [];

    firebase.firestore().collection("departamentos")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            departamentosCadastrados.push({value: doc.id, label: doc.data().depnome});
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    console.log('[departamentos]',departamentosCadastrados);

    const categoriasCadastradas = [];

    firebase.firestore().collection("categoriasmotorista")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            categoriasCadastradas.push({value: doc.id, label: doc.data().catmotorista});
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    console.log('[categoriasCadastradas]',categoriasCadastradas);

    function selecionarTexto(elementId, cod) {
      var elt = document.getElementById(elementId);
      var opt = elt.getElementsByTagName("option");
      for(var i = 0; i < opt.length; i++) {
        if(opt[i].value === cod) {
          elt.value = cod;
        }
      }
    return null;
  }

    const handleChange = selectedOption => {
      console.log(`Option selected:`, selectedOption);
      const motoristaSelecionado = firebase.firestore().collection("motoristas").doc(selectedOption.value).onSnapshot(function(doc){

        document.getElementById('nomeMotorista').value = doc.data().nome;
        selecionarTexto('CategoriaCNH',doc.data().categoriaCNH);
        document.getElementById('catMotoristas').value = doc.data().categoriaMotorista;
        document.getElementById('celular').value = doc.data().celular;
        document.getElementById('cnh').value = doc.data().cnh;
        document.getElementById('cpf').value = doc.data().cpf;
        selecionarTexto('departamentos',doc.data().departamento);
        document.getElementById('email').value = doc.data().email;
        document.getElementById('matricula').value = doc.data().matricula;
        document.getElementById('rg').value = doc.data().rg;
        document.getElementById('vencimentoCNH').value = doc.data().vencimentoCNH;
        console.log(motoristaSelecionado);
      });
      
    };


    function limparCampos(){
      document.getElementById('nomeMotorista').value = '';
      selecionarTexto('CategoriaCNH','Selecione');
      selecionarTexto('catMotoristas','Selecione');
      document.getElementById('celular').value = '';
      document.getElementById('cnh').value = '';
      document.getElementById('cpf').value = '';
      selecionarTexto('departamentos','Selecione');
      document.getElementById('email').value = '';
      document.getElementById('matricula').value = '';
      document.getElementById('rg').value = '';
      document.getElementById('vencimentoCNH').value = '';
      
    }


function Menu(){
  const [mostraCampos, setMostraCampos] = useState('txt');
    return (
        
      
        <body className="App-body">
        
          <img src={logo} className="App-logo" alt="logo" />
           
           <form>
           <label className={mostraCampos}>Selecione um motorista para editar: </label>
              <Select id="motoristas" name="Motoristas" className={mostraCampos}  options={motoristasCadastrados} onChange={handleChange}></Select>
              <label className="txt"> Nome do Motorista: </label>
                <input id="nomeMotorista" className="Name-form" type="text" placeholder="Nome Completo"/>

              <label className="txt"> Matrícula: </label>
                <input className="Name-form" type="text" placeholder="" id="matricula"/>

              <label className="txt"> RG: </label>
               <input className="Name-form" type="text" placeholder="Somente números" id="rg"/>

              <label className="txt"> CPF: </label>
                <input className="Name-form" type="text" placeholder="Somente números" id="cpf"/>

              <label className="txt"> Celular: </label>
                <input className="Name-form" type="text" placeholder="Somente números" id="celular"/>

              <label className="txt"> Email: </label>
                <input className="Name-form" type="text" placeholder="nome@email.com.br" id="email"/>

              <label className="txt"> Escolha o Departamento: </label>
              <select id="departamentos" name="Departamentos">
                {departamentosCadastrados.map((departamento) => (
                <option value={departamento.id}>{departamento.label}</option>
                ))}
              </select>

              <label className="txt"> Número da CNH: </label>
                <input className="Name-form" type="text" placeholder="Somente números" id="cnh"/>

              <label className="txt"> Vencimento da CNH: </label>
                 <input className="Name-form" type="date" placeholder="Vencimento da CNH" id="vencimentoCNH"/>

              <label className="txt"> Categoria da CNH: </label>
              <select id="CategoriaCNH" name="CategoriaCNH">
                <option value="Selecione">------------------------- Categoria  -------------------------</option>
                <option value="A">A</option>   
                <option value="B">B</option> 
                <option value="AB">AB</option> 
                <option value="C">C</option> 
                <option value="D">D</option> 
                <option value="E">E</option> 
             </select><br />

             <label className="txt"> Categoria de Motorista: </label>
             <select id="catMotoristas" name="Categoria Motoristas">
              <option value="Selecione">Selecione</option>
                {categoriasCadastradas.map((categoria) => (
                <option value={categoria.id}>{categoria.label}</option>
                ))}
              </select>
           </form>
           
           <button
              type="submit" 
              id="buttonNovoMotorista"
              className="Button-login" 
              value="Novo Motorista" 
              onClick={function handlerAdicionar(){
                setMostraCampos('hidden');
                document.getElementById('buttonNovoMotorista').style.display='none';
                limparCampos();
                console.log('[mostraCampos hidden] = ',{mostraCampos});
              }}>
              Novo Motorista
            </button>
           
           <button
              type="submit" 
              className="Button-login" 
              value="Salvar" 
              onClick={function handlerCadastrar(){
                console.log('[mostraCampos] = ',{mostraCampos});
                if({mostraCampos} == "hidden"){
                  alert("Atualizar!");
                }
                else {
                  alert("Novo!");
                }
          
                firebase.firestore().collection("motoristas").add({
                  nome: document.getElementById('nomeMotorista').value,
                  categoriaCNH: document.getElementById('CategoriaCNH').value,
                  catMotorista: document.getElementById('catMotoristas').value,
                  celular: document.getElementById('celular').value,
                  cnh: document.getElementById('cnh').value,
                  cpf: document.getElementById('cpf').value,
                  departamento: document.getElementById('departamentos').value,
                  email: document.getElementById('email').value,
                  matricula: document.getElementById('matricula').value,
                  rg: document.getElementById('rg').value,
                  vencimentoCNH: document.getElementById('vencimentoCNH').value
                }
                )
              }
            
            }>
              Salvar
           </button>

          <div className="Sair">
          <ButtonLink as="Link" className="ButtonLinkSAIR" href="/principal"><input className="Button-menu" type="submit" value="Voltar"/></ButtonLink>
          </div>

        </body>
  
    );
  }
  
  export default Menu;