import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Cadastro from './pages/cadastro';
import tela_login from './pages/tela_login';
import principal from './pages/principal';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={tela_login} exact />
      <Route path="/Cadastro" component={Cadastro} exact />
      <Route path="/principal" component={principal} exact />
      <Route component={()=>(<div>Página 404</div>)}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);