import React from 'react'
import "./Sessaodireta.css"

import ButtonCampOn from "../components/ButtunCompOn"
import burger12 from "../assets/burger12.png"

function Sessaodireta(){
    return( 
       <>
        <div className="sessaod">
                <div className="container-sessaodireta">
                    <img src={burger12} className="img-fluid-sessao" alt="Imagem de um movel planejado,e um designer único"/>
                    <div className="texto-sessaodireta">
                        <h1 className="title-sessaodireta">ENCONTRE SUA COMIDA E BEBIDA MAIS SABOROSA EM SÓ LUGAR</h1>
                        <hr className='linha-amarela'></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque nunc ac nisi vulputate, ut pellentesque velit interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque nunc ac nisi.</p>
                        <ButtonCampOn/>
                    
                    </div> 
                </div>
        </div>
       </>
  );
}
export default Sessaodireta;
