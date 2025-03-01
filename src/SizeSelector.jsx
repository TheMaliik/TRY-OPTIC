function SizeSelector({ selectedSize, onSizeChange }) {
    const sizes = ["120 MM", "125 MM", "130 MM", "135 MM", "140 MM", "145 MM"];
  
    return (
      <>
        <p className="mt-6 ml-3 text-base tracking-widest text-black uppercase max-md:ml-2.5">
          Temple size length :
        </p>
        <div className="flex flex-wrap gap-4 self-stretch mt-9 text-xs tracking-wider text-center text-black uppercase">
          {sizes.map((size) => (
            <button
              key={size}
              className={`px-3 pt-2 pb-3.5 border-2 border-black bg-white ${
                selectedSize === size ? "bg-gray-200" : "bg-white"
              }`}
              style={{
                border:"2px solid black",
                backgroundColor: selectedSize === size ? "oklch(0.696 0.17 162.48)" : "white",
                boxShadow: selectedSize === size ? "0 0 0 2px #333" : "none", // Add subtle box shadow to highlight the selection
              }}
              onClick={() => onSizeChange(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </>
    );
  }
  
  export default SizeSelector;
  