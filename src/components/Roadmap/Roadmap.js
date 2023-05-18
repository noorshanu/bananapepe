import React from 'react'
import './Roadmap.css'
import Line from '../../images/line2.png'

import Road from '../../images/road1.png'
import Road2 from '../../images/road2.png'
import Road3 from '../../images/road3.png'
import Road4 from '../../images/road4.png'
import Road5 from '../../images/road5.png'

function Roadmap() {
  return (
    <section className='roadmap'>
      <div className='container'>
      
        <div className='box'>
        <div className='road-head text-center'>
          <h1>ROADMAP</h1>
          <img src={Line} alt=''/>
        </div>

        <div className='container text-center pb-5 pt-5 '>
          <div className='row items-align-center justify-content-center'>
            <div className='col-md-4 position-relative'>
            <img  src={Road} alt="road" className='road-img-1'/>
            <div className='road-content'>
              <h1>Q2 2023</h1>
              <p>Launch the meme coin on a major cryptocurrency exchange.</p>
              <p>Create a strong community around the meme coin.</p>
              <p>Launch a marketing campaign to promote the meme coin</p>

            </div>

            </div>
            <div className='col-md-4'>
            <img  src={Road2} alt="road" className='road-img-1'/>
            </div>

            <div className='col-md-4'>
            <img  src={Road3} alt="road" className='road-img-1'/>
            </div>

            <div className='col-md-6'>
            <img  src={Road4} alt="road" className='road-img-2'/>
            </div>

            <div className='col-md-6'>
            <img  src={Road5} alt="road" className='road-img-2'/>
            </div>



          </div>
        

        </div>
   
      </div>


      </div>
      </section>
  )
}

export default Roadmap