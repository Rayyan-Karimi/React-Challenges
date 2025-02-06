import PropTypes from "prop-types";

const Header = ({ title = "FRONTEND MINI CHALLENGES" }) => {
  return (
    <div className="text-center flex justify-between items-center text-xl text-gray-100 shadow-2xl bg-gray-600 p-4">
      <p>React</p>
      <p className="text-5xl">{title}</p>
      <p>&copy; 2025 MRK</p>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
