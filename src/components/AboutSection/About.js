import React from "react";
import Logo from "../../images/logo.png";
import BananaChart from "../../images/chart.png";
import "./About.css";
import Mission from "./Mission";
function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-sub">
              <span>What is BananaPepe</span> <br />
              <h1>
                {" "}
                <img src={Logo} alt="" className="about-img-1" />
                <span>?</span>
              </h1>
              <p>
                BananaPepe Coin is a community-driven project that is dedicated
                to providing value to its users. It is a decentralized currency
                that is not subject to government or financial institution
                control. BananaPepe Coin is a fast and efficient way to transfer
                value, with transaction fees that are much lower than
                traditional payment methods.{" "}
              </p>
              <p>
                It is a secure currency, with strong cryptography that protects
                it from fraud and theft. BananaPepe Coin is a versatile
                currency, that can be used to buy goods and services online and
                in the real world. I believe that BananaPepe Coin has the
                potential to revolutionize the way we think about money.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="about-box">
              <div className="sub-about-box">
                <div className="d-flex">
                  <p className="p-1">
                  BananaPepe is a robust ecosystem of decentralized applications (dApps) that are built on top of the Pepe Coin blockchain.
                 {" "}
                  </p>
                  <p className="p-2">
                  BananaPepe Coin is a versatile currency, that can be used to buy goods and services online and in the real world.{" "}
              
                  </p>
                </div>
                <div className="text-center">
                  <img src={BananaChart} alt="" />
                </div>

                <div className="d-flex">
                  <p className="p-3">
                  BananaPepe is a decentralized governance system that allows users to vote on important decisions.
                  </p>
                  <p className="p-4">
                  BananaPepe is a built-in staking system that rewards users for holding Pepe Coin.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Mission />
    </section>
  );
}

export default About;
