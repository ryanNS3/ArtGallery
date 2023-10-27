import React, { useRef } from "react";

import { Link, useParams } from "react-router-dom";
import { GlobalObras } from "../../context/globalObras";
import { GlobalPerson } from "../../context/globalPerson";

// imports modal
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import sair from "../../assets/sair.svg"
import adicionarComent from "../../assets/adicionarComent.svg"
// importando imgs
import seta from "../../assets/seta.png"


import "../Obra/style.css"
const Obra = () => {

    // formulário
    const [nome,setNome] = React.useState("");
    const [nota,setNota] = React.useState("");
    const [comentario,setComentario] = React.useState("");


    const [abrir, setAbrir] = React.useState(false);
    const handleOpen = () => setAbrir(true);
    const handleClose = () => setAbrir(false);
  
    const refcoment = useRef()

    const dados = React.useContext(GlobalObras);
    const persona = React.useContext(GlobalPerson);
    const parametros = useParams()


 
    dados.setItem(parametros.id)

    function handleClick(event){    
        event.preventDefault();
        setNota(event.target.innerText)
    }

    if ((dados.dados != null)) {

        let indice = '';
        dados.dados.map((item) => {
            if (item.nomeObra == dados.item) {
                indice = item;
            }
        })

     
        return (

            <main className='corpo  animacaoEsquerda'>
                <section className="">
                    <Link to={"/"} aria-label="botão-voltar" className="button-home relative rounded-xl w-10 border-orange-300  justify-self-start self-center">
                        <img className=" rotate-180 w-10 " src={seta}  alt="seta"/>
                    </Link>
                    <h1 className=''>{dados.item}</h1>

                </section>

                <div className='' >

                    <div className=''>
                        <div className=''>
                            <img id="obra" className="rounded w-full" src={indice.linkFoto} alt={indice.nomeObra} />
                        </div>
                    </div>

                    <div className='descricao '>

                        <div className=''>
                            <div className=''>
                                <img
                                    className=''
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4PGyba3BR8tRfKdfHPoYo-2C6rPO8vWeTCMBo6TTfy02956e'
                                    alt=''
                                />
                            </div>
                            
                            <p className=''>{indice.fk_nomeArtista}</p>
                            <p className=''>{indice.fk_nomeMovimento}</p>
                            <p className= ''>{indice.ano}</p>
                        </div>
                        <div className=''>
                            <h2 className=''>Descrição</h2>
                        </div>
                        <p className=''>{indice.descricao}</p>
                        <button onClick={handleOpen} className="adicionarComentario"><img src={adicionarComent} alt="Adiconar comenário"/> <p>Comentário</p></button>
                        <Modal
                        open={abrir}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className="modal"

                    >
                        <Box className="inner-modal">

                            <article className="titulo-modal">
                                <Typography id="modal-modal-title" variant="h3" component="h2">
                                Adicionar comentário
                                </Typography>
                                <button onClick={handleClose}><img src={sair} alt="botão-sair-modal"/></button>

                            </article>


                            <form className="box-form">
                                <label className="labelForm" htmlFor="nome">Nome</label>
                                <input className="inputForm" type="text" id="nome" value={nome} onChange={(event) => setNome(event.target.value)}  />
                                
                                <label className="labelForm" htmlFor="avaliacao">Avalição</label>
                                <section aria-label="selecione uma das cinco opções" id="avaliacao">
                                    <button className="botao-avaliacao av1" onClick={handleClick}>1</button>
                                    <button  className="botao-avaliacao av2" onClick={handleClick}>2</button>
                                    <button  className="botao-avaliacao av3" onClick={handleClick}>3</button>
                                    <button  className="botao-avaliacao av4" onClick={handleClick}>4</button>
                                    <button  className="botao-avaliacao av5" onClick={handleClick}>5</button>
                                </section>

                                <label htmlFor="comentario"></label>
                                <input className="textForm" type="text" placeholder="Expresse sua opinião aqui" id="comentario" value={comentario} onChange={(event) => setComentario(event.target.value)} />
                                <button className="botao-box">
                                    <button className="botao-enviar">Enviar
                                        <span className="seta-enviar"></span>
                                    </button>

                                </button>

                            </form>

                        </Box>
                    </Modal>



                    </div>
                </div>

            </main>
        )

    }
}

export default Obra;
