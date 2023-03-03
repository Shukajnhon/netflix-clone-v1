import React from "react";
import {Modal} from "@mui/material";

const ModalMovies = ({showModal, handleClose}) => {
  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    ></Modal>
  );
};

export default ModalMovies;
