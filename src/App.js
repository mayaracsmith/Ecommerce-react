import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
    <Route exact path="/" component ={HomePage} />
    <Route exact path="/products" component ={ProductsPage} />
    <Route exact path="/contact" component ={ContactPage} />
      </div>
    </Router>
  );
}

export default App;
