import React from "react";

const Modal = ({ onClose, children }) => (
  <div className="fixed inset-0 bg-black h-screen bg-opacity-50 z-50 flex justify-center items-center">
    <div className="bg-white overflow-auto w-full text-center">
      <button
        className="bg-red-500 text-white p-2 rounded absolute top-4 right-4"
        onClick={onClose}
      >
        Close
      </button>
      {children}
    </div>
  </div>
);

export default Modal;
