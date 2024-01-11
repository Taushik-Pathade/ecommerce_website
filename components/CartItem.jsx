import { imagedata } from "@/imagedata";
import Image from "next/image";
import React from "react";

const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-5 border-b relative">
      <div className="shrink-0 aspect-square w-12 md:w-[120px]">
        <Image src={imagedata.product1} />
      </div>
      <div className=" w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
    <div className="md:flex flex-col">
    <div>
       <div className="text-lg md:text-2xl font-semibold text-black/80">
            Jordan Retro 6 G
          </div>
          <div className="text-sm md:text-md font-medium text-black/70 block">
            Men&apos;s Golf Shoes
          </div>
       </div>
          <div className=" right-5 text-sm md:text-md font-bold text-black/70 mt-2">
            Rs: 20/-
          </div>
    </div>

          <div className="flex items-center gap-1 ">
            <div className="font-semibold">Size:</div>{" "}
            <select className="hover: text-black border border-black rounded-sm">
              {" "}
              <option value="1">UK 6</option> <option value="2">UK 6.5</option>{" "}
              <option value="3">UK 7</option> <option value="4">UK 7.5</option>{" "}
              <option value="5">UK 8</option> <option value="6">UK 8.5</option>{" "}
              <option value="7">UK 9</option> <option value="8">UK 9.5</option>{" "}
              <option value="8">UK 10</option>{" "}
              <option value="8">UK 10.5</option>{" "}
              <option value="8">UK 11</option>{" "}
            </select>
          </div>
               <div className="flex items-center gap-1 ">
            <div className="font-semibold">Size:</div>{" "}
            <select className="hover: text-black border border-black rounded-sm">
              {" "}
              <option value="1">UK 6</option> <option value="2">UK 6.5</option>{" "}
              <option value="3">UK 7</option> <option value="4">UK 7.5</option>{" "}
              <option value="5">UK 8</option> <option value="6">UK 8.5</option>{" "}
              <option value="7">UK 9</option> <option value="8">UK 9.5</option>{" "}
              <option value="8">UK 10</option>{" "}
              <option value="8">UK 10.5</option>{" "}
              <option value="8">UK 11</option>{" "}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
