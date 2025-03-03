function ProductCatalog() {
  return (
    <section className="self-center mt-14 w-full max-w-[1267px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:items-center">
        {/* First Product */}
        <div className="w-[26%] max-md:w-full">
          <div className="grow max-md:mt-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0eb0416c75f50b37e58f466144a2476ce97fe3a40bab4f6c0427d848cb40e058?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
              alt="Eyeglasses showcase"
              className="object-contain w-full aspect-[1.57] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            />
            <a href="#" target="_blank" rel="noopener noreferrer" className="max-md:hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/adc5d5b8f37a72a9bd7f5c38992a7d08c9667e96710907bf6ea329cf53e380b4?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
                alt="swipe left"
                className="object-contain mt-3 aspect-[1.11] w-[71px]"
              />
            </a>
          </div>
        </div>

        {/* Second Product */}
        <div className="ml-5 w-[26%] max-md:w-full">
          <div className="px-1.5 w-full text-base max-md:text-xs font-bold tracking-wider text-center text-black uppercase bg-green-200 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-5">
            <div className="flex relative z-10 flex-col px-10 pt-16 pb-16 h-[200px] max-md:h-[250px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb9188978b69c9a2d068b23716ce80f50abace7bdcaf765c5aa286ff584b9c6e?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
                alt="Recycled plastic glasses"
                className="object-cover absolute inset-0 size-full"
              />
              <p className="relative z-20 mt-20">Lunettes en Plastique recyclé</p>
            </div>
          </div>
        </div>

        {/* Third & Fourth Products in Row (Stacked on Small Screens) */}
        <div className="ml-5 w-6/12 max-md:w-full">
          <div className="flex flex-col w-full max-md:items-center">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:items-center">
                {/* Third Product */}
                <div className="w-6/12 max-md:w-full">
                  <div className="flex flex-col py-4 pl-3 w-full text-base max-md:text-xs font-bold tracking-wider text-center text-black uppercase bg-green-200 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-5">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9365b95d2562f81bdfc438b53ea4fafe888b6c128c4cb1f6727cb5fa9a41da6b?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
                      alt="Memory metal glasses"
                      className="object-contain w-full aspect-[2.39]"
                    />
                    <p className="self-start mt-2.5 text-base max-md:text-xs">
                      Lunettes en Métal à mémoire (Flexon)
                    </p>
                  </div>
                </div>

                {/* Fourth Product */}
                <div className="ml-5 w-6/12 max-md:w-full">
                  <div className="flex flex-col pt-3.5 pb-7 w-full text-base max-md:text-xs font-bold tracking-wider text-center text-black uppercase bg-green-200 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-5">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/55aaff567432a8ed7e612611e320d848bae43d8caa4c759e2e01be15484327b1?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
                      alt="Stainless steel glasses"
                      className="object-contain z-10 w-full aspect-[2.03]"
                    />
                    <p className="self-center -mt-6 w-[312px] text-base max-md:text-xs">
                      Lunettes en Acier <br /> inoxydable
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Swipe Right Image (Hidden on Small Screens) */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="max-md:hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/431c0107fba9cc0226b897e9d62417e5dcf37c39f3f07faf9e4c4c5c2dfb3179?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
                alt="swipe right"
                className="object-contain self-end mt-3 aspect-[1.11] w-[71px] ml-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCatalog;
