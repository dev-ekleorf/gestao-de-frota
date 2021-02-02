import logo from './logo.png';
import React, { useState } from 'react';
import './index.css';
import firebase from 'firebase';
import ButtonLink from '../../../componentes/Button';
import Select from 'react-select';


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
    console.log('[departamentosCadastrados]',departamentosCadastrados);


    const campusCadastrados = [];

    firebase.firestore().collection("campus")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            campusCadastrados.push({value: doc.id, label: doc.data().nomecampus});
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    console.log('[campusCadastrados]',campusCadastrados);



function limparCampos(){
  document.getElementById('depnome').value = '';
  selecionarTexto('departamentos',"Selecione");
}

const handleChange = selectedOption => {
  console.log(`Option selected:`, selectedOption);
  const departamentoSelecionado = firebase.firestore().collection("departamentos").doc(selectedOption.value).onSnapshot(function(doc){

    document.getElementById('depnome').value = doc.data().depnome;
    selecionarTexto('lotacao',doc.data().lotacao);
    
    console.log(departamentoSelecionado);
  });
  
};

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

function Menu(){
  const [mostraCampos, setMostraCampos] = useState('txt');
    return (
        
        <body className="App-body">
        
          <img src={logo} className="App-logo" alt="logo" />

          

          <form>
            <label className={mostraCampos}> Departamentos Cadastrados: </label>
            <Select id="departamentos" name="depnome" className={mostraCampos}  options={departamentosCadastrados} onChange={handleChange}></Select>
            
           <label className="txt"> Nome do Departamento: </label>
              <input className="Name-form" type="text" placeholder="" id="depnome"/>
           <label className="txt"> Selecione o Campus: </label>
             <Select id="lotacao" name="Lotação" className="txt"  options={campusCadastrados} ></Select>
          </form>


          <button
              type="submit" 
              id="buttonNovoDepartamento"
              className="Button-login" 
              value="Novo Departamento" 
              onClick={function handlerAdicionar(){
                setMostraCampos('hidden');
                document.getElementById('buttonNovoDepartamento').style.display='none';
                limparCampos();
                console.log('[mostraCampos hidden] = ',{mostraCampos});
              }}>
              Novo Departamento
            </button>
           
           <button
              type="submit" 
              className="Button-login" 
              value="Salvar" 
              onClick={function handlerCadastrar(){
                console.log('[mostraCampos] = ',{mostraCampos});
                if({mostraCampos} === "hidden"){
                  alert("Atualizar!");
                }
                else {
                  alert("Novo!");
                }
          
                firebase.firestore().collection("departamentos").add({
                  depnome: document.getElementById('depnome').value,
                  
                  lotacao: document.getElementById('lotacao').id,
                  
                }
                )
                alert("Departamento cadastrado com Sucesso!");
                limparCampos();
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