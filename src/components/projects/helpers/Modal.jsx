import { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({
  isOpen,
  onClose,
  closeOnOutsideClick = true,
  closeOnEscape = true,
  showCloseIcon = true,
  showBackdrop = true,
  children,
}) => {
  const handleBackdropClick = () => {
    // Prevent closing when clicking on modal content
    if (closeOnOutsideClick) {
      onClose();
    }
  };

  // Handle escape key press to close modal
  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  // Prevent rendering if modal is not open
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleBackdropClick} // Ensure only clicks on the backdrop close the modal
    >
      {/* Backdrop */}
      {showBackdrop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      {/* Modal Content */}
      <div
        className="z-50 bg-white rounded-lg shadow-lg w-96 p-4 relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal clicks from triggering backdrop click
      >
        {/* Close Icon */}
        {showCloseIcon && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
          >
            &times;
          </button>
        )}
        {/* Modal Content */}
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  closeOnOutsideClick: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
  showCloseIcon: PropTypes.bool,
  showBackdrop: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Modal;
