import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Stopwatch from "./components/projects/Stopwatch";

const App = (props) => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge/stopwatch" element={<Stopwatch />} />
        </Routes>
      </Router>
    </div>
  );
};

App.propTypes = {};

export default App;
