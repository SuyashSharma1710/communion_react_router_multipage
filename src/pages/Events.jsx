import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import eventimg from "../assets/event3.png";
import eventsData from "../constants";
import Eventcard from "../components/Eventcard";

const Events = () => {
  const [events, setEvents] = useState(eventsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    id: "",
    title: "",
    date: "",
    time: "",
    location: "",
    category: "",
    description: "",
    image: "",
  });

  const categories = [...new Set(events.map((event) => event.category))];

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? event.category === selectedCategory : true)
  );

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const createEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.category) {
      alert("Title, Date, and Category are required!");
      return;
    }

    const updatedEvents = [
      ...events,
      {
        ...newEvent,
        id: events.length + 1,
        image: newEvent.image || eventimg,
      },
    ];
    setEvents(updatedEvents);
    setNewEvent({
      id: "",
      title: "",
      date: "",
      time: "",
      location: "",
      category: "",
      description: "",
      image: "",
    });
    closePopup();
  };

  return (
    <div className="text-orange-400 w-full">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-8"
      >
        <h1 className="font-protest text-center text-6xl">Events</h1>
        <p className="font-oswald text-center text-md">
          Bringing People Together, Creating Meaningful Connections!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="p-8"
      >
        <p className="text-center font-oswald text-xl">
          Communion Org is a cutting-edge event management company dedicated to
          creating unforgettable experiences through innovation and excellence.
        </p>
      </motion.div>

      <div className="flex justify-between items-center flex-wrap gap-4 p-4">
        <motion.input
          type="text"
          placeholder="Search events by title..."
          className="p-2 border border-orange-400 bg-black w-full sm:w-96 text-orange-400 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <div className="flex justify-center font-oswald  gap-3 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full border border-orange-400 ${
              selectedCategory === "" ? "bg-orange-400 text-black" : ""
            }`}
            onClick={() => setSelectedCategory("")}
          >
            All
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full border border-orange-400 ${
                selectedCategory === category ? "bg-orange-400 text-black" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1  mix-blend-screen  bg-[url(../src/assets/abs.jpg)] bg-cover bg-repeat-y shadow-insetBlack md:grid-cols-2 place-items-center lg:grid-cols-3 gap-6 p-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileHover={{ scale: 1.025, delay: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Eventcard {...event} />
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-3 text-lg">No events found.</p>
        )}

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="h-[200px] sm:w-full md:w-80 grid place-content-center "
        >
          <button
            onClick={openPopup}
            className="bg-orange-400 text-black w-full font-oswald shadow-[0_0_30px_30px_black] font-bold sm:w-40 px-6 py-2 rounded-full"
          >
            Add Event
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black p-6 rounded-lg w-96 text-orange-600 border-2 border-orange-400"
            >
              <h2 className="text-2xl mb-4 text-orange-400">Create Event</h2>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full p-2 rounded-xl bg-orange-100 border-2 border-orange-400  mb-2"
                onChange={handleChange}
              />
              <input
                type="date"
                name="date"
                className="w-full p-2 rounded-xl bg-orange-100 border-2 border-orange-400  mb-2"
                onChange={handleChange}
              />
              <input
                type="time"
                name="time"
                className="w-full p-2  rounded-xl bg-orange-100 border-2 border-orange-400  mb-2"
                onChange={handleChange}
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full p-2 rounded-xl bg-orange-100 border-2 border-orange-400  mb-2"
                onChange={handleChange}
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="w-full p-2  rounded-xl bg-orange-100 border-2 border-orange-400  mb-2"
                onChange={handleChange}
              />
              <textarea
                name="description"
                placeholder="Description"
                className="w-full p-2  rounded-xl bg-orange-100 border-2 border-orange-400  mb-2"
                onChange={handleChange}
              ></textarea>

              <div className="flex justify-end gap-2">
                <button
                  onClick={closePopup}
                  className="px-4 py-2 bg-black border-2 border-orange-400 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  onClick={createEvent}
                  className="px-4 py-2 bg-orange-400 text-black rounded-xl"
                >
                  Create
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
