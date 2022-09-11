
import React from 'react';
import { useState, useEffect } from 'react';
import './Produtos.css';
import axios from 'axios';

const url = "http://localhost:8081/produtos/all/"

export function Produtos() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => {
            setProduct(response.data)   
          console.log(response.data)
          
        });
      }, []);

      if (!product) return null;


      return (
        <section  className="conteudo">
            <section className="produtos">
                <div id="fileira-1-de-produtos">
                    <div id="teste-teste-teste">
                        <div id="teste">
                            <div className="teste-card" id="cards">
                              <a className="" href={"/Detalhes"}><img src="kindle.jpg" alt=""/></a>                             
                            </div>
                            <div className="teste-preço">
                            <a href="/Detalhes">{product.map(product=><p key={product.id}>{product.produto}</p>)}</a>   
                            </div>
                            <div className="teste-produto">
                            <a href="/Detalhes">{product.map(product=><p key={product.id}>R$ {product.preco}</p>)} </a>
                            </div>
                            <div className="teste-cashbak">
                            <a href="/Detalhes">em 10x de R$38,61 sem juros</a>
                            </div>
                        </div>
                        <div id="teste">
                            <div className="teste-card" id="cards">
                                <img src="ar.jpg" alt=""/>                            
                            </div>
                            <div className="teste-preço"></div>
                            <div className="teste-produto"></div>
                            <div className="teste-cashbak"></div>
                        </div>
                        <div id="teste">
                            <div className="teste-card" id="cards">
                                <img src="maquina.jpeg" alt=""/>                            
                            </div>
                            <div className="teste-preço"></div>
                            <div className="teste-produto"></div>
                            <div className="teste-cashbak"></div>
                        </div>
                        <div id="teste">
                            <div className="teste-card" id="cards">
                                <img src="fone.jpeg" alt=""/>                            
                            </div>
                            <div className="teste-preço"></div>
                            <div className="teste-produto"></div>
                            <div className="teste-cashbak"></div>
                        </div>
                        <div id="teste">
                            <div className="teste-card" id="cards">
                                <img src="geladeira.jpg" alt=""/>                            
                            </div>
                            <div className="teste-preço"></div>
                            <div className="teste-produto"></div>
                            <div className="teste-cashbak"></div>
                        </div>
                        <div id="teste">
                            <div className="teste-card" id="cards">
                                <img src="notebook.jpg" alt=""/>                            
                            </div>
                            <div className="teste-preço"></div>
                            <div className="teste-produto"></div>
                            <div className="teste-cashbak"></div>
                        </div>
                    </div>

                </div>
            </section>
        </section>
      )



}