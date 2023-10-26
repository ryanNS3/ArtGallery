import React, { useEffect } from "react";
import useAxios from "../customHooks/useAxios";



export const GlobalObras = React.createContext();

export const ObrasProvider = ({children}) =>{
    // utlizando a custom hook
    const {dados, loading, erro, requesicao} = useAxios();
    const [obras,setObras] = React.useState()
    


    const [item,setItem] = React.useState(null)

    function handleClick({target}){
        setItem(target.innerText)
    }
    
    if(item !== null){
        useEffect(()=>{
            
                requesicao(`https://hungry-coveralls-dog.cyclic.app/obra/${item}`)
                
            
        }, [item])
    }
    if (item == null){
        useEffect(() =>{
            requesicao(`https://hungry-coveralls-dog.cyclic.app/obra/todos`)
        }, [])

    }
    
    
   return(
    
    <GlobalObras.Provider value={{dados,loading,erro,setItem,item,handleClick,obras}}>
        {children}
    </GlobalObras.Provider>
   )
    
   
   
}

