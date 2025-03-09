import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/aboutimg.avif";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-orange-400 w-full"
    >
      <motion.div
        className="p-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-protest text-center text-6xl">ABOUT</h1>
        <p className="font-oswald text-center text-md">
          What we are?, What we do!
        </p>
      </motion.div>

      <motion.div
        className="p-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-center font-oswald text-xl">
          Communion Org is a cutting-edge event management company dedicated to
          creating unforgettable experiences through innovation and excellence.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-evenly w-full p-10">
        <motion.div
          className="overflow-hidden rounded-2xl flex-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={img1}
            alt="Event Management"
            className="scale-x-[-1] object-cover h-[600px] w-full"
          />
        </motion.div>

        <motion.div
          className="flex flex-1 justify-start flex-col py-8 md:py-0 md:px-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-protest text-4xl">WORK</h1>
          <p className="py-8 text-justify">
            We help individuals and organizations discover, create, and
            participate in events that matter. Whether it's religious
            gatherings, social meetups, or charity initiatives, Communion App
            provides a space where people can come together, share experiences,
            and grow as a community.
            <br /> <br />
            Communion App is a platform dedicated to connecting people of all
            faiths through events, discussions, and community support. We
            believe in fostering inclusivity, understanding, and meaningful
            connections among diverse communities.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
