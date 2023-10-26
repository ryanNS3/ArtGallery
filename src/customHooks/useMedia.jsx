import React from "react";

const useMedia = (media) =>{
    const [match,setMatch] = React.useState(null)

    React.useEffect(() =>{
        function changeMatch(){
            // obtendo o valor de verdadeiro se a proporção passar do limite caso contrário o valor será de falso
            const {matches} = window.matchMedia(media) 
            setMatch(matches)
        }
        //chamando a função para que funcione assim que o site for redenrizado
        changeMatch()
        window.addEventListener("resize" , changeMatch)
        // removendo o evento assim que função terminar
        return () =>{
            window.removeEventListener("resize", changeMatch)

        }
        
    }, [media])


    return match
}
export default useMedia;