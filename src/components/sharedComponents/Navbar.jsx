import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  // Function to determine the style of the nav link based on whether it is active
  const navLinkStyle = ({ isActive }) => {
    return isActive
      ? "bg-teal-700 text-white rounded-[12px] px-2 py-1"
      : "text-gray-800 hover:bg-teal-700 hover:text-white rounded-[12px] px-2 py-1";
  };
  const navLinkStyle2 = ({ isActive }) => {
    return isActive
      ? "text-teal-800 rounded-[12px] px-2 py-1"
      : "text-gray-800 rounded-[12px] px-2 py-1";
  };

  return (
    <div>
      <div>
        <p className="text-center text-[16px] font-nav p-4">আমাদের কথা</p>
      </div>
      <div className="bg-sky-100">
        <div className="py-[10px] px-4 md:px-[82px]">
          <div className="navbar bg-white rounded-xl">
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
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow grid gap-4"
                >
                  <NavLink to="/" className={navLinkStyle}>
                    <a>হোম</a>
                  </NavLink>
                  <NavLink to="/course" className={navLinkStyle}>
                    <a>কোর্স</a>
                  </NavLink>
                  <NavLink to="/training" className={navLinkStyle}>
                    <a>প্রশিক্ষক</a>
                  </NavLink>
                  <NavLink to="/games" className={navLinkStyle}>
                    <a>গেমস</a>
                  </NavLink>
                  <div className="dropdown dropdown-hover">
                    <label
                      tabIndex={0}
                      className="flex items-center gap-1 cursor-pointer px-2 py-1 hover:bg-green-200 rounded-[12px]"
                    >
                      গ্যালারী
                      <RiArrowDropDownLine />
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content text-black rounded-box shadow mt-3 z-[1] w-36 bg-white p-2"
                    >
                      <li>
                        <NavLink className={navLinkStyle2} to="/photoGallery">
                          ফটো গ্যালারী
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className={navLinkStyle2} to="/videoGallery">
                          ভিডিও গ্যালারী
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <NavLink to="/blog" className={navLinkStyle}>
                    <a>ব্লগ</a>
                  </NavLink>
                  <NavLink to="/contact" className={navLinkStyle}>
                    <a>যোগাযোগ</a>
                  </NavLink>
                </ul>
              </div>
              <NavLink to="/" className="btn btn-ghost text-lg md:text-xl">
                Amader Shikkha
              </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 flex gap-4 xl:gap-8 font-nav">
                <NavLink to="/" className={navLinkStyle}>
                  হোম
                </NavLink>
                <NavLink to="/course" className={navLinkStyle}>
                  কোর্স
                </NavLink>
                <NavLink to="/training" className={navLinkStyle}>
                  প্রশিক্ষক
                </NavLink>
                <NavLink to="/games" className={navLinkStyle}>
                  গেমস
                </NavLink>

                <div className="dropdown dropdown-hover">
                  <label
                    tabIndex={0}
                    className="flex items-center gap-1 cursor-pointer px-2 py-1 hover:bg-green-200 rounded-[12px]"
                  >
                    গ্যালারী
                    <RiArrowDropDownLine />
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content text-black rounded-box shadow mt-3 z-[1] w-36 bg-white p-2"
                  >
                    <li>
                      <NavLink className={navLinkStyle2} to="/photoGallery">
                        ফটো গ্যালারী
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className={navLinkStyle2} to="/videoGallery">
                        ভিডিও গ্যালারী
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <NavLink to="/blog" className={navLinkStyle}>
                  ব্লগ
                </NavLink>
                <NavLink to="/contact" className={navLinkStyle}>
                  যোগাযোগ
                </NavLink>
              </ul>
            </div>
            <div className="navbar-end">
              <NavLink to="/login">
                <Button className="rounded-[12px] text-sm md:text-base">
                  লগইন
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
