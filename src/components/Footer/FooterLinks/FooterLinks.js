import React from 'react';
import classes from './FooterLinks.module.css';
import { Link } from 'react-router-dom';


const footerLinks = () => (
<div className={classes.Links}>
        <div className={classes.LinksInner}>
          <ul>
            <li><h3>Our Products</h3></li>
            <li><a href="/">Cakes</a></li>
            <li><a href="/">Cupcakes</a></li>
            <li><a href="/">Cookies</a></li>
            <li><a href="/">Chocolate Covered Fruits</a></li>
            <li><Link to="/products">View All Products</Link></li>
          </ul>
          <ul>
            <li><h3>Special Events</h3></li>
            <li><a href="/">Birthday</a></li>
            <li><a href="/">Wedding</a></li>
            <li><a href="/">Smash the Cake</a></li>
            <li><a href="/">Anniversary</a></li>
            <li><a href="/">View All Occasions</a></li>
          </ul>
          <ul>
            <li><h3>Costumer Service</h3></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="/">Allergy & Safety Information</a></li>
            <li><a href="/">Track Your Order</a></li>
            <li><a href="/">Our Stores</a></li>
          </ul>
        </div>
</div>
);

export default footerLinks;