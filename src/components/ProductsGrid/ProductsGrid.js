import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProductsGrid.module.css';


const productsGrid = () => (
  <div className="row mt-5">
    <div className="col-sm col-lg-3">
    <img className="img-responsive" src="/assets/images/all.jpeg" alt="CupCake - Shop All" />
                <h3>Shop All</h3>
                <p>
                    Make every occasion sweeter.
                </p>
                <Link to="/products" className={classes.Link}>Shop All <i className="fas fa-chevron-right"></i></Link>
    </div>
    <div className="col-sm col-lg-3">
    <img className="img-responsive" src="/assets/images/bday.jpeg" alt="Birthday Cake" />
                <h3>Birthday Cakes</h3>
                <p>
                    Personalized birthday cakes available. Make their birthday this year extra special with a gift 
                    made of their favorite flavor.
                </p>
                <Link to="/" className={classes.Link}>Shop Birthday Cakes <i className="fas fa-chevron-right"></i></Link>

    </div>
    <div className="col-sm col-lg-3">
    <img className="img-responsive" src="/assets/images/wedd.jpeg" alt="Wedding Cake" />
                <h3>Wedding Cakes</h3>
                <p>
                    Our wedding cakes include traditional southern pound cake recipes and use the finest ingredients.
                </p>
                <Link to="/" className={classes.Link}>Shop Wedding Cakes <i className="fas fa-chevron-right"></i></Link>

    </div>
    <div className="col-sm col-lg-3">
    <img className="img-responsive" src="/assets/images/cookies2.jpeg" alt="Cookies" />
                <h3>Cookies</h3>
                <p>
                    Our Cookies are baked fresh daily with premium ingredients and a little bit of love.
                </p>
                <Link to="/" className={classes.Link}>Shop Cookies <i className="fas fa-chevron-right"></i></Link>

    </div>
  </div>
);

export default productsGrid;