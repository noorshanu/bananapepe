import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, } from 'swiper/modules';
function RoadMapMob() {
  return (
    <div className='road-map-mob'>
 <div className="eco-grid-2">
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
             <div className='container'>
                <div>
                <div className="road_num">
              <h1>01</h1>
            </div>
                </div>
                <div>
                <div className="road_details">
                <h2>Q2 2023</h2>
              <ul>
                <li>Launch the meme coin on <br/> a major cryptocurrency exchange.</li>
                <li>Create a strong community  <br/>around the meme coin.</li>
                <li>Launch a marketing campaign <br/>to promote the meme coin.</li>
              
              </ul>
              </div>
                </div>

             </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='container'>
                <div>
                <div className="road_num">
              <h1>02</h1>
            </div>
                </div>
                <div>
                <div className="road_details">
                <h2 className="" style={{textAlign:'left'}}>Q3 2023</h2>
              <ul>
                <li>Partner with businesses to <br/> accept the meme coin as payment.</li>
                <li>Launch a decentralized application<br/> (dApp) that uses the meme coin.</li>
                <li>Launch a staking program that rewards <br/> users for holding the meme coin.</li>
           
              </ul>
              </div>
                </div>

             </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='container'>
                <div>
                <div className="road_num">
              <h1>03 </h1>
            </div>
                </div>
                <div>
                <div className="road_details">
                <h2>Q4 2023</h2>
              <ul>
                <li>Launch a meme coin-based game.</li>
                <li>Launch a meme coin-based NFT marketplace.</li>
               
                <li>List the meme coin on more <br/> cryptocurrency exchanges.</li>
               
              </ul>
              </div>
                </div>

             </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='container'>
                <div>
                <div className="road_num">
              <h1>04</h1>
            </div>
                </div>
                <div>
                <div className="road_details">
                <h2 style={{textAlign:'left'}}>Q1 2024 - Q2 2024</h2>
              <ul>
                <li>Launch a meme coin-based charity.</li>
                <li>Launch a meme coin-based <br/> educational program.</li>
                <li>Continue to grow the meme <br/> coin community.</li>
                <li>Launch on exchange</li>
                <li>Launch Meme wallet</li>
              
              </ul>
              </div>
                </div>

             </div>
            </SwiperSlide>
         
           
          
        
          </Swiper>
        </div>


    </div>
  )
}

export default RoadMapMob