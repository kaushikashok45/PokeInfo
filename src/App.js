import React from "react";
import Pokemon from "./Pokemon.js";
import "./styles/output.css";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <style>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
            rel="stylesheet"
          />
        </style>
        <div className="fixed w-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 mt-0 h-24 md:h-24 lg:h-15 xl:h-13">
          <h1 className="text-center text-lg mt-3 font-press-start">
            Pokemon Info
          </h1>
          <p className="text-center ">
            All the pokemon in the world at your fingertips.
          </p>
        </div>

        <div className="container mx-auto">
          <Pokemon />
        </div>
      </div>
    );
  }
}

export default App;
