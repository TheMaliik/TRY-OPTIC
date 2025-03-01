function CatalogItem({ item }) {
  if (item.type === "full-width") {
    return (
      <div className="grow mt-5 md:mt-0">
        <img
          src={item.image}
          alt="Eyeglasses showcase"
          className="w-full object-contain aspect-[1.57] shadow-md"
        />
        <img
          src={item.logo}
          alt="Brand logo"
          className="w-[71px] mt-3 object-contain aspect-[1.11]"
        />
      </div>
    );
  }

  if (item.type === "featured") {
    return (
      <div className="w-full bg-green-200 text-black text-base font-bold uppercase tracking-wider text-center shadow-md px-1.5 mt-5 md:mt-0">
        <div className="relative flex flex-col items-center justify-center pt-64 pb-16 px-10 aspect-[0.811] md:pt-24 md:px-5">
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="relative z-10">{item.title}</span>
        </div>
      </div>
    );
  }

  if (item.type === "half-width") {
    return (
      <div className="flex flex-col grow w-full bg-green-200 text-black text-base font-bold uppercase tracking-wider text-center shadow-md py-4 pl-3 mt-5 md:mt-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full object-contain aspect-[2.39] md:-mr-2.5"
        />
        <p className="mt-2.5 self-start">{item.title}</p>
      </div>
    );
  }

  return null;
}

export default CatalogItem;
