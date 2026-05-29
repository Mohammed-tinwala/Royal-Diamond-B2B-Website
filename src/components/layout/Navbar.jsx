import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useScrollSpy, scrollToSection } from "../../hooks/useScrollSpy";
import { NAV_LINKS } from "../../utils/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOppened, setIsMenuOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpened(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className={`w-full fixed top-0 right-0 left-0 z-1000 py-4 transition-all duration-300 ${isScrolled ? 'bg-primary/30 backdrop-blur-lg' : 'bg-transparent'} `}
      style={{ transform: 'translate3d(0, 0, 0)' }}>

      <div className="max-w-330 mx-auto px-4">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <Link to="/">
            <img
              src={isScrolled ? "/logo-white.png" : "/logo.png"}
              alt="Royal Industry"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-4">

            <div className="bg-primary rounded-full px-8 py-4">

              <ul className="flex items-center gap-8 text-white">

                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className="relative text-sm font-medium transition-colors duration-300 hover:text-secondary group py-2"
                    >
                      {link.label}
                      {/* The Animated Line */}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                    </Link>
                  </li>
                ))}

              </ul>

            </div>

            <button className="bg-secondary text-white px-7 py-4 rounded-full text-sm font-medium transition-all hidden md:flex cursor-pointer duration-300 
  hover:opacity-100 
  hover:-translate-y-0.5 
  hover:shadow-lg 
  hover:shadow-secondary/40 
  active:scale-95">
              Login
            </button>

          </nav>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsMenuOpened(!isMenuOppened)}
            className={`md:hidden p-4 ${isScrolled ? 'text-white' : 'text-black'}`}
            aria-label='menu'
            aria-expanded={isMenuOppened}
          >
            {isMenuOppened ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isScrolled ? 'bg-transparent' : 'bg-white'} ${isMenuOppened ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-6">

          <nav>

            <ul className="flex flex-col gap-5">

              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-gray-700 ${isScrolled ? 'text-white' : 'text-gray-700'} font-medium hover:text-secondary transition`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

            </ul>

          </nav>

          <button
            className="mt-6 w-full bg-secondary text-white py-4 rounded-full font-medium"
          >
            Login
          </button>

        </div>

      </div>

    </nav >
  );
};

export default Navbar;