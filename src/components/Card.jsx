import React from 'react';
import "./Card.css"
import hamburger10 from "../assets/hamburger10.png"
import suco01 from "../assets/suco01.png"


const Card = () => {
  return (
    <div id="card-principal">
      <div className="container-cards">
        <div className="cards">
          <div id='card-item1' class="card1">
              <img src={hamburger10} alt="" class="card-image"/>
              <div class="card-content">
                  <h2>COMIDA</h2>
                  <p>lorem ipsum dolor sit</p>
                  <p id='button-compra-online'>Compre online</p>
              </div>
          </div>
          <div id='card-item2' class="card2">
              <img src={hamburger10} alt="" class="card-image"/>
              <div class="card-content">
                  <h2>LANCHE</h2>
                  <p>lorem ipsum dolor sit</p>
                  <p id='button-compra-online'>Compre online</p>
              </div>
          </div>
          <div id='card-item3' class="card3">
              <img src={suco01} alt="" class="card-image"/>
              <div class="card-content">
                  <h2>SUCO</h2>
                  <p>lorem ipsum dolor sit</p>
                  <p id='button-compra-online'>Compre online</p>
              </div>
          </div>
       </div>
    </div>

    </div>

  );
};

export default Card;
