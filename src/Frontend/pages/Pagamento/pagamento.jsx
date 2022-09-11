import React from 'react';
import './pagamento.css'
import { useState} from 'react';

export function Pagamento () {

    const [quantidade, setquantidade] = useState([]);
    console.log(quantidade)

    /*Como colocar o preço do produtos nessa função??????*/
    const total = 386.10 * quantidade
    console.log(total)

    const totalMoeda = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(total)

    return(
        <div className='box-principal-pagamento'>
            <div className='box-pagamento-produtos'>
                <div className='box-entrega'>
                    <div className='box-entrega-title'>
                    <p>Endereço de entrega:</p>
                    </div>
                    <div className='box-entrega-conteudo'>
                    <ul>
                        <li>Geisiane de Oiveira</li>
                        <li>Rua Maria Maria, 000</li>
                        <li>Bairro João João</li>
                        <li>Maria João - MJ 00.000-000</li>
                    </ul>
                    </div>
                </div>
                <div className='box-itens-comprados'>
                    <div className='box-itens-comprados-title'>
                    <p>Itens:</p>
                    </div>
                    <div className='box-itens-comprados-conteudo'>
                        <div className='itens-comprados-imagem'>
                            <img src="kindle.jpg"></img>
                        </div>
                        <div className='itens-comprados-produto'>
                        <p>Kindle 10ª geração 8GB</p>
                        <select className='select' value={quantidade} onChange={(e) => setquantidade(e.target.value)}>
                            <option selected value="0">00</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                        </select>
                        <p>Subtotal: {totalMoeda} ({quantidade} itens)</p>
                        </div>
                    </div>
                </div>
                <div className='box-pagamento'>
                    <div className='box-pagamento-title'>
                    <p>Selecione um método de pagamento:</p>
                    </div>
                    <div className='box-pagamento-cartão'>
                        <div className='box-pagamento-cartão-title'>
                            <p>Cartão de crédito:</p>
                        </div>
                        <div className='box-pagamento-cartão-conteudo'>
                            <input type="radio" value="1" name="opcao"></input>
                            <img src="cartao.png"></img>
                            <p>Adicionar cartão de crédito</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='box-pagamento-boleto'>
                        <div className='box-pagamento-boleto-title'>
                            <p>Boleto:</p>   
                        </div>
                        <div className='box-pagamento-boleto-conteudo'>
                            <input type="radio" value="2" name="opcao"></input>
                            <img src="boleto.jpg"></img>
                            <p>Vencimento em 1 dia útil (A data de entrega será alterada devido ao tempo de processamento do boleto).</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='box-pagamento-pix'>
                        <div className='box-pagamento-pix-title'>
                            <p>Pix:</p>
                        </div>
                        <div className='box-pagamento-pix-conteudo'>
                            <input type="radio" value="3" name="opcao"></input>
                            <img src="pix.png"></img>
                            <p>O código Pix gerado para o pagamento é válido por 30 minutos após a finalização do pedido.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box-pagamento-carrinho'>
                <div class="botao-comprar-carrinho">
                    <a href="/Finalziar"><button>Finalizar compra</button></a>
                </div>
                <div class="pagamento-carrinho-termos">
                <p>
                Ao fazer seu pedido, você concorda com as Condições de Uso da Amazon.
                Por favor verifique a Notificação de Privacidade, Notificação de Cookies
                e a Notificação de Anúncios Baseados em Interesse.
                </p>
                </div>
                <hr></hr>
                <div class="pagamento-carrinho-resumo">
                    <div class="carrinho-resumo-title">
                      <p>Resumo do pedido:</p>
                    </div>
                    <div class="carrinho-resumo-conteudo">
                        <ul>
                            <li>Itens:</li>
                            <li>Frete:</li>
                        </ul>
                        <ul className='right'>
                            <li>{totalMoeda}</li>
                            <li>R$ 0,00</li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div class="pagamento-carrinho-total">
                    <p>Total do pedido:</p>
                    <p>{totalMoeda}</p>
                </div>
                <div class="pagamento-carrinho-parcelamento">
                    <p>Em 1x de {totalMoeda} sem juros</p>
                </div>
                <div class="pagamento-carrinho-logo">
                    <img src="Logo.png"></img>
                </div>
            </div>
 
        </div>
    )
};