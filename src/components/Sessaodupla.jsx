import React from 'react';
import "./Sessaodupla.css"
import hamburger10 from "../assets/hamburger10.png"
import ButtunCompOn from '../components/ButtunCompOn';

const Sessaodupla = () => {
  return (
         <div className="sessao-cards">
            <div className="sessao-subcards">
                <div className="sessao-card" id="card-item1">
                     <img src={hamburger10} alt="Promoção Hamburger" className="sessao-image"/>
                     <div className="comptext">
                    <p className="frase-promocao">Promoção todo Sexta-feira e Sábados</p>
                    <h2>GANHE 10% DE DESCONTO NA SEMANA DO DIA DE PAGAMENTO</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                    <ButtunCompOn/>
                </div>
                </div>
                
                <div className="sessao-card" id="card-item2">
                    <img src={hamburger10} alt="Promoção Hamburger" className="sessao-image"/>
                    <div className="comptext">
                    <p className="frase-promocao">Promoção todo Sexta-feira e Sábados</p>
                    <h2>GANHE 10% DE DESCONTO NA SEMANA DO DIA DE PAGAMENTO</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ButtunCompOn/>
                    </div>
                </div>

                <div className="sessao-card" id="card-item3">
                    <img src={hamburger10} alt="Promoção Hamburger" className="sessao-image"/>
                    <div className="comptext">
                    <p className="frase-promocao">Promoção todo Sexta-feira e Sábados</p>
                    <h2>GANHE 10% DE DESCONTO NA SEMANA DO DIA DE PAGAMENTO</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <ButtunCompOn/>
                    </div>
                </div>
            </div>
        </div>

  
  );
};

export default Sessaodupla;
