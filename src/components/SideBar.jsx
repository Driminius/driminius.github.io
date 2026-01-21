import { Link, NavLink } from "react-router";

const linkClass = ({ isActive }) =>
  isActive ? "active-link" : "inactive-link";
const SideBar = () => {
  return (
    <div>
      <aside className="hidden md:block">
        <nav>
          <ul className="grid ">
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
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
