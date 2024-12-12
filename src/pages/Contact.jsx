import React from "react";

function Contact() {
  const Iframe = (
    <div className="md:w-[40vw] h-full flex-1">
      <h1 className="py-4 font-bold text-xl font-oswald">Location</h1>
      <iframe
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=new%20ashok%20nagar&zoom=15&maptype=roadmap"
        className=" w-full h-[40vh] md:h-[60vh] rounded-2xl"
      ></iframe>
    </div>
  );

  return (
    <div>
      <div className="text-orange-400 w-full">
        <div className="p-4">
          <h1 className="font-protest text-center text-6xl">Contact</h1>
          <p className="font-oswald text-center text-md">
            Get in Touch, Let's Connect!
          </p>
        </div>

        <div className="w-full flex md:flex-row gap-8 flex-col py-4 px-10">
          <div className="flex-1 h-full">{Iframe}</div>
          <div className="flex-1 text-justify">
            <div className="w-full h-full border rounded-2xl p-6 border-orange-400">
              <h1 className="font-protest text-center text-2xl">QUERY</h1>

              <form action="">
                <div className="flex flex-col gap-8 font-oswald text-orange-400">
                
                  <fieldset className="border-orange-400 border rounded-2xl p-2 hover:shadow-md hover:shadow-orange-400 shadow-sm shadow-orange-400 transition-all">
                    <legend>Email</legend>

                    <input
                      className="bg-orange-400 rounded-xl p-1 text-center w-full placeholder-black text-black"
                      type="email"
                      name="email"
                      placeholder="Eg.johndoe@gmail.com"
                      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      required
                    />
                  </fieldset>

                  <fieldset className="border-orange-400 border rounded-2xl p-2 hover:shadow-md hover:shadow-orange-400 shadow-sm shadow-orange-400 transition-all">
                    <legend>Mobile</legend>

                    <input
                      className="bg-orange-400 rounded-xl p-1 text-center w-full placeholder-black text-black"
                      type="tel"
                      pattern="[0-9]{10}"
                      name="contact"
                      placeholder="Eg.1234567890"
                      required
                    />
                  </fieldset>
                  <fieldset className="resize border-orange-400 border rounded-2xl p-2 hover:shadow-md hover:shadow-orange-400 shadow-sm shadow-orange-400 transition-all">
                    <legend>Inquery</legend>

                    <input
                      className="bg-orange-400 h-14 rounded-xl p-1 text-center w-full placeholder-black text-black"
                      type="text"
                      name="text"
                      placeholder="Eg.What is the price"
                      required
                    />
                  </fieldset>

                  <button
                    type="submit"
                    className="hover:bg-orange-400 hover:shadow-md hover:shadow-orange-600 hover:text-black rounded-full hover:text-2xl transition-all h-10"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
