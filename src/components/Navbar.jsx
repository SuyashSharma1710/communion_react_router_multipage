import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 960 && setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Navlist = (
    <ul className="flex gap-8 flex-col lg:flex-row">
      {["Home", "About", "Contact"].map((item) => (
        <li key={item} onClick={() => setOpenNav(false)} className="hover:underline hover:underline-offset-4 hover:scale-125 transition">
          <Link to={`/${item.toLowerCase()}`}>{item}</Link>
        </li>
      ))}
      <li onClick={() => setOpenNav(!openNav)} className="block lg:hidden hover:underline hover:underline-offset-4 transition hover:scale-125">
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  const hamb = (
    <svg
      viewBox="0 0 25 25"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
      fill="#ffae00"
      stroke="#ffae00"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>cross</title> <desc>Created with Sketch Beta.</desc>{" "}
        <defs> </defs>{" "}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          sketch:type="MSPage"
        >
          {" "}
          <g
            id="Icon-Set-Filled"
            sketch:type="MSLayerGroup"
            transform="translate(-469.000000, -1041.000000)"
            fill="#ff8800"
          >
            {" "}
            <path
              d="M487.148,1053.48 L492.813,1047.82 C494.376,1046.26 494.376,1043.72 492.813,1042.16 C491.248,1040.59 488.712,1040.59 487.148,1042.16 L481.484,1047.82 L475.82,1042.16 C474.257,1040.59 471.721,1040.59 470.156,1042.16 C468.593,1043.72 468.593,1046.26 470.156,1047.82 L475.82,1053.48 L470.156,1059.15 C468.593,1060.71 468.593,1063.25 470.156,1064.81 C471.721,1066.38 474.257,1066.38 475.82,1064.81 L481.484,1059.15 L487.148,1064.81 C488.712,1066.38 491.248,1066.38 492.813,1064.81 C494.376,1063.25 494.376,1060.71 492.813,1059.15 L487.148,1053.48"
              id="cross"
              sketch:type="MSShapeGroup"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );

  const cross = (
    <svg
      viewBox="0 -2 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>hamburger 2</title> <desc>Created with Sketch Beta.</desc>{" "}
        <defs> </defs>{" "}
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          sketch:type="MSPage"
        >
          {" "}
          <g
            id="Icon-Set-Filled"
            sketch:type="MSLayerGroup"
            transform="translate(-310.000000, -1039.000000)"
            fill="#ff7b00"
          >
            {" "}
            <path
              d="M338,1049 L314,1049 C311.791,1049 310,1050.79 310,1053 C310,1055.21 311.791,1057 314,1057 L338,1057 C340.209,1057 342,1055.21 342,1053 C342,1050.79 340.209,1049 338,1049 L338,1049 Z M338,1059 L314,1059 C311.791,1059 310,1060.79 310,1063 C310,1065.21 311.791,1067 314,1067 L338,1067 C340.209,1067 342,1065.21 342,1063 C342,1060.79 340.209,1059 338,1059 L338,1059 Z M314,1047 L338,1047 C340.209,1047 342,1045.21 342,1043 C342,1040.79 340.209,1039 338,1039 L314,1039 C311.791,1039 310,1040.79 310,1043 C310,1045.21 311.791,1047 314,1047 L314,1047 Z"
              id="hamburger-2"
              sketch:type="MSShapeGroup"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );

  return (
    <div>
      <div className="place-content-center mx-auto w-full bg-[#000000aa] shadow-md hover:shadow-2xl hover:shadow-orange-400 shadow-orange-400 rounded-2xl border border-orange-400 my-8 p-8 font-protest text-orange-400">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl">TECH WORLD</h1>

          <div className="hidden lg:block">{Navlist}</div>
          <div className="hidden lg:block hover:underline hover:underline-offset-4 hover:scale-125 transition">
            <Link to="/login">Login</Link>
          </div>

          <div
            onClick={() => setOpenNav(!openNav)}
            className="h-10 w-10 lg:hidden"
            aria-label={openNav ? "Close menu" : "Open menu"}
            role="button"
          >
            {openNav ? hamb : cross}
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
