import { NavLink } from "react-router-dom";

const Navbar = () => {
  // Function to determine the style of the nav link based on whether it is active
  const navLinkStyle = ({ isActive }) => {
    return isActive
      ? "bg-green-500 text-white rounded px-2 py-1"
      : "hover:bg-green-100 rounded px-2 py-1";
  };

  return (
    <div>
      <div>
        <p className="text-center text-2xl font-bold bg-base-200 p-4">
          আমাদের কথা
        </p>
      </div>
      <div className="bg-sky-100">
        <div className="pt-4 pb-4 px-14">
          <div className="navbar bg-white  rounded-xl shadow-lg">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow grid gap-4"
                >
                  <NavLink to="/" className={navLinkStyle}>
                    <a>Home</a>
                  </NavLink>
                  <NavLink to="/course" className={navLinkStyle}>
                    <a>Course</a>
                  </NavLink>
                  <NavLink to="/training" className={navLinkStyle}>
                    <a>Training</a>
                  </NavLink>
                  <NavLink to="/games" className={navLinkStyle}>
                    <a>Games</a>
                  </NavLink>
                  <NavLink to="/gallery" className={navLinkStyle}>
                    <a>Gallery</a>
                  </NavLink>
                  <NavLink to="/blog" className={navLinkStyle}>
                    <a>Blog</a>
                  </NavLink>
                  <NavLink to="/contact" className={navLinkStyle}>
                    <a>Contact</a>
                  </NavLink>
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">Amader Shikkha</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 flex gap-4">
                <NavLink to="/" className={navLinkStyle}>
                  <a>Home</a>
                </NavLink>
                <NavLink to="/course" className={navLinkStyle}>
                  <a>Course</a>
                </NavLink>
                <NavLink to="/training" className={navLinkStyle}>
                  <a>Training</a>
                </NavLink>
                <NavLink to="/games" className={navLinkStyle}>
                  <a>Games</a>
                </NavLink>
                <NavLink to="/gallery" className={navLinkStyle}>
                  <a>Gallery</a>
                </NavLink>
                <NavLink to="/blog" className={navLinkStyle}>
                  <a>Blog</a>
                </NavLink>
                <NavLink to="/contact" className={navLinkStyle}>
                  <a>Contact</a>
                </NavLink>
              </ul>
            </div>
            <div className="navbar-end">
              {/* <a className="btn">Login</a> */}
              <NavLink to="/admission" className="btn btn-primary ml-2">Login</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
