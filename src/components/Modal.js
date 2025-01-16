// // Modal.js
// import React from 'react';

// const Modal = ({ isOpen, onClose, Name }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//         <h2 className="text-2xl font-semibold text-center mb-4">Welcome, {Name}!</h2>
//         <p className="text-center mb-4">Thank you for logging in. We're glad to have you back!</p>
//         <button
//           onClick={onClose}
//           className="w-full bg-[#6c6a50] text-white py-2 rounded-lg hover:bg-[#5a5740] transition duration-200"
//         >
//           Okay
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Modal;


import React from "react";

const Modal = ({ isOpen, onClose}) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold">Welcome,</h2>
        <p className="mt-2">We're glad to have you here. Enjoy your shopping!</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={onClose}
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default Modal;

