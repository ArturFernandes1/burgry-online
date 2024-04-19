import React from 'react';
import "./Card.css"
import ButtunCompOn from "../components/ButtunCompOn"
import hamburger10 from "../assets/hamburger10.png"
import suco01 from "../assets/suco01.png"


const Card = () => {
  return (
          <div id="card-principal">
              <nav>
                    <div className="container-cards">
                        <div className="card-amarelo">
                            <div className="coluna-imagem">
                                <img className="imagem" src={hamburger10} alt="Hamburger"></img>
                            </div>

                            <div className="coluna-texto">
                                <h3>COMIDAS</h3>
                                <p>lorem ipsum dolor sit</p>
                               {/*  <p id='button-compra-online'>Compre online</p> */}
                                < ButtunCompOn/>
                            </div>
                          </div>


                      <div className="card-verde">
                            <div className="coluna-imagem">
                                <img className="imagem" src={hamburger10} alt="Hamburger"></img>
                            </div>
                            
                            <div className="coluna-texto">
                                <h3>LANCHES</h3>
                                <p>lorem ipsum dolor sit</p>
                                  {/*  <p id='button-compra-online'>Compre online</p> */}
                                  < ButtunCompOn/>
                            </div>
                      </div>

                      <div className="card-vermelho">
                            <div className="coluna-imagem">
                                <img className="imagem" src={suco01} alt="Hamburger"></img>
                            </div>
                            
                            <div className="coluna-texto">
                                <h3>SUCOS</h3>
                                <p>lorem ipsum dolor sit</p>
                                 {/*  <p id='button-compra-online'>Compre online</p> */}
                                 < ButtunCompOn/>
                            </div>
                      </div>
                  </div>    
              </nav>
      </div>
  );
};

export default Card;
