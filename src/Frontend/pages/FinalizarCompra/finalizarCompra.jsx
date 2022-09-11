
import React from 'react';
import './finalizarCompra.css'


export function Finalizar () {


    return (
        <div className='box-principal-finalizar'>
            <div className='box-finalizar'>
                <div className='box-finalizar-logo'>
                    <img src="Logo.png"></img>
                </div>
                <div className='box-finalizar-confirmacao'>
                    <p>Seu pedido foi realizado com sucesso!</p>
                </div>
                <div className='box-finalizar-pedido'>
                    <p>O número do seu pedido é: 000000000000-00</p>
                </div>
                <div className='box-finalizar-pix'>
                    <p>Chave PIX: 65dfd54f-654sds22-5s4dfd5f1-65d4f1d53f12</p>
                </div>
                <hr></hr>
                <div className='box-finalizar-informacoes'>
                    <ul>
                        <li>
                            Olá, Geisiane!
                        </li>
                        <li>
                            Seu pedido foi realizado com sucesso e agora falta pouco para você ter os seus produtos.
                        </li>
                        <li>
                            O seu pedido no valor de R$ 0,00 está em análise, aguardando confirmação de pagamento.
                        </li>
                        <li>
                        Mas fique tranquila(o), após a confirmação enviaremos um e-mail te avisando. :)
                        </li>
                    </ul>
                </div>

                <div className='box-finalizar-rodape'>
                    
                </div>
                
            </div>
        </div>
    )

}