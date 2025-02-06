import React from "react";
import PropTypes from "prop-types";
import Header from "./util/Header";
import { Link } from "react-router-dom";

const Home = (props) => {
  const challenges = [
    { id: "stopwatch", name: "Stop Watch" },
    { id: "grid-lights", name: "Grid Lights" },
    { id: "traffic-lights", name: "Traffic Lights" },
    { id: "accordion", name: "Accordion" },
    { id: "star-rating", name: "Star rating" },
    { id: "modal-popup", name: "Modal Popup" },
    { id: "column-table", name: "Column Table" },
    { id: "telephone-formatter", name: "Telephone Formatter" },
    { id: "guess-the-number", name: "Guess The Number" },
  ];

  return (
    <div>
      <Header />
      <div className="m-5">
        <p className="mb-10 text-center">
          Welcome to the Home Page! Select a challenge to start building your
          React component. Each challenge will have its own dedicated page for
          you to see and implement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {challenges.map((challenge) => (
            <Link
              to={`/challenge/${challenge.id}`}
              key={challenge.id}
              className="block p-4 bg-white shadow rounded-lg transform transition duration-300 hover:scale-105"
            >
              {challenge.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
