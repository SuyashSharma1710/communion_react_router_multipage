import React from "react";

const Eventcard = ({ id, title, date, time, location, category, description, image }) => {
  return (
    <div key={id}>
      <div className=" h-[420px] sm:w-full md:w-80 border-orange-400 border-2 p-4 overflow-hidden rounded-xl">
        <div className="w-full bg-black h-[200px] drop-shadow-[0_0_5px_#fb923c] shadow-orange-400 rounded-xl overflow-hidden"> 
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold text-orange-400">{title}</h2>
          <p className="text-sm text-gray-400">
            {date} • {time}
          </p>
          <p className="text-orange-400 mt-2">{location}</p>
          <p className="text-sm text-gray-400 mt-2">{description}</p>
          <span className="inline-block bg-orange-400 text-black font-bold text-xs px-3 py-1 rounded-full mt-3">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Eventcard;