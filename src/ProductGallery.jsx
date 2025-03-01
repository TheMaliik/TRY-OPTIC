

function ProductGallery() {
  return (
    <article className="w-[57%] max-md:ml-0 max-md:w-full">
      <div className="w-full max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full space={12}">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2cb58af6393785b54b1015fdf62314cad6650a2ccae41aee75704c3599fda1a?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
                alt="Glasses front view"
                className="object-contain grow w-full aspect-[0.91] max-md:mt-3"
              />
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d3d35b6b2014ac6a3ac334fb8ec840b5d33272f72935e8cce5c9cb1ae2e4d56?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
                alt="Glasses side view"
                className="object-contain grow w-full aspect-[0.96] max-md:mt-3"
              />
            </div>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/50e5201cfcde92bdbe5c254b5bf9ac063b1180f2bbc4cf5c31920471abe980e2?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
          alt="Glasses detail view"
          className="object-contain mt-4 w-full aspect-[1.72] max-md:max-w-full"
        />
      </div>
    </article>
  );
}

export default ProductGallery;
