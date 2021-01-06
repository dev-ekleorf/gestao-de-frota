import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Cadastro from './pages/cadastro';
import {tela_login} from './pages/tela_login';
import {principal} from './pages/principal';
import { AuthProvider } from './auth/AuthContext';
import {RotaPrivada} from './auth/RotaPrivada';
import cadastroVeiculo from './pages/principal/cadastroVeiculo';
import cadastroMotorista from './pages/principal/cadastroMotorista';
import parametrosMotorista from './pages/principal/parametrosMotorista';
import cadastroDepartamento from './pages/principal/cadastroDepartamento';
import cadastroUsuario from './pages/principal/cadastroUsuario';
import solicitaViagem from './pages/principal/solicitaViagem';

function App() {
  return(
    <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/tela_login" component={tela_login} />
        <Route exact path="/" component={tela_login} />
        <Route exact path="/Cadastro" component={Cadastro} />
        <RotaPrivada exact path="/principal" component={principal} />
        <Route path="/cadastroVeiculo" component={cadastroVeiculo} exact />
        <Route path="/cadastroMotorista" component={cadastroMotorista} exact />
        <Route path="/parametrosMotorista" component={parametrosMotorista} exact />
        <Route path="/cadastroDepartamento" component={cadastroDepartamento} exact />
        <Route path="/cadastroUsuario" component={cadastroUsuario} exact />
        <Route exact path="/solicitaViagem" component={solicitaViagem}/>
        <Route component={()=>(<div>Página 404</div>)}/>
      </Switch>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;