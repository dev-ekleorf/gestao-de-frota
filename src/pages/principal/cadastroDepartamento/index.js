import logo from './logo.png';
import React, { useState } from 'react';
import './index.css';
import firebase from 'firebase';
import ButtonLink from '../../../componentes/Button';
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
            <label className="txt"> Departamentos Cadastrados: </label>
            <Select id="CategoriaMotorista" name="CategoriaMotorista" className={mostraCampos}  options={categoriasCadastradas} onChange={handleChange}></Select>
             <select id="CategoriaCNH" name="CategoriaCNH">
               <option value="Selecione">-------------------- Departamentos ---------------------</option>
               <option value="c1">Departamento 1</option>   
               <option value="c2">Departamento 2</option> 
               <option value="c3">Departamento 3</option> 
               <option value="c4">Departamento 4</option> 
               <option value="c5">Departamento 5</option> 
             </select>
          
           <label className="txt"> Nome do Departamento: </label>
              <input className="Name-form" type="text" placeholder=""/>
           <label className="txt"> Selecione o Campus: </label>
              <select id="CategoriaCNH" name="CategoriaCNH">
                <option value="Selecione">-------------------------- Campus -------------------------</option>
                <option value="c1">Campus 1</option>   
                <option value="c2">Campus 2</option> 
                <option value="c3">Campus 3</option> 
                <option value="c4">Campus 4</option> 
                <option value="c5">Campus 5</option> 
             </select><br />
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
          
                firebase.firestore().collection("categoriamotorista").add({
                  catmotorista: document.getElementById('catmotorista').value,
                  valorhora: document.getElementById('valorhora').value,
                  valorlanche: document.getElementById('valorlanche').value,
                  valorpernoite: document.getElementById('valorpernoite').value,
                  valorrefeicao: document.getElementById('valorrefeicao').value,
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