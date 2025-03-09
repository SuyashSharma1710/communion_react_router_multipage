import React from "react";
import { motion } from "framer-motion";

function Contact() {
  const Iframe = (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="md:w-[40vw] h-full flex-1"
    >
      <h1 className="py-4 font-bold text-xl font-oswald">Location</h1>
      <iframe
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=new%20ashok%20nagar&zoom=15&maptype=roadmap"
        className="w-full h-[40vh] md:h-[60vh] rounded-2xl"
      ></iframe>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-orange-400 w-full"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-8"
      >
        <h1 className="font-protest text-center text-6xl">Contact</h1>
        <p className="font-oswald text-center text-md">
          Get in Touch, Let's Connect!
        </p>
      </motion.div>

      <div className="w-full flex md:flex-row gap-8 flex-col py-4 px-10">
        {Iframe}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-justify"
        >
          <div className="w-full h-full border rounded-2xl p-6 border-orange-400">
            <h1 className="font-protest text-center text-2xl">QUERY</h1>

            <form action="">
              <div className="flex flex-col gap-8 font-oswald text-orange-400">
                {["Email", "Mobile", "Inquiry"].map((label, index) => (
                  <motion.fieldset
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="border-orange-400 border rounded-2xl p-2 hover:shadow-md hover:shadow-orange-400 shadow-sm shadow-orange-400 transition-all"
                  >
                    <legend>{label}</legend>
                    <input
                      className="bg-orange-400 rounded-xl p-1 text-center w-full placeholder-black text-black"
                      type={label === "Mobile" ? "tel" : "text"}
                      placeholder={`Eg. ${label}`}
                      required
                    />
                  </motion.fieldset>
                ))}

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  type="submit"
                  className="hover:bg-orange-400 hover:shadow-md hover:shadow-orange-600 hover:text-black rounded-full hover:text-2xl transition-all h-10"
                >
                  Send
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
