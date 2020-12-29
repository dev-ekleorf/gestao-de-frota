import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';
import { useCallback } from 'react';

import firebaseConfig from './firebaseConfig';

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    loginEmail: async(props) => {
            try{
                await firebase.auth().signInWithEmailAndPassword(props.email,props.senha);
                var user =  firebase.auth().currentUser;
                return user; 
            }
            catch(erro){
                return(erro);
            }

        }

};  
