import React from 'react'
import './Token.css'

import Tokoimg from '../../images/tokeno.png'
import Tokoimg2 from '../../images/token-mob.png'

function Tokonomic() {
  return (
    <section className='token'>
      <div className='container'>
        <div className='head-toko'>
        <h1>TOKENOMICS</h1>
        </div>
      
    <div className='text-center pt-8 pb-8 m-auto'>
    <img src={Tokoimg} alt='' className='toko-img-1' />
    <img src={Tokoimg2} alt='' className='toko-img-2' />
    </div>

    
     

      </div>
      
      </section>
  )
}

export default Tokonomic