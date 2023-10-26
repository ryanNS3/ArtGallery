import { BrowserRouter,Routes, Route } from "react-router-dom";
import Obra from "../components/obra/obra";
import { ObrasProvider } from "../context/globalObras";
import { MovimentosProvider } from "../context/globalMovi";
import { PersonProvider } from "../context/globalPerson";
import NavBar from "../components/navBar/navBar";
import Header from "../components/header/Header";
import Personalidades from "../components/section-personalidades/Personalidades";

import { AnimatePresence } from "framer-motion";
import Erro404 from "../components/error/error404";
import Moviment from "../components/moviment/moviment";


const Rota = () =>{
    return(
    
        <BrowserRouter>
            <Routes>

                <Route path="obra/:id" element={
                    <MovimentosProvider>
                        <ObrasProvider>
                            <Obra />
                        </ObrasProvider>
                    </MovimentosProvider>
                
                }/>

            

            <Route path="/" element={
                <>
                  <MovimentosProvider>
                    <ObrasProvider>
                        <NavBar/>
                    </ObrasProvider>
                  </MovimentosProvider>

                  <ObrasProvider>
                    <Header />
                  </ObrasProvider>

                  <PersonProvider>
                    <Personalidades />
                  </PersonProvider>

                  <MovimentosProvider>
                    <ObrasProvider>
                        <Moviment />
                    </ObrasProvider>
                  </MovimentosProvider>
                
                </>
            }
                />
            <Route path="*" element={<Erro404/>}/>

        </Routes>
    </BrowserRouter>
            

        
       

    )
   
}

export default Rota;
