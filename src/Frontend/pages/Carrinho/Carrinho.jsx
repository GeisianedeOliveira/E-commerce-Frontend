import React from 'react';
import './Carrinho.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = "http://localhost:8081/produtos/all/"

export function Carrinho (){

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => {
            setProduct(response.data)  
            
        });
      }, []);

      if (!product) return null

      const [quantidade, setquantidade] = useState([]);
        console.log(quantidade)
    
      /*Como colocar o preço do produtos nessa função??????*/
      const total = 386.10 * quantidade
      console.log(total)


    const totalMoeda = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(total)

    return (
        <div className="box-principal-carrinho">
            <div className='box-carrinho-produtos'>
                <div className='box-carrinho-produtos-produto'>
                    <div className='box-carrinho-title'>
                    <h6>Produtos adicionados ao carrinho:</h6>
                    </div>
                    <div className='box-carrinho-conteudo'>
                        <div className='box-carrinho-image'>
                            <img src="kindle.jpg"></img>
                        </div>
                        <div className='box-carrinho-detalhes'>
                            {product.map(product=><p key={product.id}>{product.produto}</p>)}
                            {product.map(product=><p key={product.id} id="small">Código do produto: {product._id}</p>)}
                            <p id="small">Vendido e entregue por E-commerce.com</p>
                        </div>
                        </div>

                </div>
                <div className='box-carrinho-produtos-quantidade'>
                <div>
                    <h6>Quantidade:</h6>
                </div>
                <div className='box-select'>
                    <select className='select-carrinho' value={quantidade} onChange={(e) => setquantidade(e.target.value)}>
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
                </div>
                </div>
                <div className='box-carrinho-produtos-preço'>
                <h6>Preço:</h6>
                {totalMoeda}
                </div>
            </div>
            <div className='box-carrinho-total'>
                <div className='box-carrinho-total-left'>
                <p>Total ({quantidade} itens):</p>
                </div>
                <div className='box-carrinho-total-right'>
                    <p> {totalMoeda}</p>
                    <div class="botao-comprar">
                        <a href="/Login"><button>Comprar</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}