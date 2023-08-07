// ModalComponent.js
import React from 'react';
import { useModal } from './ModalContext';

function BookedAlert() {
  const { isModalOpen, setIsModalOpen } = useModal();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal">ghjnkml
Helooo          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
}

export default BookedAlert;
