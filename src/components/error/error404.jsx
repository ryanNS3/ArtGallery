import React from "react";
import ilustracao404 from "../../assets/ilustracao-404.svg"
import "./styleErro404.css"
import { Link } from "react-router-dom";

const Erro404 = () =>{
    return( 
        <section className="animacaoEsquerda">
            <h1 className="titulo-erro">Página não encontrada <span>404</span></h1>
            <section className="boxErro">
                <div>
                    <p>Ocorreu um erro ao encontrar a página web, certifique que a rota que deseja esteja correta, caso o erro persista tente digitar a rota novamente.</p>
                    <Link to={"/"} className="botao-erro">Voltar para a home</Link>
                </div>

                <div>
                    <img src={ilustracao404} alt="imagem ilsutrativa do erro 404"/>

                </div>

            </section>

        </section>


    )
}
export default Erro404;