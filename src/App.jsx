import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Stopwatch from "./components/projects/main/Stopwatch";
import GridLights from "./components/projects/main/GridLights";
import TrafficLights from "./components/projects/main/TrafficLights";
import Fallback from "./components/pages/Fallback";
import Accordion from "./components/projects/main/Accordion";
import StarRating from "./components/projects/main/StarRating";
import ColumnTable from "./components/projects/main/ColumnTable";
import TelephoneFormatter from "./components/projects/main/TelephoneFormatter";
import ModalPopup from "./components/projects/main/ModalPopup";
import Guess from "./components/projects/main/GuessTheNumber";
import WordConnect from "./components/projects/main/WordConnect";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge/grid-lights" element={<GridLights />} />
          <Route path="/challenge/column-table" element={<ColumnTable />} />
          <Route path="/challenge/traffic-lights" element={<TrafficLights />} />
          <Route path="/challenge/stopwatch" element={<Stopwatch />} />
          <Route path="/challenge/accordion" element={<Accordion />} />
          <Route path="/challenge/modal-popup" element={<ModalPopup />} />
          <Route path="/challenge/star-rating" element={<StarRating />} />
          <Route
            path="/challenge/telephone-formatter"
            element={<TelephoneFormatter />}
          />
          <Route path="/challenge/guess-the-number" element={<Guess />} />
          <Route path="/challenge/word-connect" element={<WordConnect />} />
          <Route path="*" element={<Fallback />} />
        </Routes>
      </Router>
    </div>
  );
};

App.propTypes = {};

export default App;
