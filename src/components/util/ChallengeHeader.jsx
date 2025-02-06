import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ChallengeHeader = ({ title = "FRONTEND MINI CHALLENGES" }) => {
  return (
    <div className="flex justify-between items-center bg-gray-600 p-4 mb-4 text-l text-white shadow-2xl">
      <Link to={`/`}>
        <p className="text-xl">&#60;</p>
      </Link>
      <p className="text-5xl ">{title}</p>
      <p>&copy; 2025 MRK</p>
    </div>
  );
};

ChallengeHeader.propTypes = {
  title: PropTypes.string,
};

export default ChallengeHeader;
