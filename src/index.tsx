import React from 'react';
import ReactDOM from 'react-dom'; /* Faz a interação com o local onde a interface será utilizada, no caso, a DOM */
import App from './App';

import './services/firebase';

ReactDOM.render( /* Render: renderiza na tela */
  /* Coloca esse conteúdo dentro do id="root" do index.html */
  <React.StrictMode>
    <App /> {/* O que é exibido no navegador, através da function App em App.tsx - chamado de JSX */}
  </React.StrictMode>, 
  document.getElementById('root') /* Busca o id="root" do index.html */
);

