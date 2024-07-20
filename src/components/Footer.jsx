import React from "react";
import { CONTACT } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-300">
          Contact Me
        </h3>
        <div className="mb-4">
          <p className="text-lg mb-2">
            <strong>Address:</strong> {CONTACT.address}
          </p>
          <p className="text-lg mb-2">
            <strong>Phone:</strong>{" "}
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="text-blue-400 hover:underline"
            >
              {CONTACT.phoneNo}
            </a>
          </p>
          <p className="text-lg mb-2">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-blue-400 hover:underline"
            >
              {CONTACT.email}
            </a>
          </p>
        </div>
        <div className="border-t border-gray-600 pt-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Mani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
