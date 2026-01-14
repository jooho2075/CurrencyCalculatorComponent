import React from 'react'

const Modal = ({ children, onClose }) => {

  return (
    <>
      {/* Modal backdrop */}
      <div
        data-cy="modal-backdrop"
        className="fixed top-0 left-0 w-full h-full bg-black/20 backdrop-blur-md z-10"
        onClick={onClose}
      />

      {/* Modal content */}
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   bg-white p-6 rounded-2xl shadow-xl z-20 w-[420px] max-w-[90%]"
      >
        {children}
      </div>
    </>
  );
}

export default Modal;