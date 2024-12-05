import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import './assets/styles/App.css';

function App() {
 return (
  <Router>
   <Navbar />
   <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/recipe/:id" element={<RecipeDetail />} />
    <Route exact path="/search" element={<Search />} />
   </Routes>
  </Router>
 );
}

export default App;
