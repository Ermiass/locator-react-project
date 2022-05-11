import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';

const App = () => {
  return (
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="resturants/:id" element={<Restaurant />} />
      </Route>
    </Routes>
    </div>
  );
};

export default App;