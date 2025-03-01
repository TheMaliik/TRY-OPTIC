import ReactSlider from "react-slider";

const RatingSlider = ({ label, min = 0, max = 100, value, onChange, leftLabel, rightLabel }) => {
  return (
    <div className="w-full max-w-[1224px] mt-10">
      <h3 className="text-center text-4xl font-black text-green-800 uppercase tracking-[2.52px]">
        {label}
      </h3>

      <div className="flex items-center justify-between mt-10 text-xl text-black uppercase tracking-[2px]">
        <p>{leftLabel}</p>
        <p>{rightLabel}</p>
      </div>

      <ReactSlider
        className="w-full h-2 mt-5 bg-gray-300 rounded-lg cursor-pointer"
        thumbClassName="w-2 h-8 bg-green-700 rounded-full cursor-pointer transform translate-y-[-10px]"
        trackClassName="bg-grey h-2 rounded-lg"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />

      
    </div>
  );
};

export default RatingSlider;
