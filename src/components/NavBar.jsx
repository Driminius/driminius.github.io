import { NavLink } from "react-router";
import custLogo from "../assets/soaring-sloth-2.png";
import { Link } from "react-router";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleHamburger = (e) => {
    e.preventDefault();
    setIsMobile(!isMobile);
  };
  const linkClass = ({ isActive }) =>
    isActive ? "active-link font-bold" : "inactive-link";
  return (
    <header>
      <nav className="border-b ">
        <div className="flex items-center gap-6 justify-end">
          <div className="mr-auto ml-10 pt-4 pb-4">
            <Link to="/">
              <img
                className="h-15  "
                src={custLogo}
                alt="A cartoon sloth with an orange background soaring in the sky"
              />
            </Link>
          </div>
          <span className="hidden md:block text-2xl font-bold ml-2">
            AD Designs
          </span>
          <div className="mr-10">
            <button
              className="md:hidden cursor-pointer"
              onClick={handleHamburger}
            >
              <FaBars size={25} />
            </button>
          </div>
        </div>

        {isMobile && (
          <ul className=" flex justify-center md:hidden ">
            <li className="p-2">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/portfolio" className={linkClass}>
                Portfolio
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink
                to="/resume"
                // className={ () => () }
                className={linkClass}
              >
                Resume
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/contact-me" className={linkClass}>
                Contact Me
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
