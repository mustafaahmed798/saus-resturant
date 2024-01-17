import React from "react";
import Header from "./Header";
import { Fragment } from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import prideImg from "./../../img/1.png";
import makeImg from "./../../img/2.png";
import Data from "../../Data";
import n1 from "./../../img/n1.jpg";
import n2 from "./../../img/n2.jpg";
const Home = () => {
  const blogItem = Data.map((item) => {
    return (
      <div className="col-md-4">
        <div className="box">
          <img src={item.img} alt=""/>
          <h5>{item.titlt}</h5>
          <span>{item.time}</span>
          <h5>{item.price}</h5>
        </div>
        <button href="#">Order Now</button>
      </div>
    );
  });
  return (
    <Fragment>
      <Header />
      <section className="num">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1423+</h2>
              <h6>saving</h6>
            </div>
            <div className="col-md-3">
              <h2>4257+</h2>
              <h6>photos</h6>
            </div>
            <div className="col-md-3">
              <h2>1340+</h2>
              <h6>rockets</h6>
            </div>
            <div className="col-md-3">
              <h2>8420+</h2>
              <h6>globes</h6>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pride">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={prideImg} title="prideimg" alt="" />
              </div>
              <div className="col-md-6">
                <h2>
                  We pride ourselves on making real food from the best
                  ingredients.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.
                </p>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="make">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>
                  We make everything by hand with the best possible ingredients.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.Far far away, behind the word mountains,
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts.
                </p>
                <ul>
                  <li>Etiam sed dolor ac diam volutpat.</li>
                  <li>Erat volutpat aliquet imperdiet.</li>
                  <li>purus a odio finibus bibendum.</li>
                </ul>
                <button>Learn More</button>
              </div>
              <div className="col-md-6">
                <img src={makeImg} title="makeimg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="stomach">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h2>
                  When a man's stomach is full it makes no
                  <br /> difference whether he is rich or poor.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio <br /> finibus bibendum in sit amet leo.
                  Mauris feugiat erat tellus.
                </p>
                <a href="#" className="fa fa-play">
                  Watch Our Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="explore">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h2>Explore Our Food</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet <br /> leo.
                  Mauris feugiat erat tellus. Far far away, behind the word
                  mountains, far from the countries Vokalia and <br />{" "}
                  Consonantia, there live the blind texts. Separated they live
                  in Bookmarksgrove.
                </p>
              </div>
            </div>
            <div className="row">{blogItem}</div>
          </div>
        </div>
      </section>
      <sectio>
        <div className="slider">
          <h2>Testimonials</h2>
          <div className="slide">
            <Carousel>
              <Carousel.Item>
                <img src={n1} />

                <Carousel.Caption>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries <br /> Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <span>Maccy Doe - Front End</span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={n2} />
                <Carousel.Caption>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries <br /> Vokalia and Consonantia, there live the blind
                    texts. Separated they <br /> live far from the countries Vokalia.
                  </p>
                  <span>Johnthan Doe - UX Designer</span>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </sectio>
    </Fragment>
  );
};

export default Home;
