import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ConfirmModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Deletion"
    >
      <h2>Confirm Deletion</h2>
      <p>Do you really want to delete this password?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onRequestClose}>No</button>
    </Modal>
  );
};

export default ConfirmModal;
