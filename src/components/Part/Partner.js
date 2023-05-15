import React from 'react'
import Part from '../../images/part.png'
import Line from '../../images/line3.png'
import './partner.css'

function Partner() {
  return (
    <section className='partner'>
      <div className='container text-center'>
        <div className='partner-head text-center'>
          <h1>Partners and Backers</h1>
          <img src={Line} alt=''/>

        </div>
        <div className='row mob-img'>
          <div className='col-md-3 col-6'>
            <img src={Part} alt=""/>
            
          </div>
          <div className='col-md-3 col-6'>
            <img src={Part} alt=""/>
            
          </div>
          <div className='col-md-3 col-6'>
            <img src={Part} alt=""/>
            
          </div>
          <div className='col-md-3 col-6'>
            <img src={Part} alt=""/>
            
          </div>
          
        </div>


        <div className='row mob-img'>
          <div className='col-md-3 col-6'>
            <img src={Part} alt=""/>
            
          </div>
          <div className='col-md-3 col-6'>
            <img src={Part} alt=""/>
            
          </div>
          <div className='col-md-3 col-6'>
            <img src={Part} alt=""/>
            
          </div>
          <div className='col-md-3 col-6'>
            <img src={Part} alt=""/>
            
          </div>
          
        </div>



        <div className='row mob-img'>
          <div className='col-md-3 col-6'>
            <img src={Part} alt=""/>
            
          </div>
          <div className='col-md-3 col-6'>
            <img src={Part} alt=""/>
            
          </div>
          <div className='col-md-3 col-6'>
            <img src={Part} alt=""/>
            
          </div>
          <div className='col-md-3 col-6'>
            <img src={Part} alt=""/>
            
          </div>
          
        </div>
        
      </div>
    </section>
  )
}

export default Partner