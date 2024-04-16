import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Estilo CSS para a navbar

function Navbar(){

    const toggleMenu = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };

    return(
        <header>
            <div className="topnav" id="myTopnav">
                <a href="/" className="active first-item">HOME</a>
                <a href="/Sobre">SOBRE</a>
                <a href="/Contato">CONTATE NOS</a>
                <a href="/Cardapio">CARDÁPIO</a>
                <a className="last" href="#">LOJA ONLINE</a>
                <a className="icon" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </a>
            </div>
        </header>
  );
}
export default Navbar;
