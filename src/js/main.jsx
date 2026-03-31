import React from 'react';
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Clock from './components/Clock';

let varSegundos = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  
root.render(
  <React.StrictMode>
    <Clock segundos={varSegundos}/> 
  </React.StrictMode>
);

  varSegundos++ 
}, 1000);