
import { imagedata } from "@/imagedata";
import Image from "next/image";

 // Replace with the actual path


const ProductDetailCarousel = () => {
  return (
<>
<Image src={imagedata.Banner1} className='rounded-xl w-[100%] h-[60%] mt-20 mx-auto ' /> 
</>
  );
};

export default ProductDetailCarousel;