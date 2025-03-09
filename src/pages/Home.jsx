import React from "react";
import { motion } from "framer-motion";
import Banner from "../assets/Picsart_25-03-09_23-26-54-293.png";
import events from "../constants";
import Eventcard from "../components/Eventcard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/events");
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="main py-4">

        {/* <motion.div
          className="bg-[url(../src/assets/preview.jpg)] bg-cover bg-no-repeat bg-right-top bg-left-top relative shadow-insetBlack flex flex-col lg:flex-row gap-8 p-8  py-8 rounded-2xl  "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <div className="w-1 rounded-full h-[480px] bg-orange-600 absolute hidden lg:block left-12"></div>
            <div className="absolute left-11 bottom-4 lg:block hidden rounded-full h-3 w-3 bg-orange-600"></div>
          </div>

       
          <motion.div
            className="flex-1 overflow-hidden"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src={Banner}
              alt="banner"
              className=" md:w-[500px] rounded-2xl h-[600px] object-cover mx-auto"
            />
          </motion.div>

         
          <motion.div
            className="text-orange-400 flex-1 flex flex-col py-4 gap-8 font-oswald"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <h1 className="lg:text-9xl text-6xl lg:pt-14 leading-3">
                Perfection <span className="text-sm">At Its Peak</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <p className="text-orange-300">
                Communion Org is a cutting-edge event management company
                committed to curating meaningful and unforgettable experiences.{" "}
                <br /> <br /> With a passion for innovation and excellence, we
                specialize in planning, organizing, and executing events that
                bring people together across various faiths, cultures, and
                interests.
              </p>
            </motion.div>
          </motion.div>
        </motion.div> */}

        <motion.div
  className="bg-[url(../src/assets/preview.jpg)] bg-cover bg-no-repeat bg-right-top bg-left-top relative shadow-insetBlack flex flex-col lg:flex-row gap-8 p-8 py-8 rounded-2xl"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  {/* Left Section - Hero Text */}
  <motion.div
    className="flex-1 text-orange-400 flex flex-col justify-center gap-6 font-oswald"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <motion.h1
      className="text-6xl lg:text-7xl font-bold leading-tight"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
     Connecting People Across Faiths & Interests
    </motion.h1>

    <motion.p
      className="text-lg text-orange-300 max-w-xl"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      Communion Org specializes in curating extraordinary events that bring
      people together across different faiths, cultures, and interests.
      Experience innovation, excellence, and unforgettable memories.
    </motion.p>

    {/* CTA Button */}
    <motion.button
  onClick={() => {
    document.getElementById("events").scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-orange-400 text-black font-semibold px-6 py-3 rounded-full w-fit shadow-md cursor-pointer"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  Explore Events
</motion.button>
  </motion.div>

  {/* Right Section - Hero Image */}
  <motion.div
    className="flex-1 overflow-hidden flex justify-center"
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    <img
      src={Banner}
      alt="Event Banner"
      className="md:w-[500px] rounded-2xl h-[600px] object-cover"
    />
  </motion.div>
</motion.div>


        {/* Events Section */}
        <motion.div
          className="pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <motion.h3
            className="text-orange-400 font-protest text-5xl text-center mt-8 mb-4"
            id="events"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Events
          </motion.h3>

          {/* Event Cards Animation on Scroll */}
          <div className="grid grid-cols-1 bg-[url(../src/assets/copper-icosahedron-pattern-black.jpg)] bg-cover bg-no-repeat shadow-insetBlack md:grid-cols-2 place-items-center lg:grid-cols-3 gap-6 p-6">
            {events.slice(0, 3).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.025 }}
              >
                <Eventcard
                  id={event.id}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  category={event.category}
                  description={event.description}
                  image={event.image}
                />
              </motion.div>
            ))}
          </div>

          {/* View All Button Animation */}
          <motion.div
            onClick={handleClick}
            className=" text-center mx-auto my-4 font-oswald font-semibold p-2 w-40 rounded-full bg-orange-400 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <p>View all</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
