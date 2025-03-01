import { useState } from "react";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";

function ProductInfo() {
  const [selectedColor, setSelectedColor] = useState("light nude pink");
  const [selectedSize, setSelectedSize] = useState("135 MM");

  return (
    <article className="ml-5 w-[43%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-center max-md:mt-10 max-md:max-w-full">
        <div className="px-11 pt-3 pb-7 w-36 max-w-full text-2xl font-bold text-center text-green-800 uppercase whitespace-nowrap bg-green-200 tracking-[2.4px] max-md:px-5">
          NEW
        </div>

        <h2 className="mt-12 ml-6 text-2xl font-bold text-center text-black uppercase tracking-[2.4px] max-md:mt-10">
          lUNETTES PRADA w464
        </h2>

        <p className="mt-9 ml-8 text-base tracking-widest text-center text-black uppercase">
          350DT
        </p>

       <div className="flex flex-col self-stretch px-6 py-10 mt-8 w-full max-w-3xl mx-auto border border-solid border-black border-opacity-40
       sm:max-w-[95%] sm:px-4 sm:py-8
        max-md:max-w-[100%] max-md:px-6 max-md:py-12">

  <ColorSelector selectedColor={selectedColor} onColorChange={setSelectedColor} />

  <SizeSelector selectedSize={selectedSize} onSizeChange={setSelectedSize} />

  <h3 className="mt-6 text-lg tracking-widest text-black uppercase text-center max-md:text-xl">
    Description:
  </h3>

  <p className="mt-5 text-sm tracking-wide text-black uppercase text-center max-md:text-base max-md:max-w-[90%]">
    Elevate your everyday look with the Prada PR 12VV optical glasses, a
    perfect blend of luxury and functionality. Crafted with precision,
    these eyeglasses feature a lightweight acetate frame that ensures
    all-day comfort while maintaining a sophisticated aesthetic. The
    bold cat-eye silhouette adds a touch of vintage-inspired glamour,
    making them a versatile choice for both work and leisure.
  </p>
</div>


        <button className="self-stretch px-16 py-5 mt-12 text-base font-semibold tracking-widest text-center uppercase bg-green-800 text-zinc-300 max-md:px-5 max-md:mt-10 max-md:max-w-full"
        style={{ backgroundColor: 'rgb(47,107,58)' }}>
          Buy now
        </button>

        <button className="self-stretch px-16 py-5 mt-3.5 text-base font-semibold tracking-widest text-center text-green-800 uppercase bg-white border border-green-800 border-solid max-md:px-5 max-md:max-w-full">
          Add to cart
        </button>

        <button className="mt-7 text-base font-bold tracking-widest text-center text-green-800 underline uppercase">
          More payment methods
        </button>

      </div>
    </article>
  );
}

export default ProductInfo;
