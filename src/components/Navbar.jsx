import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  React.useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 960 && setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Navlist = (
    <ul className="flex gap-8 flex-col lg:flex-row">
      {["Home", "About", "Contact", "Events"].map((item) => (
        <li
          key={item}
          onClick={() => setOpenNav(false)}
          className="hover:underline hover:underline-offset-4 hover:scale-125 transition"
        >
          <Link to={`/${item.toLowerCase()}`}>{item}</Link>
        </li>
      ))}
      <li
        onClick={() => setOpenNav(!openNav)}
        className="block lg:hidden hover:underline hover:underline-offset-4 transition hover:scale-125"
      >
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <div>
      <div className="place-content-center mx-auto w-full bg-[#000000aa] transition-all shadow-md hover:shadow-lg hover:shadow-orange-400 shadow-orange-400 rounded-2xl border border-orange-400 my-8 p-8 font-protest text-orange-400">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl  md:text-4xl">COMMUNION ORG</h1>

          <div className="hidden lg:block">{Navlist}</div>
          <div className="hidden lg:block hover:underline hover:underline-offset-4 hover:scale-125 transition">
            <Link to="/login">Login</Link>
          </div>

          <div
            onClick={() => setOpenNav(!openNav)}
            className="h-10 text-3xl lg:hidden"
            aria-label={openNav ? "Close menu" : "Open menu"}
            role="button"
          >
            {openNav ? "✖" : "☰"}
          </div>
        </div>
      </div>

      {openNav && (
        <div className="absolute right-16 bg-[#000000ac] border border-orange-400 rounded-2xl text-orange-400 p-10 text-center font-protest">
          {Navlist}
        </div>
      )}
    </div>
  );
}

export default Navbar;
