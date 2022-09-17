
import React from 'react';
import './produtos-detalhes.css';
import { useState } from 'react';


export function Detalhes() {
      
    const [count, setCount] = useState(0);

    return (
        <div class="box-principal">

            <div class="box">
                <div class="box-produto">
                    <div class="box-produto-image">
                        <div class="box-produto-image-principal">
                            <img src="kindle.jpg" alt=""></img>
                        </div>
                        <div class="box-produto-image-carrousel">
                            <img src="kindle1.jpg" alt=""></img>
                            <img src="kindle2.jpg" alt=""></img>
                            <img src="kindle3.jpg" alt=""></img>
                            <img src="kindle4.jpeg" alt=""></img>
                        </div>
                    </div>
                    <div class="box-produto-descrition">
                        <h3>Kindle 10ª geração 8GB</h3>
                        <p id="preço-antigo">R$ 469,90</p>
                        <div id="preço-atual">
                            <h3>R$ 386,10</h3>
                            <h6>5% OFF</h6>
                        </div>
                        <p id="parcelamento">em 10x de R$38,61 sem juros</p>
                        <p>Ver formas de pagamento</p>
                        <ul>
                            <h6>Características do produto:</h6>
                            <li>Marca: Kindle</li>
                            <li>Referência: B07FQK1TS9</li>
                            <li>Modelo: 10ª Geração</li>
                            <li>Tamanho da tela: 6"</li>
                            <li>Capacidade: 8GB</li>
                            <li>Conectividade: Wi-Fi</li>
                            <li>Recursos embutidos: Luz embutida</li>
                            <li>Cor: Preto</li>
                            <li>Mudança de página: Tela sensível ao toque</li>
                        </ul>
                    </div>
                </div>
                <div class="box-preco-cep">
                    <ul>
                        <li id="big">R$ 386,10</li>
                        <li id="small" id="green">a vista</li>
                        <li id="small">ou em 10x de R$38,61 sem juros</li>
                        <li id="small">Ver mais formas de pagamento</li>
                        <li id="small">Estoque disponível</li>

                    </ul>
                    <div class="box-botao">
                        <div class="botao-detalhe">
                        <a href="/Carrinho"><button  onClick={() => setCount(count + 1)}>Adicionar ao carrinho</button></a>
                            <button>Calcular o frete</button>
                        </div>
                    </div>
                    <ul>
                        <li id="envio">Enviado por:      E-commerce.com</li>
                        <li id="envio">Enviado por:      E-commerce.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
