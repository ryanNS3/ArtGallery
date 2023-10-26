import React from "react";
import useAxios from "../customHooks/useAxios";

export const GlobalMovimentos = React.createContext();

export const MovimentosProvider = ({children}) => {
    const [movimentos,setMovimentos] = React.useState()
    const {dados,loading,erro,requesicao} = useAxios()

    React.useEffect(() =>{
        requesicao("https://hungry-coveralls-dog.cyclic.app/movimento/todos")
    }, [])

    dados ? setMovimentos[dados] : setMovimentos[null]
    
    return(
        <GlobalMovimentos.Provider value={{dados,loading,erro}}>
            {children}
        </GlobalMovimentos.Provider>
    )
}

