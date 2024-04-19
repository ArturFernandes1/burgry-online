import React, { useState } from 'react';
import './Navbar.css'; // Assegure-se de ter este arquivo de estilos na mesma pasta ou ajuste o caminho conforme necessário

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className={`topnav${isOpen ? ' responsive' : ''}`} id="myTopnav">
                <h1 className="titleh1"><samp id="spam1">BUR</samp> <samp id="spam2">GRY</samp></h1>
                <a href="/">HOME</a>
                <a href="/Sobre">SOBRE NÓS</a>
                <a href="/Contato">CONTATE-NOS</a>
                <a href="/Cardapio"  id='item-last'>CARDÁPIO</a>
                <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
                    <span>&#9776;</span>
                </a>
            </div>
        </header>
    );
};

export default Navbar;

