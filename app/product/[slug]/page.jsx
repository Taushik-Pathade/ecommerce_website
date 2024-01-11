"use client"

import { Icon } from '@/Icon'
import Wrapper from '@/components/Wrapper'
import { imagedata } from '@/imagedata'
import Image from 'next/image'
import React, { useState } from 'react'
import Products from '@/components/Products';
import RelatedProduct from '@/components/RelatedProduct';
import ProductDetailCarousel from '@/components/ProductDetailCarousel'





const page = () => {

  const isButtonDisabled = true; // Replace this with your dynamic condition

  return (
    <div className='w-full md:py-20 mt-10'>
      <Wrapper >
        <div className=' flex flex-col lg:flex-row md:px-10 gap-12 lg:gap-24  '>
<div className='w-full md:w-auto flex-[1] '>
<ProductDetailCarousel/>
          {/* <Image src={imagedata.Banner1} className='rounded-xl w-[80%] h-[100%]  ' /> */}

  </div>       

        <div className='flex-1 py-3 '>
          <div className='text-4xl font-semibold mb-2'>
            Jordan Retro 6 G
          </div>
          <div className='text-lg font-semibold mb-5'>
            Men&apos;s Golf Shoes
          </div>
          <div className='text-lg font-semibold  text-black/70 '>
            Rs: 19 695.00
          </div>
          <div className='text-md font-medium text-black/70 mb-20'>
            {`(Also includes all applicable duties)`}
          </div>
          <div className="mb-10">
            <div className="flex justify-between mb-2">
              <div className="text-md font-semi-bold">
                Select Size
              </div>
              <div className="text-md font-semi-bold text-black/70 cursor-pointer">
                Select Guide

              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button className='text-black border rounded-md  py-3  hover:border-black duration-200 disabled:bg-gray-400'>UK 6</button>
              <button className='text-black border rounded-md  py-3  hover:border-black duration-200 disabled:bg-gray-400'>UK 6</button>
              <button className='text-black border rounded-md  py-3  hover:border-black duration-200 disabled:bg-gray-400'>UK 6</button>
              <button className='text-black border rounded-md  py-3  hover:border-black duration-200 disabled:bg-gray-400'>UK 6</button>
              <button className='text-black border rounded-md  py-3  hover:border-black duration-200 disabled:bg-gray-400'>UK 6</button>
              <button className='text-black border rounded-md  py-3  hover:border-black duration-200 disabled:bg-gray-400'>UK 6</button>
              <button className='text-black border rounded-md  py-3  hover:border-black duration-200 disabled:bg-gray-400'>UK 6</button>
              <button disabled={isButtonDisabled} className={`text-black border rounded-md  py-3  hover:border-black duration-200 disabled:bg-gray-400 ${isButtonDisabled ? 'cursor-not-allowed opacity-90' : ''}`}>UK 6</button>




            </div>
            <div className='text-red-600 mt-1'>
              Size Selection is required
            </div>
          </div>
          <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>
            Add To Cart
          </button>
          <button className="w-full py-4 rounded-full border border-black  text-lg font-medium transition-transform flex active:scale-95 gap-2 mb-3 hover:opacity-75 justify-center ">
            WhishList
            <Icon.Io.IoMdHeartEmpty size={20} />
          </button>

          <div>
            <div className="text-lg font-bold mb-5">
              Product Details
            </div>
            <div className='text-md mb-5'>
              Feel unbeatable from the tee box to the final putt in a design ithat's pure early MJ: speed, class and laden with true early '90s touches like visible Air and a translucent rubber sole that continue to stand the test of time. This model fuses the strut of 1st MJ's championship with some of our best golf technology, helping you make a statement of confidence when it comes time to tame the course.
            </div>
            <div className='text-md mb-5'>
              Feel unbeatable from the tee box to the final putt in a design ithat's pure early MJ: speed, class and laden with true early '90s touches like visible Air and a translucent rubber sole that continue to stand the test of time. This model fuses the strut of 1st MJ's championship with some of our best golf technology, helping you make a statement of confidence when it comes time to tame the course.
            </div>
          </div>
        </div>
        </div>
      </Wrapper>
<RelatedProduct/>
    </div>
  )
}

export default page