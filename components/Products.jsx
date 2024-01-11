import { imagedata } from '@/imagedata';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Products = ({className}) => {
  return (
    <Link href={`/product/1`} className={`relative w-[100%]  p-2 rounded-lg || ${className || ""}`}>
      {/* Add styles for the first product */}
      <Image src={imagedata.Banner1} className='w-full' />
      <div className='flex'>
        <div>
          <h2 className=' text-sm font-medium'>Fucking Shoes</h2>
          <p className='text-sm'>Rs 500</p>
        </div>
        <p className='ml-auto text-sm font-bold text-green-400'>20% OFF</p>
      </div>
    </Link>
  );
};

export default Products;