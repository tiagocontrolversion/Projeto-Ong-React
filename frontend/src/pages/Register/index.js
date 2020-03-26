import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './style.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');        
    
    const history = useHistory();

    async function handleRegister(e){
       e.preventDefault();

       //console.log({name,email,whatsApp,city,uf});

       const data = {name,email,whatsapp,city,uf}
      
       //await api.post('ongs',data);
       try 
       {
          const response = await api.post('ongs',data);
          alert(`Seu ID de acesso é : ${response.data}`);    

          history.push('/');
       } catch (error) {
          alert(`Erro no cadastro tente novamente`);    
       }
       
    }

    return (
          <div className="register-container">
              <div className="content">
                  <section>
                      <img src={logoImg} alt="Be The Hero"/>
                      <h1>Cadastro</h1>
                      <p>Faça seu cadastro entre na platforma</p>

                      <Link className="back_link" to="/">
                          <FiArrowLeft size={16} color="#E02041" />
                          Não tenho cadastro
                      </Link>
                  </section>
                 <form onSubmit={handleRegister}>
                   <input placeholder="Nome da ONG"
                          value = {name}
                          onChange={e => setName(e.target.value)}
                   />
                   <input type="email"
                          value = {email}
                          onChange={e => setEmail(e.target.value)}                  
                   />
                   <input placeholder="WhatsApp"
                          value = {whatsapp}
                          onChange={e => setWhatsapp(e.target.value)}                  
                   />                   
                   <div className="input-group">
                       <input placeholder="cidade"
                              value = {city}
                              onChange={e => setCity(e.target.value)}                  
                       />
                       <input placeholder="UF" 
                              style={{width: 80}}
                              value = {uf}
                              onChange={e => setUf(e.target.value)}/>
                   </div>
                   <button className="button" type="submit">Cadastrar</button>
                 </form>
              </div>
          </div>   
        )

}








