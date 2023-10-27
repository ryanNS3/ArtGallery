import React from "react";
import ilustracaoErro from "../../assets/erroImg.svg"
import "./styleError.css"
import Loading from "../loading/loading";

const Erro = () =>{
    return(
        <article>
            <section className="animacaoEsquerda box-error" aria-labelledby="titulo-erro">
                <img src={ilustracaoErro} alt="ilsutração de erro " className="img-erro"/>
                <div>
                <h1 id="titulo-erro">Error </h1>
                    <p>Ocorreu algum ao carregar as informações,retornaremos em breve.</p>
                    <div className="aguarda">
                        Aguardando... <Loading />

                    </div>

                </div>
            </section>

        </article>
    )
}


export default Erro;