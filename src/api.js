import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './firebaseConfig';

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    loginEmail: () => {

        try{
            const u = firebase.auth().signInWithEmailAndPassword('erikteste@gmail.com', 'teste2');
            var user = firebase.auth().currentUser;
            alert('usuario logado ' + user);
            
            return (user);
        }
        catch(erro){
            return(erro);
        }
        
    }  
 };