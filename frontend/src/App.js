import React from 'react';
//import Logon from './pages/Logon';
import './global.css'

import Routes from './routes';

function App() {

  return (
    <Routes/> 
  );
}

export default App; 


/*import React, {useState} from 'react';
//import Header from './Header';
import Logon from './pages/Logon';

function App() {
  let [counter,setCounter] = useState(0);
  //retorna um array com duas posicoes {valor, funcao de atualizaçao]}

  function increment(){
    setCounter(counter +1);
    console.log(counter);
  }

  return (
    //<h1>hello teste</h1>
    <div>
      <Header>Contador:{counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App; */
