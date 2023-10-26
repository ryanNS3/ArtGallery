import axios from "axios";


import React from 'react';

const useAxios = () => {
  const [dados, setDados] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const requesicao = React.useCallback(async (url) => {
    let response;
    let json;

    try {
      setErro(null);
      setLoading(true);
      response = await axios.get(url);
      json = await response.data;

      if (response.status !== 200){
        throw new Error(json.message);
        } 
    } 
    catch (err) {
      json = null;
      setErro(err.message);
    } 
    finally {
      setDados(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { dados, loading, erro, requesicao };
};


export default useAxios;