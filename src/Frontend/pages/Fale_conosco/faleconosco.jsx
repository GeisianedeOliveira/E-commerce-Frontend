import React from 'react';
import './Fale_conosco.css'

export function Faleconosco (){
    return (
        <div className="box-principal-sac">
            <div className="box-principal-sac-mapa">
            <h4>FALE CONOSCO:</h4>
            <p>Nome:</p>
            <input className="input-sac"
            name="name"
            type="text"
            />
            <p>E-mail:</p>
            <input className="input-sac"
            name="email"
            type="email"
            />
            <p>Assunto:</p>
            <input className="input-sac"
            name="assunto"
            type="text"
            />
            <p>Mensagem:</p>
            <input className="input-sac-message"
            name="message"
            type="text"
            />
            <div classNameName="button-sac">
                <button type="submit">Enviar</button>
            </div>
            </div>
        </div>
    )

}