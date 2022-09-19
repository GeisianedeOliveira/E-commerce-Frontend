
import React from 'react';
import { useState, useEffect } from 'react';
import './Produtos.css';
import axios from 'axios';

const url = "https://teste-products.herokuapp.com/products/all"

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
            <h5 className='h6'>Produtos mais vendidos</h5>
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
                            <a href="/Detalhes"> {product.map(product=><p key={product.id}>R$ {product.preco}</p>)}</a>
                            </div>
                            <div className="teste-cashbak">
                            <a href="/Detalhes"> {product.map(product=><p key={product.id}>R$ {product.parcelamento}</p>)}</a>
                            </div>
                        </div>
                        <div id="teste">
                            <div className="teste-card" id="cards">
                                <img src="ar.jpg" alt=""/>                            
                            </div>
                            <div className="teste-preço">Ar Condicionado Split LG 9.000 Btus</div>
                            <div className="teste-produto">R$ 1.699,00</div>
                            <div className="teste-cashbak">ou 10 vezes de R$ 169,90</div>
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
