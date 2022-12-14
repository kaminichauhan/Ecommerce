import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from './reducer/ProductReducer';

const Mycontext = createContext();
const API_URL = 'https://api.pujakaitem.com/api/products'

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuresProducts: [],
  isSingleLoading:false,
  singleProducts:{},
  isSingleError:false,

};
const ContextAPI = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
 
  const getProductsData = async (url) => {
    dispatch({ type: "SET_LOADING" })
    try {
      const res = await axios.get(url);
      const product = res.data;
       console.log(  product);
      dispatch({ type: "SET_API_DATA", payload: product });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }


    // setStoreData(res.data);
  };
  const getSingleProductsData = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try{
      const mydata = await axios.get(url);
      const singleProduct =await mydata.data;
      dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct});
    }catch(error){
dispatch({type: "SET_SINGLE_ERROR"});
    }
  };

  useEffect(() => {
    getProductsData(API_URL);
  }, [])

  return (
    <Mycontext.Provider value={{ ...state ,getSingleProductsData }}>
      {children}
    </Mycontext.Provider>
  );
}
const useProductContext  = () => {
  return useContext(Mycontext);
}


export { ContextAPI, Mycontext, useProductContext };
