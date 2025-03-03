import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  return (
    <nav className="flex justify-between items-center p-4 w-full max-w-[1311px] mx-auto">
      {/* Logo */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a715aa83ab37b89ccc1f06a13b910e5d75f0bdbfaf3f9a703fa4317017a50c0c?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
        alt="Company logo"
        className="w-[139px] object-contain"
      />

      {/* Desktop Navigation (Hidden on sm, always visible on md and larger) */}
      <div className="hidden md:!flex gap-10 items-center text-base font-semibold tracking-widest text-green-800 uppercase">
  <a href="#">ACCEUIL</a>
  <a href="#" className="text-sm">PERSONNALISATION</a>
  <a href="#">ESSAYAGE</a>
  <a href="#">GUIDE D UTILISATION</a>
  <a href="#" className="text-sm">LANGUE</a>
</div>


      {/* Mobile Menu Button (only visible on sm) */}
      <button
        className="md:hidden text-green-800 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu (Only visible when menu is open on sm) */}
      {menuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-md p-4 flex flex-col text-center text-green-800 uppercase md:hidden">
          <a href="#" className="py-2">ACCEUIL</a>
          <a href="#" className="py-2 text-sm">PERSONNALISATION</a>
          <a href="#" className="py-2">ESSAYAGE</a>
          <a href="#" className="py-2">GUIDE D UTILISATION</a>
          <a href="#" className="py-2 text-sm">LANGUE</a>
        </div>
      )}

      {/* Search & Cart Icons */}
      <div className="flex gap-1">
        <button aria-label="Search">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1c1c3e3a9c9256fa3ad311235eeb3845811cc7ee0ed02b46a4d30a6ac1b328e?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
            alt="Search icon"
            className="w-[45px] object-contain"
          />
        </button>
        <button aria-label="Cart">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/353c78b963ad3ed547005b8c6f8e9d819e4f925f421370bad471f3aad5260071?placeholderIfAbsent=true&apiKey=cc61361d42154674a2178b590870e82f"
            alt="Cart icon"
            className="w-[52px] object-contain"
          />
        </button>
      </div>
    </nav>
  );
}

export default Header;
