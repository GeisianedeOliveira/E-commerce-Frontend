import './Login.css'
import React from 'react';
import { useState } from 'react';
import { AuthContext } from"../../Context/Auth"
import { useContext } from 'react'


export function Login() {
  // eslint-disable-next-line
  const {authenticated, login} = useContext(AuthContext);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (evento) => {
  evento.preventDefault();
  console.log("Submit", email, password);
  login(email, password);
  }


return (
  <div className='max-container'>
    <div className='min-container'>
      <div className='container-login'>
        
        <form onSubmit={handleSubmit}>
          <div className='count'>
          <h4>Faça login através do:</h4>
          <a className="Facebook" href="#/"><img src="Vazio.jpg" alt=""/></a>
          <a className="Gmail" href="#/"><img src="Vazio.jpg" alt=""/></a>
          <a className="" href="#/"><img src="Vazio.jpg" alt=""/></a>
          <p>ou use sua conta:</p>
          </div>
          <input className='input'
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
          <input className='input'
            name="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(evento) => setPassword(evento.target.value)}
          />
          <div className="button">
            <button type="submit">LOGIN</button>
          </div>
          <div className='newpassword'>
            <a href="">Esqueceu sua senha?</a>
          </div>

        </form>
      </div>
      <div className='container-cadastro'>
        <div class="container-cadastro-interno">
          <div class="container-cadastro-interno">
            <h4>Seja bem vindo!</h4>
          </div>
          <div class="container-cadastro-interno">
            <span>Não possui conta?</span>
          </div>
          <div class="container-cadastro-interno">
            <a href="/cadastro">Cadastre-se!</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}
