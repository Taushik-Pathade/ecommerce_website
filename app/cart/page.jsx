import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import { imagedata } from "@/imagedata";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 ">
          <div className=" text-3xl md:text-4xl mb-5 font-semibold leading-tight ">
            Shopping Cart
          </div>
          <div className="flex flex-col lg:flex-row gap-12 py-10">
            <div className="flex-1">
              <div className="text-lg font-bold text-start">Cart Items</div>
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <div className="flex-1 ">
              <div className="text-lg font-bold">Summary</div>
              <div className="p-5 my-5 bg-black/10 rounded-xl">
                <div className="flex justify-between">
                  <div className="uppercase text-md md:text-lg font-medium">
                    SubTotal
                  </div>
                  <div className=" text-md md:text-lg font-medium text-black">
                    Rs: 20/-
                  </div>
                </div>
                <div className="text-sm md:text-md py-5 border-t mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  quod doloribus aliquid rerum laborum dolorum, placeat quia
                  expedita nemo. Fugiat necessitatibus recusandae dolore sequi
                  sint minus, consequuntur ducimus aspernatur maiores?
                </div>
              </div>
              <div>
                <button className="text-white bg-black w-full p-4 rounded-full">
                  CheckOut
                </button>
              </div>
            </div>
          </div>
        </div>
       
      </Wrapper>

{/* empty page */}

      {/* <div className="flex-[2] flex flex-col items-center pb-12 md:-mt-14">
          <Image
            src={imagedata.emptycart}
            width={300}
            height={300}
            className="w-80 md:w-96"
          />
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart
            <br />
            Go ahead and explore top categories
          </span>
        </div> */}
{/* empty page */}

    </div>
  );
};

export default page;
