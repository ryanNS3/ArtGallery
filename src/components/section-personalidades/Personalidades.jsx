import React from "react";

import "../section-personalidades/style.css"

import linhaPerso from "../../assets/linhaPerso.svg"
import circuloPerso from "../../assets/circuloPerso.svg"

// importando o motion
import { motion} from "framer-motion";

// importando a varivael global
import { GlobalPerson } from "../../context/globalPerson";

import Loading from "../loading/loading";
import Erro from "../error/error";

function Personalidades(){
    const dados = React.useContext(GlobalPerson)
    // referencia para obter o valor da largura do elemento
    const carroussel = React.useRef()
    const [width, setwidth] = React.useState(0)
 
    // calculando a largura do scroll menos a largura total do carrossel
    React.useEffect(() =>{
        setwidth(carroussel.current?.scrollWidth - carroussel.current?.offsetWidth)
    })
    
  
if (dados.dados != null){
    return(
        
        <section className="box-personalidades">

            <motion.article className="titulo-perso"  >
                <span className="linha-deco">
                    <img src={linhaPerso} alt="decoração de escrita" />
                </span>

                <h2>Personalidades</h2>

                <span className="circulo-deco">
                    <img src={circuloPerso} alt="decoração de circulo" />
                </span>

            </motion.article>

            <motion.article className="carroussel"  
            ref={carroussel}
            whileTap={{ cursor : "grabbing"}} >

                <motion.article className="innerCarroussel"  
                drag="x" 
                dragConstraints={{right: 0, left: -width}}
                
                >

                    {dados.dados.map((item,index) =>{
                        return(
                            <motion.section className="item" key={index} >
                                <img key={index}   src={item.linkFoto} alt={`imagem do artista ${item.nomeArtista}`}/>
                                <p className="nomeArtista">{item.nomeArtista}</p>
                            </motion.section>
                        )

                    })}

                   


                </motion.article>

            </motion.article>


                
        </section>
      
    )

}

else  if (dados.loading){
    return(
       <Loading />
    )
}


else if (dados.erro){
    return(
        <Erro />
    )
}
    
}


export default Personalidades;