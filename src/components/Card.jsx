import React from 'react';
import "./Card.css"
import ButtunCompOn from "../components/ButtunCompOn"
import hamburger10 from "../assets/hamburger10.png"
import drink06 from "../assets/drink06.png"
import food04 from "../assets/food04.png"


const Card = () => {
  return (
          <div id="card-principal">
              <nav>
                    <div className="container-cards">
                        <div className="card-amarelo">
                            <div className="coluna-imagem">
                                <img className="imagem" src={food04} alt="Hamburger"></img>
                            </div>

                            <div className="coluna-texto">
                                <h3>COMIDAS</h3>
                                <p>lorem ipsum dolor</p>
                               <ButtunCompOn className="card-button-custom" />
                            </div>
                          </div>


                      <div className="card-verde">
                            <div className="coluna-imagem">
                                <img className="imagem" src={hamburger10} alt="Hamburger"></img>
                            </div>
                            
                            <div className="coluna-texto">
                                <h3>LANCHES</h3>
                                <p>Lorem ipsum.</p>
                                <ButtunCompOn className="card-button-custom" />
                            </div>
                      </div>

                      <div className="card-vermelho">
                            <div className="coluna-imagem">
                                <img className="imagem" src={drink06} alt="Hamburger"></img>
                            </div>
                            
                            <div className="coluna-texto">
                                <h3>SUCOS</h3>
                                <p>Frutas Naturais</p>
                                <ButtunCompOn className="button-comp-on" />
                            </div>
                      </div>
                  </div>    
              </nav>
      </div>
  );
};

export default Card;
