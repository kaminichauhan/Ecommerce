import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from './Contact';
import Products from './Products';    
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';

const App = () => {
  const theme = {
    colors: {
      bg: "lightgrey",
    },
    media:
    {
      tab:"998px",
      mobile:"768px"
      

    }
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle/>
          <Header/>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Products/:id" element={<SingleProduct />} />
            
            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )

};

export default App;

