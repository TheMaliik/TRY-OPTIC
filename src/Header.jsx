

function Header() {
  return (
    <nav className="flex flex-wrap gap-5 justify-between self-center mt-4 w-full max-w-[1311px] max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a715aa83ab37b89ccc1f06a13b910e5d75f0bdbfaf3f9a703fa4317017a50c0c?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
        alt="Company logo"
        className="object-contain shrink-0 max-w-full aspect-[1.96] w-[139px]"
      />
      <div className="flex flex-wrap gap-10 self-start mt-5 max-md:max-w-full">
        <div className="flex flex-auto gap-4 items-center my-auto text-base font-semibold tracking-widest text-center text-green-800 uppercase max-md:max-w-full">
          <a href="#" className="self-stretch my-auto">
            ACCEUIL
          </a>
          <a
            href="#"
            className="self-stretch my-auto text-sm tracking-widest basis-auto"
          >
            pERSONNALISATION
          </a>
          <a href="#" className="self-stretch">
            ESSAYAGE
          </a>
          <a href="#" className="self-stretch my-auto basis-auto">
            GUIDE D UTILISATION
          </a>
          <a href="#" className="self-stretch my-auto text-sm tracking-widest">
            LANGUE
          </a>
          <span className="self-stretch font-black"></span>
        </div>
        <div className="flex gap-1">
          <button aria-label="Search">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1c1c3e3a9c9256fa3ad311235eeb3845811cc7ee0ed02b46a4d30a6ac1b328e?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
              alt="Search icon"
              className="object-contain shrink-0 aspect-square w-[45px]"
            />
          </button>
          <button aria-label="Cart">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/353c78b963ad3ed547005b8c6f8e9d819e4f925f421370bad471f3aad5260071?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
              alt="Cart icon"
              className="object-contain shrink-0 aspect-[1.16] w-[52px]"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
