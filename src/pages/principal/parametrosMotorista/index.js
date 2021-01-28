import React, { useState } from 'react';
import logo from './logo.png';
import './index.css';
import ButtonLink from '../../../componentes/Button';
import firebase from 'firebase';
import Select from 'react-select';

const categoriasCadastradas = [];

    firebase.firestore().collection("categoriasmotorista")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
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

    function limparCampos(){
      document.getElementById('catmotorista').value = '';
      document.getElementById('valorhora').value = '';
      document.getElementById('valorlanche').value = '';
      document.getElementById('valorpernoite').value = '';
      document.getElementById('valorrefeicao').value = '';
    }

    const handleChange = selectedOption => {
      console.log(`Option selected:`, selectedOption);
      const categoriaSelecionada = firebase.firestore().collection("categoriasmotorista").doc(selectedOption.value).onSnapshot(function(doc){

        document.getElementById('catmotorista').value = doc.data().catmotorista;
        document.getElementById('valorhora').value = doc.data().valorhora;
        document.getElementById('valorlanche').value = doc.data().valorlanche;
        document.getElementById('valorpernoite').value = doc.data().valorpernoite;
        document.getElementById('valorrefeicao').value = doc.data().valorrefeicao;
        console.log(categoriaSelecionada);
      });
      
    };


function Menu(){
   const [mostraCampos, setMostraCampos] = useState('txt');
    return (
        
        <body className="App-body">
        
          <img src={logo} className="App-logo" alt="logo" />
  
          <form>
          
          <label className={mostraCampos}> Selecione uma Categoria de Motorista: </label>
          <Select id="CategoriaMotorista" name="CategoriaMotorista" className={mostraCampos}  options={categoriasCadastradas} onChange={handleChange}></Select>
             
            <label className="txt">Nome categoria: </label>
              <input className="Name-form" type="text" placeholder="Digite a Categoria" id="catmotorista"/>
         
           <label className="txt">Valor da hora trabalhada: </label>
              <input className="Name-form" type="text" placeholder="" id="valorhora"/>
           <label className="txt">Valor do Café: </label>
              <input className="Name-form" type="text" placeholder="" id="valorcafe"/>
           <label className="txt">Valor de Almoco: </label>
              <input className="Name-form" type="text" placeholder="" id="valoralmoco" />
           <label className="txt">Valor de Lanche: </label>
              <input className="Name-form" type="text" placeholder="" id="valorlanche"/>
           <label className="txt">Valor de Janta: </label>
              <input className="Name-form" type="text" placeholder="" id="valorjanta"/>
           <label className="txt">Valor de Pernoite: </label>
              <input className="Name-form" type="text" placeholder=""id="valorpernoite"/>
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
          
                firebase.firestore().collection("categoriasmotorista").add({
                  catmotorista: document.getElementById('catmotorista').value,
                  valorhora: document.getElementById('valorhora').value,
                  valorcafe: document.getElementById('valorcafe').value,
                  valoralmoco: document.getElementById('valoralmoco').value,
                  valorlanche: document.getElementById('valorlanche').value,
                  valorpernoite: document.getElementById('valorpernoite').value,
                  valorjanta: document.getElementById('valorjanta').value,
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