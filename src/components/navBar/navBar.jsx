import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";

import "../navBar/style.css"
import logo from "../../assets/logo.svg"

import { GlobalMovimentos } from "../../context/globalMovi";
import { GlobalObras } from "../../context/globalObras";

import Loading from "../loading/loading";
import Erro from "../error/error";
import useMedia from "../../customHooks/useMedia";

function NavBar(){
    // contexto
    const dados = useContext(GlobalMovimentos);
    const obras = useContext(GlobalObras)

    // menu mobile
    const mobile = useMedia("(max-width: 900px)")
    const [ativoMenu,setAtivoMenu] = React.useState(false)

    // obtendo o valor do item do drop menu para fazer a requisição
    function handleClick(event){
        obras.setItem(event.target.innerText)
    }

if (dados.dados !== null){
    return(

    <nav>

        <div className="logotipo">
            <div className="imagem">
                <img src={logo} alt="imagem da logo gallery of history" />

            </div>

            <div>
                <span>Art Gallery</span>
            </div>

        </div>

        {mobile &&
         <button onClick={(() => setAtivoMenu(!ativoMenu))} className={`${"botaoMobile"}  ${ativoMenu && "botaoAtivo"}`}></button>
        }
        
        <ul className={`${mobile ? "box-lista-mobile" : "box-lista"} ${ativoMenu && "navMobileAtivo"}`} aria-label="navegação primária">

            {dados.dados.map((item,index) =>{
                return(
                    <li className="box-botton" key={item.nomeMovimento}>
                        <Link to={"/"} className="link-menu" >{item.nomeMovimento}</Link>
                        <div className="seta"></div>

                        <ul className="drop-Menu" key={index}>
                            {item.obras.map((obras) =>{
                                return(
                                    <li>
                                        <Link onClick={handleClick} to={`obra/${obras.nomeObra}`} key={item.nomeObra}  >{obras.nomeObra}</Link>
                                    </li>

                                )
                            })}
                        </ul>

                    </li>

                )
            })}

        </ul>
    </nav>

    

    )
}

else if (dados.loading){
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


export default NavBar;