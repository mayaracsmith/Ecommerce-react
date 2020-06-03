import React from 'react';
import classes from './Navigation.module.css';
import cakeLogo from '../../assets/img/logo.jpeg';
import { Link } from 'react-router-dom';
import Popover from '../popover/Popover'


const navigation = () => (
    <div className={classes.MainNav}>
                <img src={cakeLogo} alt="logo" className={classes.Logo} />
                <Link to="/"><h1>Caldeira's Cakes</h1></Link>
                
            <ul className={classes.MainMenu}>
                <li className={classes.Hide}><Link exact={true} to="/products">Shop All</Link></li>
                <li className={classes.Hide}><Link exact={true} to="/">Birthday</Link></li>
                <li className={classes.Hide}><Link exact={true} to="/">Wedding</Link></li>
                <li className={classes.Hide}><Link exact={true} to="/">Cookies</Link></li>
              </ul>

              <ul className={classes.RightMenu}>
                <li>
                  <input type="text" placeholder="Search.." />
                </li>
                <li>
                  <a href="/">
                    <i className="fas fa-search"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                  <i className="fas fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>
    </div>
);


export default navigation;