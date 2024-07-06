import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <>
            <div className="footerblack">
                <div className="colum">
                    <h1>Parcerias</h1>
                    <a href="#" className="primeira-tag">Burguer Haven</a>
                    <a href="#" className="link">Sabor Supremo Burgers</a>
                    <a href="#" className="link">Grill & Thrill Hamburgueria</a>
                    <a href="#" className="link">Burgueria do Chef</a>
                </div>
                <div className="colum">
                    <h1>Nosso Contato</h1>
                    <a href="#"  className="primeira-tag">(83) 9934-4521</a>
                    <a href="#" className="link">(83) 9934-4521</a>
                    <a href="#" className="link">(83) 9934-1121</a>
                    <a href="#" className="link">(83) 9934-9821</a>
                </div>
                <div className="colum">
                    <h1>Redes Sociais</h1>
                    <a href="#" className="primeira-tag">Facebook</a>
                    <a href="#" className="link">Whatsapp</a>
                    <a href="#" className="link">Instagram</a>
                    <a href="#"className="link">Twitter</a>
                </div>
            </div>
            <div className="sub-footer">
                <p>Desenvolvido por Artur Fernandes | 2024</p>
                <p>Todos os direitos reservados</p>
            </div>
        </>
    )

}

export default Footer;