import logo from './logo.png';
import './index.css';
import React,{useState} from 'react';
import firebase from 'firebase';
import ButtonLink from '../../../componentes/Button';
import Select from 'react-select';


const veiculosCadastrados = [];

    firebase.firestore().collection("veiculos")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            veiculosCadastrados.push({value: doc.id, label: doc.data().placa});
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    console.log('[veiculosCadastrados]',veiculosCadastrados);

    const tiposVeiculos = [];

    firebase.firestore().collection("tiposveiculo")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            tiposVeiculos.push({value: doc.id, label: doc.data().tipoveiculo});
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    console.log('[tiposVeiculos]',tiposVeiculos);



function limparCampos(){
   
   document.getElementById('placa').value ='';
   document.getElementById('kilometragem').value='';
   document.getElementById('modelo').value='';
   document.getElementById('marca').value='';
   document.getElementById('anofabricacao').value='';
   document.getElementById('tipoveiculo').value='';
 }

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
  const veiculoSelecionado = firebase.firestore().collection("veiculos").doc(selectedOption.value).onSnapshot(function(doc){

    document.getElementById('placa').value = doc.data().placa;
    document.getElementById('kilometragem').value = doc.data().kmatual;
    document.getElementById('marca').value = doc.data().marca;
    document.getElementById('modelo').value = doc.data().modelo;
    document.getElementById('tipoveiculo').value = doc.data().tipoveiculo;
    document.getElementById('anofabricacao').value = doc.data().anofabricacao;
    console.log(veiculoSelecionado);
  });
};


function CadastroVeiculo(){
   const [mostraCampos, setMostraCampos] = useState('txt');
    return (
      
        <body className="App-body">
        
          <img src={logo} className="App-logo" alt="logo" />
          <form>
           <label className={mostraCampos}>Veículos Cadastrados: </label>
             <Select id="veiculosCadastrados" name="veiculosCadastrados" className="select-form" placeholder="------------------ Selecione ------------------" options={veiculosCadastrados} onChange={handleChange}></Select><br />
         
           <label className="txt">Marca: </label>
              <input className="Name-form" type="text" placeholder="Exemplo: Fiat, Volkswagem, Renault etc" id="marca"/>
           <label className="txt">Modelo: </label>
              <input className="Name-form" type="text" placeholder="Exemplo: Palio, Gol, Sandero etc" id="modelo"/>
           <label className="txt">Ano de Fabricação: </label>
              <input className="Name-form" type="date" placeholder="" id="anofabricacao"/>
           <label className="txt">Placa do Veículo: </label>
              <input className="Name-form" type="text" placeholder="Somente Letras e Números" id="placa"/>
           <label className="txt">Km do Veículo: </label>
              <input className="Name-form" type="text" placeholder="Exemplo: 20,000" id="kilometragem"/>
           <label className="txt">Selecione o tipo de Veículo: </label>
             <Select id="tipoveiculo" name="tipoveiculo" className="select-form" placeholder="------------------ Selecione ------------------" options={tiposVeiculos}></Select><br />
          </form>
         
          <button
              type="submit" 
              id="buttonNovoVeiculo"
              className="Button-login" 
              value="Novo Veiculo" 
              onClick={function handlerAdicionar(){
                setMostraCampos('hidden');
                document.getElementById('buttonNovoVeiculo').style.display='none';
                limparCampos();
                console.log('[mostraCampos hidden] = ',{mostraCampos});
              }}>
              Novo Veiculo
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
          
                firebase.firestore().collection("veiculos").add({
                  
                  placa: document.getElementById('placa').value,
                  kmatual: document.getElementById('kilometragem').value,
                  modelo: document.getElementById('modelo').value,
                  marca: document.getElementById('marca').value,
                  anofabricacao: document.getElementById('anofabricacao').value,
                  tipoveiculo: "/tipoveiculo/"+document.getElementById('tipoveiculo').value,
                }
                )

                firebase.auth().createUserWithEmailAndPassword("teste@frota.com","teste")
               .then((user) => {
               // Signed in
               // ...
                })
                  .catch((error) => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                });

                alert("Usuário cadastrado com Sucesso!");
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
  
  export default CadastroVeiculo;