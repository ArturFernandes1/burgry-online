import React from "react";
import "./Menu.css";
import ButtonCompOn from "../components/ButtunCompOn";

// Importações de imagens
import hamburger10 from "../assets/hamburger10.png";
import food02 from "../assets/food02.png";
import burger01 from "../assets/burger01.png";
import burger02 from "../assets/burger02.png";
import burger03 from "../assets/burger03.png";
import burger06 from "../assets/burger06.png";
import burger07 from "../assets/burger07.png";
import drink01 from "../assets/drink01.png";
import drink06 from "../assets/drink06.png";
import drink07 from "../assets/drink07.png";
import drink08 from "../assets/drink08.png";
import salgados01A from "../assets/salgados01A.png";
import salgados02A from "../assets/salgados02A.png";
import food10 from "../assets/food10.png";
import food04 from "../assets/food04.png";


const Menu = () => {
    const filtrarItens = (categoria) => {
        const itens = document.querySelectorAll('.item-pedido');
        itens.forEach(item => {
            item.style.display = (categoria === 'tudo' || item.classList.contains(categoria)) ? 'block' : 'none';
        });
    };

    return (
        <div className="areacardapioprincipal">
            <div id="filtrocardapio">
                <h1>Nosso Melhor Cardápio</h1>
                <p>Descubra sabores excepcionais em nosso cardápio primoroso, onde cada mordida é uma experiência única!</p>
                <div className="filtro">
                    <button onClick={() => filtrarItens('comida')} className="filtro-btn">Comida</button>
                    <button onClick={() => filtrarItens('lanche')} className="filtro-btn">Lanche</button>
                    <button onClick={() => filtrarItens('bebida')} className="filtro-btn">Bebida</button>
                </div>
            </div>
            <div className="containerdeitem">
                <div className="item-pedido lanche">
                    <img src={hamburger10} alt="Hambúrguer de carne dupla com cheddar" className="img-item" />
                    <p id="nomelanche">Gigante de Carne Dupla</p>
                    <p className="textdescricao">Uma explosão de sabor com carne dupla, cheddar cremoso, alface e tomate.</p>
                    <p id="valor">R$26,99</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>
        
                <div className="item-pedido lanche">
                    <img src={burger01} alt="Hambúrguer de carne dupla" className="img-item" />
                    <p id="nomelanche">Clássico Suculento</p>
                    <p>Carne dupla suculenta, alface crocante, tomate para um sabor inesquecível.</p>
                    <p id="valor">R$25,29</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>
                <div className="item-pedido lanche">
                    <img src={burger02} alt="Hambúrguer de carne normal" className="img-item" />
                    <p id="nomelanche">Combo Especial</p>
                    <p>Nosso combo favorito: hambúrguer saboroso, refrigerante e batatas fritas.</p>
                    <p id="valor">R$24,99</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>
                <div className="item-pedido lanche">
                    <img src={burger03} alt="Hambúrguer de carne com queijo" className="img-item" />
                    <p id="nomelanche">Hambúrger de Carne de Frango</p>
                    <p>Carne de frango, coberto com queijo derretido, alface fresco e tomate.</p>
                    <p id="valor">R$21,99</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>
                <div className="item-pedido lanche">
                    <img src={burger06} alt="Hambúrguer de carne com queijo" className="img-item" />
                    <p id="nomelanche">Cheeseburguer Especial</p>
                    <p>Carne saborosa, queijo derretido, alface e tomate fresquinhos.</p>
                    <p id="valor">R$24,99</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>
                <div className="item-pedido lanche">
                    <img src={burger07} alt="Hambúrguer de carne dupla" className="img-item" />
                    <p id="nomelanche">Duplo Sabor</p>
                    <p>Hambúrgueres suculentos, alface crocante, tomate e cebola caramelizada.</p>
                    <p id="valor">R$25,29</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>
                <div className="item-pedido bebida">
                    <img src={drink06} alt="Suco de Laranja" className="img-item" />
                    <p id="nomelanche">Suco de Laranja</p>
                    <p>Suco de laranja natural, sem adição de açúcar.</p>
                    <p id="valor">R$12,99</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>
                <div className="item-pedido bebida">
                    <img src={drink01} alt="Suco Detox" className="img-item" />
                    <p id="nomelanche">Suco Detox</p>
                    <p>Uma mistura saudável de couve, limão e gengibre.</p>
                    <p id="valor">R$14,99</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>
                <div className="item-pedido bebida">
                    <img src={drink07} alt="Suco de Abacaxi" className="img-item" />
                    <p id="nomelanche">Suco Triplo Natural</p>
                    <p>Natural e refrescante, sem adição de açúcar.</p>
                    <p id="valor">R$18,99</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>
                <div className="item-pedido bebida">
                    <img src={drink08} alt="Suco de Morango" className="img-item" />
                    <p id="nomelanche">Suco de Morango</p>
                    <p>Feito com morangos frescos, sem adição de açúcar.</p>
                    <p id="valor">R$14,99</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>
              <div className="item-pedido lanche">
                    <img src={salgados01A} alt="Panqueca Recheada" className="img-item" />
                    <p id="nomelanche">Panqueca Recheada</p>
                    <p>Panqueca fina recheada com carne moída temperada e queijo, gratinada ao forno.</p>
                    <p id="valor">R$5,99</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>
                <div className="item-pedido lanche">
                    <img src={salgados02A} alt="Esfirra de Carne" className="img-item" />
                    <p id="nomelanche">Esfirra de Carne</p>
                    <p>Esfirra recheada com carne moída temperada, assada na perfeição.</p>
                    <p id="valor">R$4,99</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>
                <div className="item-pedido comida">
                    <img src={food10} alt="Prato Executivo" className="img-item" />
                    <p id="nomelanche">Porção de Espetinho</p>
                    <p>Carne ao ponto e salada fresca.</p>
                    <p id="valor">R$15,99</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>
                <div className="item-pedido comida">
                    <img src={food04} alt="Prato Feito" className="img-item" />
                    <p id="nomelanche">Feijoada Completa</p>
                    <p>Uma combinação clássica de arroz, feijão, carne e salada.</p>
                    <p id="valor">R$12,99</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>
                <div className="item-pedido comida">
                    <img src={food02} alt="Hambúrguer de carne com queijo" className="img-item" />
                    <p id="nomelanche">Clássico com Queijo</p>
                    <p className="textdescricao">O tradicional de carne alface e tomate e batatas fritas.</p>
                    <p id="valor">R$16,59</p>
                    <ButtonCompOn className="estilizacao-cardapio" />
                </div>

            </div>
        </div>
    );
};

export default Menu;
