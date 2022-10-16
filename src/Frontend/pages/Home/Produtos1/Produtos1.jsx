
import React from 'react';
import { useState, useEffect } from 'react';
import './Produtos1.css';
import axios from 'axios';

const url = "https://teste-products.herokuapp.com/products/all"

export function Produtos1() {

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
                              <a className="" href={"/Detalhes"}><img src="TvSamsung.jpg" alt=""/></a>                             
                            </div>
                            <div className="teste-preço">
                            <a>Smart TV Samsung LED 4K 50"</a>   
                            </div>
                            <div className="teste-produto">
                            <a>R$ 2.588,00 </a>
                            </div>
                            <div className="teste-cashbak">
                            <a>ou 10x R$ 258,80 sem juros</a>
                            </div>
                        </div>
                        <div id="teste">
                            <div className="teste-card" id="cards">
                                <img src="Cock.jpg" alt=""/>                            
                            </div>
                            <div className="teste-preço">Fogão cooktop gás Itatiaia</div>
                            <div className="teste-produto">R$ 449,00</div>
                            <div className="teste-cashbak">ou 10 vezes de R$ 44,90 sem juros</div>
                        </div>
                        <div id="teste">
                            <div className="teste-card" id="cards">
                                <img src="Stereo.jpg" alt=""/>                            
                            </div>
                            <div className="teste-preço">Alto-falante Mondial CM-400</div>
                            <div className="teste-produto">R$ 509,00</div>
                            <div className="teste-cashbak">ou 10 vezes de R$ 50,90 sem juros</div>
                        </div>
                        <div id="teste">
                            <div className="teste-card" id="cards">
                                <img src="Aspirador.jpg" alt=""/>                            
                            </div>
                            <div className="teste-preço">Aspirador de pó Wap High Speed</div>
                            <div className="teste-produto">R$ 143,10</div>
                            <div className="teste-cashbak">ou 6 vezes de R$ 23,85</div>
                        </div>
                        <div id="teste">
                            <div className="teste-card" id="cards">
                                <img src="Alexa.jpg" alt=""/>                            
                            </div>
                            <div className="teste-preço">Amazon Echo Dot 3rd Gen</div>
                            <div className="teste-produto">R$ 267,00</div>
                            <div className="teste-cashbak">ou 8 vezes de R$ 33,38</div>
                        </div>
                        <div id="teste">
                            <div className="teste-card" id="cards">
                                <img src="Liquidificador.jpg" alt=""/>                            
                            </div>
                            <div className="teste-preço">Liquidificador portátil Mondial</div>
                            <div className="teste-produto">R$ 109,95</div>
                            <div className="teste-cashbak">ou 3 vezes de R$ 36,65</div>
                        </div>
                    </div>

                </div>
            </section>
        </section>
      )



}
