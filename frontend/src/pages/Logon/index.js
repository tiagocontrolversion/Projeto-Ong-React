import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
//import {FiLogIn} from 'react-icons/gi';

import api from '../../services/api'
import './style.css';
import logoimg from "../../assets/logo.svg";
import heroesImg from '../../assets/heroes.png';

export default function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
      e.preventDefault();

      try {
            const response =  await api.post('sessions',{id});
            //console.log(response.data.name);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile');
      } catch (error) {
         alert('falha no login, tente novamente !');
      }

    } 

    return (
        <div className="logon-container">
          <section className="form">
            <img src={logoimg} alt="Be the hero"/>
            <form onSubmit={handleLogin}>
                <h1>faça seu logon</h1>
                <input placeholder="Sua ID"
                       value = {id}
                       onChange={e => setId(e.target.value)}                
                />
                <button className="button" type="submit">Entrar</button>
                <Link className="back_link" to="/Register">Não tenho cadastro</Link>
            </form>

          </section>
        
          <img src={heroesImg} alt="Heroes"/>
        </div>         
    );
}

 //<a href="/Register"><FiLogIn size = {16} color="#E02041"/>Não tenho cadastro</a>