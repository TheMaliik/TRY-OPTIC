
function ColorSelector({ selectedColor, onColorChange }) {
  const colors = [
    { id: "pink", name: "light nude pink", backgroundColor: "#FBB6CE" }, // pink
    { id: "navy", name: "navy blue", backgroundColor: "#1E3A8A" },        // navy blue
    { id: "burgundy", name: "burgundy", backgroundColor: "#9B1C31" },      // burgundy
  ];

  return (
    <>
      <p className="text-black text-base uppercase tracking-widest ml-3.5 md:ml-2.5">
        Color: {selectedColor || "None"}
      </p>
      {/* <div className="flex gap-3.5 mt-6 ml-4 md:ml-2.5"> */}
      <div className="flex gap-3.5 mt-6 ml-4 md:ml-2.5 flex-row sm:flex-col sm:items-start">
        {colors.map((color) => (
          <button
            key={color.id}
            className={`h-12 w-12 shrink-0 border border-black ${
              selectedColor === color.name
                ? "ring-2 ring-offset-2 ring-green-800"
                : ""
            }`}
            onClick={() => onColorChange(color.name)}
            style={{ backgroundColor: selectedColor === color.name ? color.backgroundColor : color.backgroundColor }}
            aria-label={`Select color ${color.name}`}
          />
        ))}
        </div>
      {/* </div> */}
    </>
  );
}

export default ColorSelector;
