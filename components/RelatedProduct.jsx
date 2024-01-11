import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Products from './Products';
const RelatedProduct = () => {
    
const responsive ={
    desktop:{
      breakpoint:{
        max:3000,
        min:1024
      },
      items:3,
    },
    tablet:{
      breakpoint:{
        max:1023,
        min:464
      },
      items:2,
    },
    mobile:{
      breakpoint:{
        max:767,
        min:0,
      },
      items:1,
    }
  }
  return (
    <div>
              <div className='mt-12  mx-[8%]'>
<div className="">
  <Carousel responsive={responsive} 
  containerClass='-mx-[10px]' itemClass='px-[10px] '
  >
    <Products />
    <Products/>
    <Products/>
    <Products/>
    <Products/>
    <Products/>
  </Carousel>
</div>
</div>
    </div>
  )
}

export default RelatedProduct