import React from 'react';
import './Cadastro.css'

export function Cadastro (){
    return (
        <div className="box-principal-usuario">
            <div className="box-usuario">
                <div id="box-usuario">
                <p id="criarconta">Crie sua conta:</p>
                <p>Nome completo:</p>
                <input classNameName='input-cadastro'
                    name="password"
                    type="text"
                />
                <p>E-mail:</p>
                <input classNameName='input-cadastro'
                    name="password"
                    type="email"
                />
                <p>Crie sua senha:</p>
                <input classNameName='input-cadastro'
                    name="password"
                    type="password"
                />
                <div className="button-cadastro">
                    <button type="submit">Continuar</button>
                </div>
                <div className="condicoes">
                    <p>
                    Ao criar uma conta, você concorda com as Condições de Uso da E-commerce.com.
                    Por favor verifique a Notificação de Privacidade, Notificação de Cookies
                    e a Notificação de Anúncios Baseados em Interesse.
                    </p>
                </div>
                <div className="login-cadastro">
                Você já tem uma conta?
                <a href="/Login">Faça login!</a>
                </div>
                </div>
            </div>
        </div>
    )
}