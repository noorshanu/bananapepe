import React from "react";
import "./Hero.css";
import HeroImg from "../../images/hero.png";
import HeroImg2 from "../../images/hero1.png";
import Side from "../../images/side-1.png";
import ConnectSection from "./ConnectSection";

function Hero() {
  return (
    <>
      <img className="side-left" src={Side} alt="" />
      <img className="side-right" src={Side} alt="" />
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-2 ">
              <h1 className="hero-top-h">Future of Pepe To Earn</h1>
              <p className="hero-top-p">
                With BAPEPE coin, you can stake your earnings to win PepeCoin
                and even PEPE NFTs.
              </p>
              <div>
                <span className="hero-top-s1">Powered by </span> <br />
                <span className="hero-top-s2">ETH Chain</span>
              </div>
            </div>

            <div className="col-md-6">
              <div className="hero-img-1">
                <img src={HeroImg} alt="" />
              </div>
            </div>

            <div className="col-md-3 hero-3rd">
              <img src={HeroImg2} alt="" className="hero-img-2" />
              <p className="hero-para">
                By achieving a market capitalization of over $1 billion in
                record time and being listed on Binance with Floki, Peperevived
                memes in 2023. The next step is for Pepeki, the offspring of
                Pepe and Floki, to break both records and become the most
                bullish combination.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ConnectSection />
    </>
  );
}

export default Hero;
