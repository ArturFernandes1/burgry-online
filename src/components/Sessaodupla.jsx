import React from 'react';
import "./Sessaodupla.css"
import hamburger10 from "../assets/hamburger10.png"
import ButtunCompOn from '../components/ButtunCompOn';

const Sessaodupla = () => {
  return (
        <div className="sessao-cards">
            <div className="sessao-subcards">
                <div id='card-item1' class="sessao-card1">
                    <div class="sessao-content">
                        <p id='frasepromocao'>Promoção de dia de pagamento</p>
                        <h2>GANHE 10% DESCONTO NA SEMANA DO SIA DE PAGAMENTO</h2>
                        <p>lorem ipsum dolor sit lorem ipsum dolor sit</p>
                        <ButtunCompOn/>
                    </div>
                    <img src={hamburger10} alt="" class="sessao-image"/>
                </div>
                <div id='card-item1' class="sessao-card1">
                    <div class="sessao-content">
                        <p id='frasepromocao'>Promoção de dia de pagamento</p>
                        <h2>GANHE 10% DESCONTO NA SEMANA DO SIA DE PAGAMENTO</h2>
                        <p>lorem ipsum dolor sit lorem ipsum dolor sit</p>
                        <ButtunCompOn/>
                    </div>
                    <img src={hamburger10} alt="" class="sessao-image"/>
                </div>
            </div>
        </div>

  );
};

export default Sessaodupla;
