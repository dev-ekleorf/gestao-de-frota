import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Cadastro from './pages/cadastro';
import {tela_login} from './pages/tela_login';
import {principal} from './pages/principal';
import { AuthProvider } from './auth/AuthContext';
import {RotaPrivada} from './auth/RotaPrivada';

function App() {
  return(
    <AuthProvider>
    <BrowserRouter>
        <Route exact path="/tela_login" component={tela_login} />
        <Route exact path="/Cadastro" component={Cadastro} />
        <RotaPrivada exact path="/principal" component={principal} />
        <Route component={()=>(<div>Página 404</div>)}/>
    </BrowserRouter>,
    </AuthProvider>
  );
}

export default App;