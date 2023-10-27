import React, { useContext, useState, useEffect } from "react";
import "../moviment/style.css"
import seta from "../../assets/seta.png"
import informacao from "../../assets/informacoes.png"

import "../header/style.css"
import { Link, animateScroll as scroll } from "react-scroll";

// importando a biblioteca de slides
import { GlobalMovimentos } from "../../context/globalMovi";
import Loading from "../loading/loading";
import Erro from "../error/error";
import { GlobalObras } from "../../context/globalObras";


export default function Moviment() {
   
    const dados = useContext(GlobalMovimentos);


    if (dados.dados != null) {
        const [indice, setIndice] = useState(0);
        const [quadrado, setQuadrado] = useState([]);
        function pass(op) {
            if (op === '+') {
                if ((indice < (5 - 1)) && (indice < 5)) {
                    setIndice(indice + 1);
                }
                else {
                    setIndice(0)
                }
            } else {
                if (indice !== 0) {
                    setIndice(indice - 1)
                }
                else {
                    setIndice(4)
                }
            }
        }

        useEffect(() => {
            let cont = 0;
            var animacao = [];
            let div = '';

            while (cont !== 5) {
                if (cont === indice) {
                    div = 'w-6 h-4 bg-orange-200 border border-orange-300 rounded-md md:w-12 md:h-8';
                    animacao.push(div);
                }
                else {
                    div = 'w-4 h-4 border border-orange-300 rounded-md md:w-12 md:h-8 md:w-8'
                    animacao.push(div)
                }
                cont++;
            }
            setQuadrado(animacao);
        }, [indice])
        
        useEffect(() => {
            const interval = setInterval(() => {
                pass('+');
            }, 5000);

            return () => clearInterval(interval);
        }, [indice]);
        return (
            <article className='grid grid-cols-1 lg:w-full lg:p-2 animacaoEsquerda movimentos'>
                <div className="grid grid-cols-2 mb-10">

                        <h3 className='text-4xl font-sans pl-4 titulo-movimento'>{dados.dados[indice].nomeMovimento}</h3>
                        <div className='hidden gap-1 justify-end md:flex mg-10' id='blocos'>
                            {quadrado.map((item, index) => <button key={index} className={item}></button>)}
                        </div>
                </div>

                <div className='md:gap-3 sm:grid grid-cols-2 '>


                    <div className='Imagens md:grid place-self'>
                        <div className=' max-md:w-64 sm:h-4/5 ml-2 place-self-start relative w-full h-[400px] mt-5 rounded md:w-full md:h-[600px] inner-imgs'>
                            <img
                                className='sm:w-42	 sm-h-38  w-92 h-full  bottom-2 rounded img-movimento'
                                src={dados.dados[indice].obras[0].linkFoto}
                                alt={`${dados.dados[indice].nomeObra}`}
                            />
                               
                        </div>
                    </div>

                    <div className='Informacoes mt-12 sm:mt-0'>


                        <div className='body-informação grid'>
                            <div className='flex gap-8 w-full md:gap-6 md:p-5'>
                                <div className='w-8 h-8 rounded-full bg-gray-500 relative md:w-16 md:h-16'>
                                    <img
                                        className='  w-8 h-8 rounded-full md:w-16 md:h-16 '
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4PGyba3BR8tRfKdfHPoYo-2C6rPO8vWeTCMBo6TTfy02956e'
                                        alt=''
                                    />
                                </div>
                                <p className='text-sm md:text-2xl w-4/6 self-center '>{dados.dados[indice].obras[indice].fk_nomeArtista}</p>
                                <p className='border-2 border-orange-300 p-2  justify-self-end self-center text-right text-sm md:text-2xl rounded-lg data'>{dados.dados[indice].dataTermino}</p>
                            </div>

                            <article className='descricao pt-5 items-center md:m-0  md:pt-10 md:px-5 ' >

                                <div className='decorador-descri w-8 h-4 relative md:w-16 md:h-6'>
                                    <h3 className='text-lg  mt-8 md:text-3xl absolute bottom-[.5px]'>Descrição</h3>
                                </div>

                                {/* text-xs mt-5 w-72 bg-orange-200 md:w-96 lg:w-full md:h-80 md:text-base xl:text-xl pl-6 pr-6 pt-3 pb-3  */}
                                <p className='text-md mt-5 w-72 md:w-96 lg:w-full md:h-80 md:text-base xl:text-xl pl-6 pr-6 pt-3 pb-3  descricao-movi w-full'>{dados.dados[indice].descricaoMovimento}</p>
                            </article>

                            <div className='btns flex md:gap-96	 sm:gap-12 gap-4'>
                                <div className=' my-6 border-2 ml-2 border-orange-300 rounded hover:bg-orange-100 w-20 h-12'>
                                    <button className="ml-1 mt-1 bg-white border-2 border-orange-300 rounded align-middle hover:bg-orange-100 w-20 h-12" onClick={() => pass('-')} type="button">
                                        <img
                                            className='w-3 m-auto rotate-180'
                                            src={seta}
                                            alt=''
                                        />
                                    </button>

                                </div>

                                <div className=' my-6 border-2 mr-3 border-orange-300 rounded  hover:bg-orange-100 w-20 h-12'>
                                    <button className=" ml-1 mt-1 bg-white border-2 border-orange-300 rounded align-middle hover:bg-orange-100 w-20 h-12" onClick={() => pass('+')} type="button">
                                        <img
                                            className='w-3 m-auto'
                                            src={seta}
                                            alt=''
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

        )

    }


    else if (dados.loading) {
        return (
            <Loading />

        )
    }

    else if (dados.erro) {
        return (
            <Erro />
        )
    }

}
