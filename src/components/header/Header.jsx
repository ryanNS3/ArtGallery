import React, { useContext } from "react";
import obra from "../../assets/obra.svg"
import "../header/style.css"
import { Link, animateScroll as scroll } from "react-scroll";

// importando a biblioteca de anumação aos


// importando a biblioteca de slides
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { GlobalObras } from "../../context/globalObras";
import Loading from "../loading/loading";
import Erro from "../error/error";

function Header() {
    const dados = useContext(GlobalObras)

    if (dados.dados != null){
        return(
            <header className="box-header  animacaoEsquerda">
                 <Swiper aria-label="carroussel de imagens "
                    spaceBetween={30}
                    centeredSlides={true}
                    // direction={'vertical'}
                    autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    }}
                    // pagination={{
                    // clickable: true,
                    // }}
                  
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <div className="decoradorObra"></div>
                    {dados.dados.map((item,index) =>{
                        return(
                            <SwiperSlide key={index}>
                                <img src={item.linkFoto} alt={`imagem da obra ${item.nomeObra}`} />
                                <span className="nomeObra">{item.nomeObra}</span>
            
                            </SwiperSlide>

                        )

                    })}
                   
                </Swiper>
    
                <section className="section-titulo" aria-labelledby="titulo-principal">
    
                    <div className="tema-site">
                        <p>Artes</p>
                    </div>
    
                    <h1 id="titulo-principal">Mergulhe nas principais <span>obras</span> da história<span>.</span></h1>
                    <button className="button-movimentos" aria-label="navegação ir a movimentos ">
                        <Link className="link-movimentos"
                        activeClass="active"
                        to="movimentos"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        
                        
                        >Ir a movimentos
                            <span className="decoradorx"></span>
                            <span className="decoradory"></span>
                        
                        
                        </Link>
                    </button>

                </section>
                
            </header>
    )     
    
} 


else if (dados.loading){
    return(
        <Loading/>

    )
}

else if (dados.erro){
    return(
        <Erro />
    )
}

}

export default Header;