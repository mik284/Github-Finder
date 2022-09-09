import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search Github profiles and see details of Github
        users including repos. <br/>This project is part of my #100DaysOfCode with Reactjs.
      </p>
      <p className="text-lg text-gray-400">
        Developer: <span className="text-white"><a href="https://linkedin.com/in/michael-kamau-633790203/">Michael Kamau Munyui</a></span>
      </p>
      <p className="text-lg text-gray-400">
        Version: <span className="text-white">1.0.0.1</span>
      </p>
      <p className="text-lg text-gray-400">
        Learned From: <a href="/" className="text-white">Brad T.</a>
      </p>
    </div>
  );
}

export default About;
