import React from "react";
import "./Roadmap.css";
import LightImg from '../../Assets/elements/light-line.svg'

import RoadEle2 from '../../Assets/elements/road-ele2.png'

import RoadEle4 from '../../Assets/elements/road-ele4.png'
// import RoadMapMob from "./RoadMapMob";

import "./Road.css";
import RoadMapMob from "./RoadMapMob";

function Roadmap() {
  return (

    <>
    {/* <img src={BackBG} alt="" className="road-dapp" /> */}
    {/* <img src={BackBGm} alt="" className="road-dapp2" /> */}
    <section className="Roadmap" id="roadmap">
      <div className="container">
        <div className="header-text text-center">
          <h2>Roadmap</h2>
          <hr className="low-hr" />
        </div>
      <RoadMapMob/>
        {/* <img src={RoadEle3} alt="" className="road-ele3"/> */}
     <div className="pc-roadmap">
     <div className="first-b">
          <div className="road_num">
            <h1 data-aos="fade-up-left"  >01</h1>
          </div>
          <div className="road-d-box">
            <div className="road_details" data-aos="fade-up-right"  >
              <h2>Q2 2023</h2>
              <ul>
                <li>Launch the meme coin on <br/> a major cryptocurrency exchange.</li>
                <li>Create a strong community  <br/>around the meme coin.</li>
                <li>Launch a marketing campaign <br/>to promote the meme coin.</li>
              
              </ul>
            </div>
            <img src={LightImg} alt="" className='light-icon3'/>
          </div>
        </div>

        <div className="first-b">
          <div className="road-d-box">
            <div className="road_details2"  data-aos="fade-up-left"  >
              <h2 className="" style={{textAlign:'left'}}>Q3 2023</h2>
              <ul>
                <li>Partner with businesses to <br/> accept the meme coin as payment.</li>
                <li>Launch a decentralized application<br/> (dApp) that uses the meme coin.</li>
                <li>Launch a staking program that rewards <br/> users for holding the meme coin.</li>
           
              </ul>
              {/* <img src={Roadr} alt="" className="roadr"/> */}
            </div>
            <img src={LightImg} alt="" className='light-icon4'/>
          </div>

          <div className="road_num2">
            <h1 data-aos="fade-up-right"  >02</h1>
          </div>
        </div>




        <div className="first-b">
          <div className="road_num">
            <h1 data-aos="fade-up-left"  >03</h1>
          </div>
          <div className="road-d-box">
            <div className="road_details" data-aos="fade-up-right"  >
             <h2>Q4 2023</h2>
              <ul>
                <li>Launch a meme coin-based game.</li>
                <li>Launch a meme coin-based NFT marketplace.</li>
               
                <li>List the meme coin on more <br/> cryptocurrency exchanges.</li>
               
              </ul>
              
              {/* <img src={Roadl} alt="" className="roadl"/> */}
            </div>
            <img src={LightImg} alt="" className='light-icon3'/>
          </div>
        </div>

{/* <img src={RoadEle} alt="" className="road-ele"/> */}
<img src={RoadEle2} alt="" className="road-ele2"/>

        <div className="first-b">
          <div className="road-d-box">
            <div className="road_details2" data-aos="fade-up-left"  >
              <h2 style={{textAlign:'left'}}>Q1 2024 - Q2 2024</h2>
              <ul>
                <li>Launch a meme coin-based charity.</li>
                <li>Launch a meme coin-based <br/> educational program.</li>
                <li>Continue to grow the meme <br/> coin community.</li>
                <li>Launch on exchange</li>
                <li>Launch Meme wallet</li>
              
              </ul>

            </div>
            <img src={LightImg} alt="" className='light-icon4'/>
          </div>

          <div className="road_num2">
            <h1 data-aos="fade-up-right"  >04</h1>
          </div>
        </div>

     </div>
  

      </div>
      <img src={RoadEle4} alt="" className="road-ele4"/>
    </section>
  </>
  );
}

export default Roadmap;
