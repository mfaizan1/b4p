import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto text-center">
        <p>
          Pull requests and feature suggestions are welcome. Visit our{" "}
          <a
            href="https://github.com/mfaizan1/b4p"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub Repository
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
