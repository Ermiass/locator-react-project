import React from 'react';
import { Routes,Link, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Footer from './components/Footer';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family:sans-serif;
  }
  
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Link to="/">
        <Header/>
      </Link>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/resturants/:id" element={<Restaurant />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;