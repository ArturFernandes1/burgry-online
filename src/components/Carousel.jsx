import React from 'react';
import "./Carousel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

import hamburger10 from "../assets/hamburger10.png"



const Carousel = () => {
  return (
    <div className="container">
    <div className="container1">
        <img src={hamburger10} className="img-fluid" alt="Imagem de um movel planejado,e um designer único"/>
        <div className="texto">
                <h1 className="title">DESFRUTE DO BURGRY E DEIXE SUA BARRIGA FELIZ</h1>
                <hr className='linha-amarela'></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque nunc ac nisi vulputate, ut pellentesque velit interdum.</p>
                <div className="sub-itens">
                    <div className='item'>
                        <FontAwesomeIcon className='icon' icon={faUtensils} />
                        <h4>Delicioso</h4>
                    </div>
                    <div className='item'>
                      <FontAwesomeIcon  className='icon' icon={faDroplet} /> 
                      <h4>Fresco</h4>
                    </div>
                    <div className='item'>
                      <FontAwesomeIcon className='icon' icon={faUtensils} />
                      <h4>Orgânico</h4>
                  </div>
                </div>
        
          </div> 

    </div>
 </div>
  );
};

export default Carousel;
