import { useState } from "react";
import Modal from "../helpers/Modal";
import ChallengeHeader from "../../util/ChallengeHeader";

const ModalPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [closeOnOutsideClick, setCloseOnOutsideClick] = useState(true);
  const [closeOnEscape, setCloseOnEscape] = useState(true);
  const [showCloseIcon, setShowCloseIcon] = useState(true);
  const [showBackdrop, setShowBackdrop] = useState(true);

  return (
    <div>
      <ChallengeHeader title="Modal Popup" />
      <div className="p-4 flex flex-col justify-center items-center">
        <h1 className="text-2xl mb-4">Modal Popup</h1>
        <div className="space-y-2">
          <label className="block">
            <input
              type="checkbox"
              checked={closeOnOutsideClick}
              onChange={() => setCloseOnOutsideClick(!closeOnOutsideClick)}
            />{" "}
            Close dialog on outside click
          </label>
          <label className="block">
            <input
              type="checkbox"
              checked={closeOnEscape}
              onChange={() => setCloseOnEscape(!closeOnEscape)}
            />{" "}
            Close dialog on escape
          </label>
          <label className="block">
            <input
              type="checkbox"
              checked={showCloseIcon}
              onChange={() => setShowCloseIcon(!showCloseIcon)}
            />{" "}
            Show close icon
          </label>
          <label className="block">
            <input
              type="checkbox"
              checked={showBackdrop}
              onChange={() => setShowBackdrop(!showBackdrop)}
            />{" "}
            Show backdrop
          </label>
        </div>

        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Open Modal
        </button>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          closeOnOutsideClick={closeOnOutsideClick}
          closeOnEscape={closeOnEscape}
          showCloseIcon={showCloseIcon}
          showBackdrop={showBackdrop}
        >
          <h2 className="text-lg font-bold">Modal Heading</h2>
          <p className="mt-2">
            This is modal content. You can put any content here. This has a
            groovy backdrop! You can also close this modal by clicking outside
            of it or pressing the escape key.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default ModalPopup;
