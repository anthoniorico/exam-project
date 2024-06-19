/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, onSubmit, children }) => {
    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white p-4 rounded shadow-lg w-1/3 relative">
                <button onClick={onClose} className="absolute top-0 right-0 p-2">&times;</button>
                {children}
                <div className="flex justify-end mt-4">                
                <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            </div>
        </div>
        </div>
    );
}

Modal.PropTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};
export default Modal;