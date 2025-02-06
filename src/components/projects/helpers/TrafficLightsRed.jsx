import PropTypes from "prop-types";

const Red = ({ isActive }) => {
  return (
    <div
      className={`circle h-16 w-16 m-4 rounded-full ${
        isActive ? `bg-red-600` : "bg-slate-500"
      }`}
    ></div>
  );
};

export default Red;

Red.propTypes = {
  isActive: PropTypes.bool,
};
