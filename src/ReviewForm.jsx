import RatingSlider from "./RatingSlider";
import { useState } from "react";

function ReviewForm() {
    const [comfort, setComfort] = useState(50);
    const [style, setStyle] = useState(50);
    const [vision, setVision] = useState(50);
    const [price, setPrice] = useState(50);
  return (
    <section className="flex flex-col items-center w-full">
      <h1 className="mt-24 text-4xl font-bold text-center text-black uppercase tracking-[4px] max-md:mt-10 max-md:max-w-full">
        Review this item below
      </h1>

      <div className="mt-32 max-w-full w-[703px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2cb58af6393785b54b1015fdf62314cad6650a2ccae41aee75704c3599fda1a?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
              alt="Product image 1"
              className="object-contain grow w-full aspect-[0.91] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-3"
            />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d3d35b6b2014ac6a3ac334fb8ec840b5d33272f72935e8cce5c9cb1ae2e4d56?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
              alt="Product image 2"
              className="object-contain grow w-full aspect-[0.96] max-md:mt-3"
            />
          </div>
        </div>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/50e5201cfcde92bdbe5c254b5bf9ac063b1180f2bbc4cf5c31920471abe980e2?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
        alt="Product details"
        className="object-contain mt-4 max-w-full aspect-[1.72] w-[703px]"
      />

      <h2 className="mt-14 ml-2.5 text-4xl font-bold text-center text-black uppercase tracking-[3.6px] max-md:mt-10 max-md:max-w-full">
        lUNETTES PRADA w464
      </h2>

      <h3 className="mt-9 ml-4 text-base tracking-widest text-center text-black uppercase">
        Description:
      </h3>

      <div className="flex flex-col items-center self-stretch px-20 mt-6 w-full max-md:px-5 max-md:max-w-full">
        <p className="text-xs tracking-wider text-center text-black uppercase max-md:max-w-full">
          Elevate your everyday look with the Prada PR 12VV optical glasses, a
          perfect blend of luxury and functionality. Crafted with precision,
          these eyeglasses feature a lightweight acetate frame that ensures
          all-day comfort while maintaining a sophisticated aesthetic. The bold
          cat-eye silhouette adds a touch of vintage-inspired glamour, making
          them a versatile choice for both work and leisure.
        </p>
{/* 1er slider */}
        <div className=" flex flex-col items-center gap-10 self-start mt-16 w-full max-w-[1224px] max-md:mt-10 max-md:max-w-full">
           
                    {/* Slider Component */}
                    <RatingSlider 
        label="1. Confort"
        value={comfort} 
        onChange={setComfort} 
        leftLabel="Très inconfortable" 
        rightLabel="Très confortable" 
      />
            {/* 2eme slider */}
              <RatingSlider 
        label="2. Vision"
        value={vision} 
        onChange={setVision} 
        leftLabel="Mauvaise" 
        rightLabel="Excellente" 
      />   
          
        
        <RatingSlider 
        label="3. Esthetique"
        value={style} 
        onChange={setStyle} 
        leftLabel="Basique" 
        rightLabel="Très stylée" 
      />
<RatingSlider 
        label="4. Rapport Qualité/Prix"
        value={price} 
        onChange={setPrice} 
        leftLabel="Abordable" 
        rightLabel="Cher" 
      />
      </div>
        <h3 className="self-start mt-24 text-2xl font-black tracking-widest text-green-800 uppercase max-md:mt-10 max-md:max-w-full">
          Upload an image of your glasses (Optional)
        </h3>

        <button className="flex gap-5 justify-between self-start py-2.5 pr-2 pl-8 mt-8 max-w-full text-sm font-semibold tracking-widest text-white uppercase bg-green-800 w-[267px] max-md:pl-5 max-md:ml-2">
          <span className="my-auto">Upload an image</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/63ac486cc7d90df703c044351f5b9e9998fa44dc3e928043d0297379a904b285?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
            alt="Upload icon"
            className="object-contain shrink-0 aspect-[1.07] w-[30px]"
          />
        </button>

        <div className="self-start mt-7 w-full text-base leading-snug min-h-[131px] max-md:max-w-full">
          <label className="text-stone-900 max-md:max-w-full">
            Leave an additional comment: (Optional)
          </label>
          <div className="flex overflow-hidden relative gap-1 items-start px-4 py-3 mt-2 w-full bg-white rounded-lg border border-solid border-zinc-300 min-h-20 min-w-60 text-zinc-400 max-md:max-w-full">
            <textarea
              className="z-0 flex-1 shrink basis-0 max-md:max-w-full bg-transparent border-none outline-none resize-none"
              placeholder="Another comment...."
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c095b3d85aeea067dcde1b5e80aa5fff6053475ff4534c96008246c33fa4dc1e?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
              alt="Resize handle"
              className="object-contain absolute bottom-1.5 z-0 shrink-0 aspect-square h-[7px] right-[5px] w-[7px]"
            />
          </div>
        </div>

        <button className="px-16 py-8 mt-5 max-w-full text-2xl font-semibold text-center uppercase bg-green-800 text-zinc-300 tracking-[2.4px] w-[678px] max-md:px-5">
          Send review
        </button>
      </div>
    </section>
  );
}

export default ReviewForm;
