import React from 'react';
// import classes from './Slider.module.css';

 const slider = () => (
      <div className="row mt-5">
        <div className="col-md-12 col-lg-12">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/assets/images/smashcake.jpeg" className="d-block w-100" alt="baby eating cake" />
            </div>
            <div className="carousel-item">
              <img src="/assets/images/bdaycake.jpeg" className="d-block w-100" alt="birthday cake" />
            </div>
            <div className="carousel-item">
              <img src="/assets/images/cookies.jpeg" className="d-block w-100" alt="cookies" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        </div>
      </div>
    );

export default slider;