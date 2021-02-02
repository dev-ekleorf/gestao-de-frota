import React,{useState} from 'react';
import logo from './logo.png';
import './index.css';
import ButtonLink from '../../../componentes/Button';
import Select from 'react-select';
import firebase from 'firebase';

const usuariosCadastrados = [];

    firebase.firestore().collection("usuarios")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            usuariosCadastrados.push({value: doc.id, label: doc.data().usernome});
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    console.log('[usuariosCadastrados]',usuariosCadastrados);

    const tiposUsuarios = [];

    firebase.firestore().collection("usertipos")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            tiposUsuarios.push({value: doc.id, label: doc.data().usertipo});
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    console.log('[tiposUsuarios]',tiposUsuarios);

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


    const handleChange = selectedOption => {
      console.log(`Option selected:`, selectedOption);
      const usuarioSelecionado = firebase.firestore().collection("usuarios").doc(selectedOption.value).onSnapshot(function(doc){
         alert("[selectedOption.value]",selectedOption.value)
        document.getElementById('usernome').value = doc.data().usernome;
        
        
        console.log("[usuarioSelecionado] ",usuarioSelecionado);
      });
      }

      function limparCampos(){
         document.getElementById('usernome').value = '';
         document.getElementById('userfone').value = '';
         document.getElementById('siape').value = '';
         document.getElementById('useremail').value = '';
         selecionarTexto('depid',"Selecione");
         selecionarTexto('usertipo',"Selecione");
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

function CadastroUsuario(){
      const [mostraCampos, setMostraCampos] = useState('txt');
      return (
      <body className="App-body">
      
        <img src={logo} className="App-logo" alt="logo" />
         <form>
         <label className={mostraCampos}> Selecione um Usuário: </label>
         <Select id="departamentos" name="depnome" className={mostraCampos}  options={usuariosCadastrados} onChange={handleChange}></Select>

         <label className="txt"> Nome do Usuário: </label>
            <input className="Name-form"type="text" name="name" placeholder="Nome Completo" id="usernome"/>
         <label className="txt">Celular: </label>
            <input className="Name-form"type="text" name="fone" placeholder="Somente números"id="userfone"/>
         <label className="txt">Siape </label>
            <input className="Name-form"type="text" name="siape" placeholder="" id="siape"/>
         <label className="txt">Email: </label>
            <input className="Name-form"type="text" name="email" placeholder="nome@email.com.br" id="useremail"/>
            
            <label className="txt"> Selecione o Departamento: </label>
            <Select id="depid" name="depnome" className="txt"  options={departamentosCadastrados}></Select>

            <label className="txt"> Selecione o Tipo de Usuário: </label>
            <Select id="usertipo" name="tipousuario" className="txt" options={tiposUsuarios}></Select>
            
        </form>

        <button
              type="submit" 
              id="buttonNovoUsuario"
              className="Button-login" 
              value="Novo usuario" 
              onClick={function handlerAdicionar(){
                setMostraCampos('hidden');
                document.getElementById('buttonNovoUsuario').style.display='none';
                limparCampos();
                console.log('[mostraCampos hidden] = ',{mostraCampos});
              }}>
              Novo Usuário
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
          
                firebase.firestore().collection("usuarios").add({
                  
                  usernome: document.getElementById('usernome').value,
                  userfone: document.getElementById('userfone').value,
                  siape: document.getElementById('siape').value,
                  useremail: document.getElementById('useremail').value,
                  //departamento: document.getElementById('depid').value,
                  //usertipo: document.getElementById('usertipo').value
                  
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
export default CadastroUsuario;