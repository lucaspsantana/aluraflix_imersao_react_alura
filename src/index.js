import React from 'react'; //lib do react
import ReactDOM from 'react-dom'; //lib para roteamento
import './index.css';
import App from './pages/home/App';
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria'

import {BrowserRouter, Switch, Route} from "react-router-dom" //roteamento reativo sem refresh da pagina 


function _404(){ //página 404
  return(
    <div>
      <h1>404</h1>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={_404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
