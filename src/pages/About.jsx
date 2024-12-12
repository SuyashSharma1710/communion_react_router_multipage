import React from "react";
import img1 from "../assets/aboutimg.avif";

function About() {
  return (
    <div>
      <div className="text-orange-400 w-full">


        <div className="p-8">
          <h1 className="font-protest text-center text-6xl">ABOUT</h1>
          <p className="font-oswald text-center text-md">
            What we are?, What we do!
          </p>
        </div>



        <div className="p-8">
          <p className="text-center font-oswald text-xl">
            Tech World is a cutting-edge event management company dedicated to
            creating unforgettable experiences through innovation and
            excellence.
          </p>
        </div>




        <div className="flex flex-col md:flex-row justify-evenly  w-full p-10 ">

          <div className="overflow-hidden rounded-2xl flex-1">
            <img
              src={img1}
              alt="Event Management"
              className=" scale-x-[-1] object-cover h-[600px] w-full "
            />
          </div>


          <div className="flex flex-1 justify-start flex-col py-8 md:py-0 md:px-10">
            <h1 className="font-protest text-4xl">WORK</h1>
            <p className="py-8 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum consectetur vero, voluptate explicabo architecto maxime ipsam aperiam alias reprehenderit error ea fuga, nisi sed aliquam a cumque blanditiis rerum natus <br /><br /> quia corporis qui facere! Sapiente repellendus, quaerat consequatur explicabo impedit porro eveniet ipsa atque aperiam. Dolores molestias beatae illo repellat necessitatibus, tenetur quidem consequuntur nulla ab. Reiciendis cumque tempore, tenetur ex unde architecto repellendus modi temporibus <br /> <br /> amet ad rem maiores nemo harum, porro est laborum, provident expedita cupiditate assumenda sapiente!</p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default About;
