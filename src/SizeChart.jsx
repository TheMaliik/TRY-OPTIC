function SizeChart() {
  return (
    <section className="mt-10">
      <hr className="shrink-0 mt-10 max-w-full border-opacity-5 h-[1px] w-[1350px]" />

      <article className="flex flex-col px-9 pt-7 pb-20 mt-10 uppercase bg-white border border-solid border-black border-opacity-40 max-md:px-5 max-md:max-w-full">
        <h2 className="self-center text-3xl max-md:text-xl font-extrabold text-center text-green-800 tracking-[3.2px]">
          Guide Size Chart
        </h2>

        <div className="mt-20 text-2xl max-md:text-sm text-black tracking-[2.3px] max-md:mt-10 max-md:max-w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-lg max-md:text-xs font-semibold border-b border-black">
                <th className="pb-2">Temple Length (mm)</th>
                <th className="pb-2">Category</th>
                <th className="pb-2">Recommended For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-lg max-md:text-xs border-b border-gray-300">
                <td className="py-2">120 mm</td>
                <td className="py-2">Extra Short</td>
                <td className="py-2">Children's glasses or very small adult frames</td>
              </tr>
              <tr className="text-lg max-md:text-xs border-b border-gray-300">
                <td className="py-2">125 mm</td>
                <td className="py-2">Short</td>
                <td className="py-2">Petite frames for smaller faces</td>
              </tr>
              <tr className="text-lg max-md:text-xs border-b border-gray-300">
                <td className="py-2">130 mm</td>
                <td className="py-2">Small</td>
                <td className="py-2">Narrow faces, small frames</td>
              </tr>
              <tr className="text-lg max-md:text-xs border-b border-gray-300">
                <td className="py-2">135 mm</td>
                <td className="py-2">Medium</td>
                <td className="py-2">Standard size for most adults</td>
              </tr>
              <tr className="text-lg max-md:text-xs border-b border-gray-300">
                <td className="py-2">140 mm</td>
                <td className="py-2">Medium-Large</td>
                <td className="py-2">Common size for regular adult frames</td>
              </tr>
              <tr className="text-lg max-md:text-xs border-b border-gray-300">
                <td className="py-2">145 mm</td>
                <td className="py-2">Large</td>
                <td className="py-2">Wider faces or slightly larger frames</td>
              </tr>
              <tr className="text-lg max-md:text-xs">
                <td className="py-2">150 mm</td>
                <td className="py-2">Extra Large</td>
                <td className="py-2">Oversized frames or those who prefer longer arms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

export default SizeChart;
