import React from 'react'

import Line from '../../images/line3.png'
import './partner.css'
import Marquee from "react-fast-marquee";

const logos = [
  { icon: "coinmarketcap.svg", styles: { height: "2.4em" } },
  { icon: "coinsniper.png", styles: { height: "3em" } },
  { icon: "dextools.png", styles: { height: "2.8em" } },
  { icon: "dexview.png", styles: { height: "2.4em" } },
  { icon: "gate.png", styles: { height: "2.2em" } },
  { icon: "huobi.svg", styles: { height: "2.2em" } },
  { icon: "pinksale.png", styles: { height: "2.4em" } },
  { icon: "coingeko.webp", styles: { height: "2.8em" } },
];


function Partner() {
  return (
    <section className='partner'>
      <div className='text-center'>
        <a href='https://etherscan.io/address/0x8736513Feab0A09216f8cfa00682F99958258BEA' target='_blank' rel="noreferrer" >
        0x8736513Feab0A09216f8cfa00682F99958258BEA
        </a>

      </div>
      <div className='container text-center'>
        <div className='partner-head text-center'>
          <h1>Partners </h1>
          <img src={Line} alt=''/>

        </div>
        <div className='row '>
        <Marquee className="d-flex ">
          {logos.map((item, i) => {
            const imgStyle = {
              filter: "brightness(0) invert(1)",
              ...item?.styles,
            };

            return (
              <div key={i} className="h-100 d-flex items-center  part">
                <img
                  src={`images/partners/${item.icon}`}
                  alt="img"
                  className="d-block w-auto  part-img"
                  style={imgStyle}
                />
              </div>
            );
          })}
        </Marquee>
          
        </div>





        
      </div>
    </section>
  )
}

export default Partner