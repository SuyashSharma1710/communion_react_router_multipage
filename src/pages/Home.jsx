import React from "react";
import { motion } from "framer-motion";
import Banner from "../assets/banner.jpg";
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
      <div className="py-4">
        {/* Banner Section */}
        <motion.div
          className="relative flex flex-col lg:flex-row gap-8 p-8 bg-black bg-gradient-to-tl py-8 rounded-2xl from-black via-black to-orange-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <div className="w-1 rounded-full h-[480px] bg-orange-600 absolute hidden lg:block left-12"></div>
            <div className="absolute left-11 bottom-4 lg:block hidden rounded-full h-3 w-3 bg-orange-600"></div>
          </div>

          {/* Animated Banner Image */}
          <motion.div
            className="flex-1 overflow-hidden"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src={Banner}
              alt="banner"
              className="md:w-[500px] rounded-2xl mx-auto"
            />
          </motion.div>

          {/* Animated Text Section */}
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
              <p>
                Communion Org is a cutting-edge event management company
                committed to curating meaningful and unforgettable experiences.{" "}
                <br /> <br /> With a passion for innovation and excellence, we
                specialize in planning, organizing, and executing events that
                bring people together across various faiths, cultures, and
                interests.
              </p>
            </motion.div>
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
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Events
          </motion.h3>

          {/* Event Cards with Hover Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 gap-6 p-6">
            {events.slice(0, 3).map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.025 }}
                transition={{ type: "spring", stiffness: 50 }}
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
            className="h-10 text-center mx-auto my-4 font-oswald font-semibold p-2 w-20 rounded-full bg-orange-400 cursor-pointer"
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
