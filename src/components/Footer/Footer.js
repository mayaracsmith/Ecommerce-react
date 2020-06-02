import React from 'react';
import FooterLinks from './FooterLinks/FooterLinks';
import classes from './Footer.module.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


const footer = () => (
    <div className={classes.All}>
        <FooterLinks />
    <div className={classes.Footer}>
        <div className={classes.FooterInner}>
          <div><i className="fas fa-globe fa-2x"></i><a href="/"> English (United States)</a></div>
          <div>
            <a className={classes.SocialIcon} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a className={classes.SocialIcon} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a className={classes.SocialIcon} href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <ul>
            <li>&copy; Caldeira's Cakes 2020</li>
          </ul>
        </div>
    </div>
    </div>
);


export default footer;