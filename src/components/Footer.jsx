import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-orange-400 font-oswald  ">
      <div>
        <p className="text-sm text-center">
          Connecting people of all faiths through events and community support.
          Join us in building an inclusive and meaningful community.
        </p>
      </div>
      <hr className="border-orange-400 mt-8 mb-4" />

      <div className="flex justify-start gap-4 md:gap-48 items-baseline flex flex-col md:flex-row">
        <div className="py-4 ">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                to="/"
                className="hover:underline hover:underline-offset-4 transition hover:scale-125"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="hover:underline hover:underline-offset-4 transition hover:scale-125"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:underline hover:underline-offset-4 transition hover:scale-125"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:underline-offset-4 transition hover:scale-125"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold ">Contact Us</h2>
          <p className="mt-2 text-sm pb-3">
            Email:{" "}
            <a
              href="mailto:support@communionapp.com"
              className="text-orange-400 hover:underline"
            >
              support@communionapp.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-orange-400 hover:underline"
            >
              +123 456 7890
            </a>
          </p>
        </div>

        <div className="mt-3 space-y-2">
          <div>
            <h2 className="text-xl font-semibold ">Follow Us</h2>
          </div>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-4  block"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-4  block"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-4  block"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:underline-offset-4  block"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="text-center text-sm border-t border-orange-400 mt-6 pt-4">
        &copy; {new Date().getFullYear()} Communion App. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
