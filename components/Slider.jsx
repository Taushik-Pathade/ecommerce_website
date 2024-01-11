"use client";
import { Icon } from '@/Icon';
import { imagedata } from '@/imagedata';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Slider = () => {
  const images = [imagedata.slide1, imagedata.slide2, imagedata.slide3];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1 + images.length) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    // Auto play 
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

 
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="relative ">
      <button onClick={prevImage} className="absolute text-white bg-black p-2 bottom-0 right-7">
        <Icon.Fa.FaArrowLeft size={10} />
      </button>
      <button onClick={nextImage} className="absolute text-white bg-black p-2 bottom-0 right-0">
        <Icon.Fa.FaArrowRight size={10} />
      </button>

      <Image
        src={images[currentImage]}
        className="w-[100%] h-[50%]"
      />

      <Link href={"#"} className='absolute bottom-10 bg-white text-black font-bold md:text-lg md:p-2 md:px-4 p-1 px-2 text-xs  shadow-xl'>SHOP NOW</Link>
    </div>
  );
};

export default Slider;
